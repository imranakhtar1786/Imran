'use client';

import { profile } from '@/data/profile';
import { experience } from '@/data/experience';
import { education } from '@/data/education';
import { skillCategories } from '@/data/skills';
import { Download, FileText } from 'lucide-react';

export default function ResumeApp() {
  function handleDownload() {
    const a = document.createElement('a');
    a.href = '/resume.pdf';
    a.download = `${profile.name.replace(/\s/g, '_')}_Resume.pdf`;
    a.target = '_blank';
    a.click();
  }

  return (
    <div className="h-full overflow-y-auto p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <FileText size={18} className="text-accent" />
          <h2 className="text-sm font-semibold">Resume</h2>
        </div>
        <button
          type="button"
          onClick={handleDownload}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent text-white text-xs border-0 cursor-pointer hover:opacity-90"
        >
          <Download size={14} />
          Download
        </button>
      </div>

      <div className="bg-glass rounded-xl p-4 font-mono text-xs space-y-4 leading-relaxed">
        <div className="text-center border-b border-[var(--os-glass-border)] pb-4">
          <div className="text-lg font-bold text-accent">{profile.name}</div>
          <div className="text-muted">{profile.role}</div>
          <div className="text-dim mt-1">{profile.email} · {profile.location}</div>
        </div>

        <section>
          <h3 className="text-accent font-semibold mb-2 uppercase tracking-wider text-[10px]">Summary</h3>
          <p className="text-muted">{profile.summary}</p>
        </section>

        <section>
          <h3 className="text-accent font-semibold mb-2 uppercase tracking-wider text-[10px]">Experience</h3>
          {experience.map((e) => (
            <div key={e.id} className="mb-3">
              <div className="text-[var(--os-text)] font-medium">{e.role} — {e.company}</div>
              <div className="text-dim">{e.start} – {e.end}</div>
              {e.responsibilities.slice(0, 2).map((r) => (
                <div key={r} className="text-muted ml-2">• {r}</div>
              ))}
            </div>
          ))}
        </section>

        <section>
          <h3 className="text-accent font-semibold mb-2 uppercase tracking-wider text-[10px]">Education</h3>
          {education.map((e) => (
            <div key={e.id} className="mb-2">
              <div className="text-[var(--os-text)]">{e.degree}</div>
              <div className="text-dim">{e.institution} ({e.start}–{e.end})</div>
            </div>
          ))}
        </section>

        <section>
          <h3 className="text-accent font-semibold mb-2 uppercase tracking-wider text-[10px]">Skills</h3>
          {skillCategories.map((c) => (
            <div key={c.id} className="text-muted mb-1">
              <span className="text-accent">{c.name}:</span> {c.skills.map((s) => s.name).join(', ')}
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

function generateResumeText() {
  const lines = [
    profile.name,
    profile.role,
    `${profile.email} | ${profile.location}`,
    '',
    'SUMMARY',
    profile.summary,
    '',
    'EXPERIENCE',
    ...experience.flatMap((e) => [
      `${e.role} — ${e.company} (${e.start} – ${e.end})`,
      ...e.responsibilities.map((r) => `  • ${r}`),
      '',
    ]),
    'EDUCATION',
    ...education.map((e) => `${e.degree} — ${e.institution} (${e.start}–${e.end})`),
    '',
    'SKILLS',
    ...skillCategories.map((c) => `${c.name}: ${c.skills.map((s) => s.name).join(', ')}`),
  ];
  return lines.join('\n');
}
