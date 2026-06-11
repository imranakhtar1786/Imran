'use client';

import Terminal from '@/components/terminal/Terminal';
import FileExplorer from '@/components/explorer/FileExplorer';
import AboutApp from '@/components/apps/AboutApp';
import SkillsApp from '@/components/apps/SkillsApp';
import ProjectsApp from '@/components/apps/ProjectsApp';
import ExperienceApp from '@/components/apps/ExperienceApp';
import EducationApp from '@/components/apps/EducationApp';
import ResumeApp from '@/components/apps/ResumeApp';
import ContactApp from '@/components/apps/ContactApp';
import SettingsApp from '@/components/apps/SettingsApp';

const APP_MAP = {
  terminal: Terminal,
  explorer: FileExplorer,
  about: AboutApp,
  skills: SkillsApp,
  projects: ProjectsApp,
  experience: ExperienceApp,
  education: EducationApp,
  resume: ResumeApp,
  contact: ContactApp,
  settings: SettingsApp,
};

export default function WindowContent({ windowId, appId }) {
  const Component = APP_MAP[appId];
  if (!Component) {
    return <div className="p-4 text-muted text-sm">Unknown application: {appId}</div>;
  }
  return <Component windowId={windowId} />;
}
