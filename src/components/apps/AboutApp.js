'use client';

import { motion } from 'framer-motion';
import { profile } from '@/data/profile';
import { GitBranch, Link, Mail, MapPin, Briefcase } from 'lucide-react';

const SOCIAL_ICONS = { github: GitBranch, linkedin: Link, mail: Mail };

export default function AboutApp() {
  return (
    <div className="h-full overflow-y-auto p-5">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center text-center mb-6">
        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[var(--os-accent)] to-[var(--os-accent-2)] flex items-center justify-center text-3xl font-bold text-white mb-4 shadow-lg">
          {profile.name.split(' ').map((n) => n[0]).join('')}
        </div>
        <h1 className="text-xl font-bold text-[var(--os-text)]">{profile.name}</h1>
        <p className="text-accent font-medium">{profile.role}</p>
        <p className="text-muted text-sm mt-1">{profile.tagline}</p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-3 mb-6 text-xs text-muted">
        <span className="flex items-center gap-1"><MapPin size={12} /> {profile.location}</span>
        <span className="flex items-center gap-1"><Briefcase size={12} /> {profile.experience}</span>
        <span className="text-green-400">{profile.availability}</span>
      </div>

      <p className="text-sm text-muted leading-relaxed mb-6">{profile.bio}</p>

      <div className="flex justify-center gap-3">
        {profile.social.map((s) => {
          const Icon = SOCIAL_ICONS[s.icon] || Mail;
          return (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-glass flex items-center justify-center text-accent hover:bg-accent/20 transition-colors"
            >
              <Icon size={18} />
            </a>
          );
        })}
      </div>
    </div>
  );
}
