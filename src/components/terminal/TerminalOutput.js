'use client';

import Neofetch from '@/components/terminal/Neofetch';

const TYPE_STYLES = {
  system: 'text-[var(--os-text-muted)]',
  output: 'text-[var(--os-terminal-text)]',
  error: 'text-red-400',
  success: 'text-green-400',
  info: 'text-blue-300',
  accent: 'text-[var(--os-accent)] font-semibold',
  dim: 'text-[var(--os-text-dim)]',
  command: 'text-[var(--os-text)]',
};

export default function TerminalOutput({ lines }) {
  return (
    <div className="space-y-0.5">
      {lines.map((line, i) => {
        if (line.type === 'neofetch') {
          return <Neofetch key={i} />;
        }
        const style = TYPE_STYLES[line.type] || TYPE_STYLES.output;
        return (
          <div key={i} className={`${style} whitespace-pre-wrap break-words`}>
            {line.text}
          </div>
        );
      })}
    </div>
  );
}
