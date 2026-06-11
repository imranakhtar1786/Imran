'use client';

import { profile } from '@/data/profile';
import { skillCategories } from '@/data/skills';

const ASCII_ART = `
       ██████╗ ███████╗
      ██╔═══██╗██╔════╝
      ██║   ██║███████╗
      ██║   ██║╚════██║
      ╚██████╔╝███████║
       ╚═════╝ ╚══════╝`;

export default function Neofetch() {
  const topSkills = skillCategories
    .flatMap((c) => c.skills.slice(0, 2).map((s) => s.name))
    .slice(0, 6)
    .join(', ');

  const info = [
    `${profile.name}@imranos`,
    '─────────────────────────',
    'OS: ImranOS x86_64',
    `Host: ${profile.hostname}`,
    'Kernel: Next.js 16.2.7',
    `Shell: imranos-sh 1.0`,
    `Role: ${profile.role}`,
    `Location: ${profile.location}`,
    `Skills: ${topSkills}`,
    `GitHub: ${profile.links.github}`,
  ].join('\n');

  return (
    <pre className="font-mono text-[13px] text-[var(--os-terminal-text)] whitespace-pre mb-2">
      {ASCII_ART}
      {'\n'}
      {info}
    </pre>
  );
}
