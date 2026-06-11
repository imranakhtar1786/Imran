'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { profile } from '@/data/profile';
import { Mail, GitBranch, Link, Send, CheckCircle } from 'lucide-react';

export default function ContactApp() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.open(`mailto:${profile.email}?subject=${subject}&body=${body}`, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  }

  return (
    <div className="h-full overflow-y-auto p-4">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
        <div className="text-center mb-4">
          <h2 className="text-lg font-bold text-[var(--os-text)]">Get in Touch</h2>
          <p className="text-xs text-muted mt-1">{profile.availability}</p>
        </div>

        <div className="grid grid-cols-1 gap-2 mb-4">
          {[
            { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
            { icon: GitBranch, label: 'GitHub', href: profile.links.github },
            { icon: Link, label: 'LinkedIn', href: profile.links.linkedin },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-xl bg-glass hover:bg-accent/10 transition-colors text-sm text-muted"
            >
              <link.icon size={16} className="text-accent" />
              {link.label}
            </a>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            placeholder="Your name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-3 py-2 rounded-lg bg-glass border border-[var(--os-glass-border)] text-sm text-[var(--os-text)] outline-none focus:ring-2 focus:ring-[var(--os-accent)]"
          />
          <input
            type="email"
            placeholder="Your email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-3 py-2 rounded-lg bg-glass border border-[var(--os-glass-border)] text-sm text-[var(--os-text)] outline-none focus:ring-2 focus:ring-[var(--os-accent)]"
          />
          <textarea
            placeholder="Your message"
            required
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full px-3 py-2 rounded-lg bg-glass border border-[var(--os-glass-border)] text-sm text-[var(--os-text)] outline-none focus:ring-2 focus:ring-[var(--os-accent)] resize-none"
          />
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-accent text-white text-sm font-medium border-0 cursor-pointer hover:opacity-90"
          >
            {sent ? <><CircleCheck size={16} /> Sent!</> : <><Send size={16} /> Send Message</>}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
