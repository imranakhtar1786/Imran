'use client';

import { motion } from 'framer-motion';
import { education } from '@/data/education';
import { GraduationCap } from 'lucide-react';

export default function EducationApp() {
  return (
    <div className="h-full overflow-y-auto p-4 space-y-4">
      {education.map((edu, i) => (
        <motion.div
          key={edu.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="bg-glass rounded-xl p-4"
        >
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
              <GraduationCap size={18} className="text-accent" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[var(--os-text)]">{edu.degree}</h3>
              <p className="text-xs text-accent">{edu.institution}</p>
              <p className="text-[10px] text-muted mt-1">
                {edu.location} · {edu.start} – {edu.end}
                {edu.gpa && ` · GPA: ${edu.gpa}`}
              </p>
              <ul className="mt-2 space-y-1">
                {edu.highlights.map((h) => (
                  <li key={h} className="text-xs text-muted flex gap-2">
                    <span className="text-accent">•</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
