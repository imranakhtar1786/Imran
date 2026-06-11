import { profile } from '@/data/profile';
import { projects } from '@/data/projects';
import { skillCategories } from '@/data/skills';
import { experience } from '@/data/experience';
import { education } from '@/data/education';
import { themes, themeList } from '@/lib/themes';
import { ls, cd, cat, pwd, find, tree } from '@/lib/filesystem';
import { runPython } from '@/lib/pythonInterpreter';

const HELP_TEXT = `Available commands:
  help          Show this help message
  clear         Clear terminal screen
  ls [path]     List directory contents
  cd <path>     Change directory
  pwd           Print working directory
  cat <file>    Display file contents
  tree          Show directory tree
  find <name>   Find files by name
  whoami        Display current user
  hostname      Display system hostname
  neofetch      System information
  date          Current date and time
  echo <text>   Echo text to terminal
  uname -a      System information
  uptime        System uptime
  projects      List portfolio projects
  skills        List technical skills
  experience    Work experience summary
  education     Education summary
  about         About the developer
  contact       Contact information
  hire          Hiring information
  theme [name]  List or switch themes
  open <app>    Open an application
  python        Enter Python mode (type 'exit' to leave)
  matrix        Toggle matrix rain effect
  history       Show command history
  sudo hire imran  Easter egg command`;

export function createTerminalState() {
  return {
    cwd: '/home/imran',
    history: [],
    historyIndex: -1,
    output: [
      { type: 'info', text: 'Welcome to ImranOS Terminal v1.0' },
      { type: 'info', text: 'Type "help" for available commands.' },
    ],
    pythonMode: false,
    matrixActive: false,
  };
}

