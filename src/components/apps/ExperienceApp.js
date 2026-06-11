'use client';

import { motion } from 'framer-motion';
import { experience } from '@/data/experience';
import { Briefcase } from 'lucide-react';

export default function ExperienceApp() {
  return (
    <div className="h-full overflow-y-auto p-4">
      <div className="relative space-y-6">
        {experience.map((job, i) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="relative pl-8"
          >
            {i < experience.length - 1 && <div className="os-timeline-line" />}
            <div className="absolute left-0 top-1 os-timeline-dot" />
            <div className="bg-glass rounded-xl p-4">
              <div className="flex items-start gap-2 mb-2">
                <Briefcase size={16} className="text-accent shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-[var(--os-text)]">{job.role}</h3>
                  <p className="text-xs text-accent">{job.company}</p>
                </div>
              </div>
              <p className="text-[10px] text-muted mb-3">
                {job.start} – {job.end} · {job.location} · {job.type}
              </p>
              <ul className="space-y-1.5">
                {job.responsibilities.map((r) => (
                  <li key={r} className="text-xs text-muted leading-relaxed flex gap-2">
                    <span className="text-accent shrink-0">›</span>
                    {r}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1 mt-3">
                {job.tech.map((t) => (
                  <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-[var(--os-glass)] text-accent">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
