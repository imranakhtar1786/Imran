import { filesystem } from '@/data/filesystem';

function normalizePath(path) {
  if (!path || path === '~') return '/home/imran';
  let p = path.replace(/\/+/g, '/');
  if (!p.startsWith('/')) p = `/home/imran/${p}`.replace(/\/+/g, '/');
  if (p.endsWith('/') && p.length > 1) p = p.slice(0, -1);
  return p;
}

function getNodeAtPath(path) {
  const normalized = normalizePath(path);
  if (normalized === '/') return filesystem;

  const parts = normalized.split('/').filter(Boolean);
  let node = filesystem;

  for (const part of parts) {
    if (!node || node.type !== 'dir' || !node.children) return null;
    node = node.children.find((c) => c.name === part);
    if (!node) return null;
  }
  return node;
}

function getParentPath(path) {
  const normalized = normalizePath(path);
  if (normalized === '/') return '/';
  const parts = normalized.split('/').filter(Boolean);
  parts.pop();
  return parts.length ? `/${parts.join('/')}` : '/';
}

export function pwd(cwd) {
  return normalizePath(cwd);
}

export function ls(cwd, flags = {}) {
  const node = getNodeAtPath(cwd);
  if (!node) return { error: `ls: cannot access '${cwd}': No such file or directory` };
  if (node.type !== 'dir') return { error: `ls: '${cwd}': Not a directory` };

  const entries = node.children || [];
  if (flags.long) {
    const lines = entries.map((e) => {
      const type = e.type === 'dir' ? 'd' : '-';
      const perms = e.type === 'dir' ? 'rwxr-xr-x' : 'rw-r--r--';
      const size = e.content ? e.content.length : 4096;
      return `${type}${perms}  1 imran imran ${String(size).padStart(6)} Jan  1 00:00 ${e.name}`;
    });
    return { output: lines.join('\n') };
  }

  const names = entries.map((e) => (e.type === 'dir' ? `${e.name}/` : e.name));
  return { output: names.join('  ') || '(empty)' };
}

export function cd(cwd, target) {
  if (!target || target === '~') return { cwd: '/home/imran' };
  if (target === '..') return { cwd: getParentPath(cwd) };
  if (target === '.') return { cwd: normalizePath(cwd) };

  let newPath;
  if (target.startsWith('/')) {
    newPath = normalizePath(target);
  } else if (target.startsWith('~/')) {
    newPath = normalizePath(target.slice(2));
  } else {
    const base = normalizePath(cwd);
    newPath = base === '/' ? `/${target}` : `${base}/${target}`;
    newPath = normalizePath(newPath);
  }

  const node = getNodeAtPath(newPath);
  if (!node) return { error: `cd: ${target}: No such file or directory` };
  if (node.type !== 'dir') return { error: `cd: ${target}: Not a directory` };
  return { cwd: newPath };
}

export function cat(cwd, filename) {
  const base = normalizePath(cwd);
  const fullPath = filename.startsWith('/') ? normalizePath(filename) : `${base}/${filename}`.replace(/\/+/g, '/');
  const node = getNodeAtPath(fullPath);
  if (!node) return { error: `cat: ${filename}: No such file or directory` };
  if (node.type === 'dir') return { error: `cat: ${filename}: Is a directory` };
  return { output: node.content || '' };
}

export function tree(cwd, depth = 2) {
  const node = getNodeAtPath(cwd);
  if (!node) return { error: `tree: ${cwd}: No such file or directory` };

  function buildTree(n, prefix = '', isLast = true, currentDepth = 0) {
    if (currentDepth > depth) return '';
    const connector = isLast ? '└── ' : '├── ';
    let result = `${prefix}${connector}${n.name}${n.type === 'dir' ? '/' : ''}\n`;
    if (n.type === 'dir' && n.children && currentDepth < depth) {
      const childPrefix = prefix + (isLast ? '    ' : '│   ');
      n.children.forEach((child, i) => {
        result += buildTree(child, childPrefix, i === n.children.length - 1, currentDepth + 1);
      });
    }
    return result;
  }

  const rootName = normalizePath(cwd);
  let output = `${rootName}\n`;
  if (node.type === 'dir' && node.children) {
    node.children.forEach((child, i) => {
      output += buildTree(child, '', i === node.children.length - 1, 0);
    });
  }
  return { output: output.trimEnd() };
}

export function find(cwd, pattern) {
  const results = [];
  const regex = new RegExp(pattern.replace(/\*/g, '.*'), 'i');

  function search(node, currentPath) {
    const fullPath = currentPath === '/' ? `/${node.name}` : `${currentPath}/${node.name}`;
    if (node.name !== '/' && regex.test(node.name)) results.push(fullPath);
    if (node.type === 'dir' && node.children) {
      node.children.forEach((child) => search(child, node.name === '/' ? '' : fullPath));
    }
  }

  const start = getNodeAtPath(cwd);
  if (!start) return { error: `find: ${cwd}: No such file or directory` };
  if (start.type === 'dir') {
    start.children?.forEach((child) => {
      const base = normalizePath(cwd);
      search(child, base);
    });
  }
  return { output: results.join('\n') || '(no matches)' };
}

export function getDirectoryContents(path) {
  const node = getNodeAtPath(path);
  if (!node || node.type !== 'dir') return [];
  return (node.children || []).map((child) => ({
    name: child.name,
    type: child.type,
    app: child.app,
    projectId: child.projectId,
    content: child.content,
  }));
}

export function resolvePath(cwd, name) {
  if (name.startsWith('/')) return normalizePath(name);
  const base = normalizePath(cwd);
  return base === '/' ? `/${name}` : `${base}/${name}`.replace(/\/+/g, '/');
}

export { normalizePath, getNodeAtPath };