export function executeCommand(input, state, callbacks = {}) {
  const trimmed = input.trim();
  if (!trimmed) return { state };

  const newHistory = [...state.history, trimmed];
  const lines = [];

  if (state.pythonMode) {
    if (trimmed === 'exit') {
      return {
        state: { ...state, pythonMode: false, history: newHistory },
        lines: [{ type: 'info', text: 'Exited Python mode.' }],
      };
    }
    const result = runPython(trimmed);
    if (result.error) lines.push({ type: 'error', text: result.error });
    else if (result.output) lines.push({ type: 'output', text: result.output });
    return { state: { ...state, history: newHistory }, lines };
  }

  const parts = trimmed.split(/\s+/);
  const cmd = parts[0].toLowerCase();
  const args = parts.slice(1);

  if (trimmed === 'sudo hire imran') {
    lines.push({ type: 'success', text: '🎉 Access granted! Imran is available for hire!' });
    lines.push({ type: 'info', text: `Email: ${profile.email}` });
    lines.push({ type: 'info', text: `LinkedIn: ${profile.links.linkedin}` });
    if (callbacks.openApp) callbacks.openApp('contact');
    return { state: { ...state, history: newHistory }, lines };
  }

  switch (cmd) {
    case 'help':
      lines.push({ type: 'output', text: HELP_TEXT });
      break;

    case 'clear':
      return { state: { ...state, history: newHistory, output: [] }, clear: true };

    case 'ls': {
      const long = args.some((a) => a.startsWith('-') && a.includes('l'));
      const pathArg = args.find((a) => !a.startsWith('-'));
      const target = pathArg
        ? pathArg.startsWith('/')
          ? pathArg
          : `${state.cwd}/${pathArg}`.replace(/\/+/g, '/')
        : state.cwd;
      const result = ls(target, { long });
      if (result.error) lines.push({ type: 'error', text: result.error });
      else lines.push({ type: 'output', text: result.output || '(empty)' });
      break;
    }

    case 'cd': {
      const result = cd(state.cwd, args[0]);
      if (result.error) lines.push({ type: 'error', text: result.error });
      else return { state: { ...state, cwd: result.cwd, history: newHistory }, lines };
      break;
    }

    case 'pwd':
      lines.push({ type: 'output', text: pwd(state.cwd) });
      break;

    case 'cat': {
      if (!args[0]) { lines.push({ type: 'error', text: 'cat: missing file operand' }); break; }
      const result = cat(state.cwd, args[0]);
      if (result.error) lines.push({ type: 'error', text: result.error });
      else lines.push({ type: 'output', text: result.output });
      break;
    }

    case 'tree': {
      const result = tree(state.cwd);
      if (result.error) lines.push({ type: 'error', text: result.error });
      else lines.push({ type: 'output', text: result.output });
      break;
    }

    case 'find': {
      const result = find(state.cwd, args[0] || '');
      lines.push({ type: 'output', text: result.output });
      break;
    }

    case 'whoami':
      lines.push({ type: 'output', text: profile.username });
      break;

    case 'hostname':
      lines.push({ type: 'output', text: profile.hostname });
      break;

    case 'neofetch':
      lines.push({ type: 'neofetch' });
      break;

    case 'date':
      lines.push({ type: 'output', text: new Date().toString() });
      break;

    case 'echo':
      lines.push({ type: 'output', text: args.join(' ') });
      break;

    case 'uname':
      lines.push({ type: 'output', text: 'ImranOS 1.0 x86_64 GNU/Linux' });
      break;

    case 'uptime':
      lines.push({ type: 'output', text: 'up 42 days,  3:14,  1 user,  load average: 0.42, 0.35, 0.28' });
      break;

    case 'projects':
      projects.forEach((p) => lines.push({ type: 'output', text: `• ${p.title} (${p.year}) — ${p.shortDesc}` }));
      break;

    case 'skills':
      skillCategories.forEach((c) => {
        lines.push({ type: 'accent', text: `[${c.name}]` });
        c.skills.forEach((s) => lines.push({ type: 'output', text: `  ${s.name}: ${s.level}%` }));
      });
      break;

    case 'experience':
      experience.forEach((e) => lines.push({ type: 'output', text: `• ${e.role} @ ${e.company} (${e.start} – ${e.end})` }));
      break;

    case 'education':
      education.forEach((e) => lines.push({ type: 'output', text: `• ${e.degree} — ${e.institution} (${e.start}–${e.end})` }));
      break;

    case 'about':
      lines.push({ type: 'output', text: `${profile.name} — ${profile.role}` });
      lines.push({ type: 'output', text: profile.bio });
      break;

    case 'contact':
      lines.push({ type: 'output', text: `Email: ${profile.email}` });
      lines.push({ type: 'output', text: `GitHub: ${profile.links.github}` });
      lines.push({ type: 'output', text: `LinkedIn: ${profile.links.linkedin}` });
      break;

    case 'hire':
      lines.push({ type: 'success', text: `${profile.name} is ${profile.availability}!` });
      lines.push({ type: 'info', text: `Try: sudo hire imran` });
      break;

    case 'theme':
      if (!args[0]) {
        lines.push({ type: 'output', text: 'Available themes: ' + themeList.map((t) => t.id).join(', ') });
      } else if (callbacks.setTheme && themes[args[0]]) {
        callbacks.setTheme(args[0]);
        lines.push({ type: 'success', text: `Theme switched to ${args[0]}` });
      } else {
        lines.push({ type: 'error', text: `theme: unknown theme '${args[0]}'` });
      }
      break;

    case 'open':
      if (!args[0]) { lines.push({ type: 'error', text: 'open: missing app name' }); break; }
      if (callbacks.openApp) {
        callbacks.openApp(args[0]);
        lines.push({ type: 'success', text: `Opening ${args[0]}...` });
      }
      break;

    case 'python':
      return { state: { ...state, pythonMode: true, history: newHistory }, lines: [{ type: 'info', text: 'Python 3.11 sandbox mode. Type "exit" to leave.' }] };

    case 'matrix':
      return { state: { ...state, matrixActive: !state.matrixActive, history: newHistory }, lines: [{ type: 'info', text: state.matrixActive ? 'Matrix rain disabled.' : 'Matrix rain enabled.' }], toggleMatrix: !state.matrixActive };

    case 'history':
      state.history.forEach((h, i) => lines.push({ type: 'dim', text: `  ${i + 1}  ${h}` }));
      break;

    default:
      lines.push({ type: 'error', text: `${cmd}: command not found. Type 'help' for available commands.` });
  }

  return { state: { ...state, history: newHistory }, lines };
}
