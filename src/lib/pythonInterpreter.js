const BLOCKED = /import|exec|eval|open|__|global|os\.|sys\.|subprocess|require|fetch|window|document/i;

export function runPython(code) {
  const lines = code.split('\n').map((l) => l.trim()).filter(Boolean);
  const output = [];
  const vars = {};

  try {
    for (const line of lines) {
      if (BLOCKED.test(line)) {
        return { error: 'SecurityError: operation not permitted in sandbox' };
      }

      const printMatch = line.match(/^print\s*\((.+)\)\s*$/);
      if (printMatch) {
        const val = evaluateExpr(printMatch[1], vars);
        output.push(String(val));
        continue;
      }

      const assignMatch = line.match(/^(\w+)\s*=\s*(.+)$/);
      if (assignMatch) {
        vars[assignMatch[1]] = evaluateExpr(assignMatch[2], vars);
        continue;
      }

      const funcDef = line.match(/^def\s+(\w+)\s*\(([^)]*)\)\s*:/);
      if (funcDef) {
        output.push(`Defined function: ${funcDef[1]}()`);
        continue;
      }

      const forLoop = line.match(/^for\s+(\w+)\s+in\s+(.+)\s*:/);
      if (forLoop) {
        const iterable = evaluateExpr(forLoop[2], vars);
        if (Array.isArray(iterable)) {
          for (const item of iterable) {
            vars[forLoop[1]] = item;
          }
        }
        continue;
      }

      if (line.startsWith('#')) continue;

      return { error: `SyntaxError: invalid syntax at '${line}'` };
    }

    return { output: output.length ? output.join('\n') : '(no output)' };
  } catch (e) {
    return { error: `${e.name}: ${e.message}` };
  }
}

function evaluateExpr(expr, vars) {
  const trimmed = expr.trim();

  if ((trimmed.startsWith('"') && trimmed.endsWith('"')) || (trimmed.startsWith("'") && trimmed.endsWith("'"))) {
    return trimmed.slice(1, -1);
  }

  if (/^\d+(\.\d+)?$/.test(trimmed)) return Number(trimmed);

  if (trimmed.startsWith('[') && trimmed.endsWith(']')) {
    const inner = trimmed.slice(1, -1).trim();
    if (!inner) return [];
    return inner.split(',').map((s) => evaluateExpr(s.trim(), vars));
  }

  if (trimmed.startsWith('{') && trimmed.endsWith('}')) {
    const obj = {};
    const inner = trimmed.slice(1, -1).trim();
    if (inner) {
      inner.split(',').forEach((pair) => {
        const [k, v] = pair.split(':').map((s) => s.trim());
        obj[evaluateExpr(k, vars)] = evaluateExpr(v, vars);
      });
    }
    return obj;
  }

  if (vars[trimmed] !== undefined) return vars[trimmed];

  const mathMatch = trimmed.match(/^([\d.+\-*/()\s]+)$/);
  if (mathMatch) {
    const safe = mathMatch[1].replace(/[^0-9+\-*/().\s]/g, '');
    return Function(`"use strict"; return (${safe})`)();
  }

  if (trimmed === 'True') return true;
  if (trimmed === 'False') return false;
  if (trimmed === 'None') return null;

  return trimmed;
}
