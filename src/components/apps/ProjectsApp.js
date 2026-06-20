'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import { useOs } from '@/context/OsContext';
import { ExternalLink, GitBranch, ArrowLeft, CheckCircle } from 'lucide-react';

export default function ProjectsApp() {
  const { state } = useOs();
  const [selected, setSelected] = useState(state.projectsSelectedId || null);
  const project = projects.find((p) => p.id === selected);

  if (project) {
    return (
      <div className="h-full overflow-y-auto p-4">
        <button
          type="button"
          onClick={() => setSelected(null)}
          className="flex items-center gap-1 text-xs text-accent mb-4 border-0 bg-transparent cursor-pointer hover:underline"
        >
          <ArrowLeft size={14} /> Back to projects
        </button>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="flex items-start justify-between mb-3">
            <div>
              <h2 className="text-lg font-bold text-[var(--os-text)]">{project.title}</h2>
              <p className="text-xs text-muted">{project.year} · {project.status}</p>
            </div>
            <div className="flex gap-2">
              {project.links.github && (
                <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent">
                  <GitBranch size={16} />
                </a>
              )}
              {project.links.demo && (
                <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent">
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
          </div>
          <p className="text-sm text-muted mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tech.map((t) => (
              <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-glass text-accent">{t}</span>
            ))}
          </div>
          <Section title="Features" items={project.features} />
          <Section title="Architecture" text={project.architecture} />
          <Section title="Challenges" text={project.challenges} />
        </motion.div>
      </div>
    );
  }

  return (
    <div className="h-full overflow-y-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {projects.map((p, i) => (
          <motion.button
            key={p.id}
            type="button"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            onClick={() => setSelected(p.id)}
            className="text-left p-4 rounded-xl bg-glass hover:bg-accent/10 border-0 cursor-pointer transition-colors"
          >
            <div className="text-sm font-semibold text-[var(--os-text)] mb-1">{p.title}</div>
            <div className="text-xs text-muted mb-2 line-clamp-2">{p.shortDesc}</div>
            <div className="flex flex-wrap gap-1">
              {p.tech.slice(0, 3).map((t) => (
                <span key={t} className="text-[10px] px-1.5 py-0.5 rounded bg-[var(--os-glass)] text-accent">{t}</span>
              ))}
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}

function Section({ title, items, text }) {
  return (
    <div className="mb-4">
      <h4 className="text-xs font-semibold text-accent mb-2">{title}</h4>
      {items ? (
        <ul className="space-y-1">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-2 text-xs text-muted">
              <CheckCircle size={12} className="text-accent shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-xs text-muted leading-relaxed">{text}</p>
      )}
    </div>
  );
}
