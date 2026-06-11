'use client';

import { motion } from 'framer-motion';
import { skillCategories } from '@/data/skills';
import { Layout, Server, Database, Cloud, Wrench } from 'lucide-react';

const ICONS = { layout: Layout, server: Server, database: Database, cloud: Cloud, wrench: Wrench };

export default function SkillsApp() {
  return (
    <div className="h-full overflow-y-auto p-4 space-y-5">
      {skillCategories.map((cat, ci) => {
        const Icon = ICONS[cat.icon] || Wrench;
        return (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: ci * 0.08 }}
            className="bg-glass rounded-xl p-4"
          >
            <div className="flex items-center gap-2 mb-3">
              <Icon size={16} className="text-accent" />
              <h3 className="text-sm font-semibold text-accent">{cat.name}</h3>
            </div>
            <div className="space-y-3">
              {cat.skills.map((skill, si) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-[var(--os-text)]">{skill.name}</span>
                    <span className="text-muted">{skill.level}%</span>
                  </div>
                  <div className="os-progress-track">
                    <motion.div
                      className="os-progress-fill"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ delay: ci * 0.08 + si * 0.05, duration: 0.8 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
