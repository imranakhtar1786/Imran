'use client';

import { motion } from 'framer-motion';
import { skillCategories } from '@/data/skills';
import { Layout, Server, Database, Cloud, Wrench } from 'lucide-react';
import {
  SiReact, SiJavascript, SiCss, SiTailwindcss, SiSass,
  SiPython, SiNodedotjs, SiPostgresql, SiMysql, SiMongodb, SiRedis,
  SiVercel, SiDigitalocean, SiNginx, SiGit, SiRedux,
} from 'react-icons/si';
import { FaServer, FaCogs, FaTachometerAlt } from 'react-icons/fa';
import { TbApi } from 'react-icons/tb';
import { VscVscode } from 'react-icons/vsc';

const ICONS = { layout: Layout, server: Server, database: Database, cloud: Cloud, wrench: Wrench };

const SKILL_ICONS = {
  react: SiReact,
  javascript: SiJavascript,
  css3: SiCss,
  tailwind: SiTailwindcss,
  sass: SiSass,
  python: SiPython,
  nodejs: SiNodedotjs,
  api: TbApi,
  performance: FaTachometerAlt,
  postgresql: SiPostgresql,
  mysql: SiMysql,
  mongodb: SiMongodb,
  redis: SiRedis,
  vercel: SiVercel,
  digitalocean: SiDigitalocean,
  server: FaServer,
  nginx: SiNginx,
  git: SiGit,
  vscode: VscVscode,
  redux: SiRedux,
  code: FaCogs,
};

export default function SkillsApp() {
  return (
    <div className="h-full overflow-y-auto p-4 space-y-5">
      {skillCategories.map((cat, ci) => {
        const CategoryIcon = ICONS[cat.icon] || Wrench;
        return (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: ci * 0.08 }}
            className="bg-glass rounded-xl p-4"
          >
            <div className="flex items-center gap-2 mb-4">
              <CategoryIcon size={18} className="text-accent" />
              <h3 className="text-sm font-semibold text-accent">{cat.name}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, si) => {
                const SkillIcon = SKILL_ICONS[skill.iconName];
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: ci * 0.08 + si * 0.05, duration: 0.3 }}
                    className="px-3 py-1.5 bg-white/5 border border-[var(--os-glass-border)] rounded-lg text-xs text-[var(--os-text)] flex items-center gap-2 hover:bg-white/10 transition-colors"
                  >
                    {SkillIcon && <SkillIcon className="text-accent" size={14} />}
                    {skill.name}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
