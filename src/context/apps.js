import {
  Terminal,
  User,
  Code2,
  FolderOpen,
  Briefcase,
  GraduationCap,
  FileText,
  Mail,
  Settings,
  Wrench,
  Folder,
} from 'lucide-react';

export const APPS = {
  terminal: {
    id: 'terminal',
    title: 'Terminal',
    icon: Terminal,
    defaultSize: { width: 720, height: 460 },
    defaultPosition: { x: 80, y: 60 },
  },
  about: {
    id: 'about',
    title: 'About Me',
    icon: User,
    defaultSize: { width: 520, height: 480 },
    defaultPosition: { x: 120, y: 80 },
  },
  skills: {
    id: 'skills',
    title: 'Skills',
    icon: Wrench,
    defaultSize: { width: 600, height: 500 },
    defaultPosition: { x: 160, y: 100 },
  },
  projects: {
    id: 'projects',
    title: 'Projects',
    icon: Code2,
    defaultSize: { width: 700, height: 520 },
    defaultPosition: { x: 200, y: 80 },
  },
  experience: {
    id: 'experience',
    title: 'Experience',
    icon: Briefcase,
    defaultSize: { width: 580, height: 480 },
    defaultPosition: { x: 140, y: 90 },
  },
  education: {
    id: 'education',
    title: 'Education',
    icon: GraduationCap,
    defaultSize: { width: 540, height: 440 },
    defaultPosition: { x: 180, y: 110 },
  },
  resume: {
    id: 'resume',
    title: 'Resume',
    icon: FileText,
    defaultSize: { width: 500, height: 520 },
    defaultPosition: { x: 220, y: 70 },
  },
  contact: {
    id: 'contact',
    title: 'Contact',
    icon: Mail,
    defaultSize: { width: 480, height: 460 },
    defaultPosition: { x: 260, y: 100 },
  },
  settings: {
    id: 'settings',
    title: 'Settings',
    icon: Settings,
    defaultSize: { width: 500, height: 420 },
    defaultPosition: { x: 300, y: 120 },
  },
  explorer: {
    id: 'explorer',
    title: 'Files',
    icon: FolderOpen,
    defaultSize: { width: 680, height: 460 },
    defaultPosition: { x: 100, y: 100 },
  },
  files: {
    id: 'explorer',
    title: 'Files',
    icon: Folder,
    defaultSize: { width: 680, height: 460 },
    defaultPosition: { x: 100, y: 100 },
  },
};

export const DESKTOP_ICONS = [
  { id: 'icon-about', appId: 'about', label: 'About Me', x: 24, y: 24 },
  { id: 'icon-terminal', appId: 'terminal', label: 'Terminal', x: 24, y: 120 },
  { id: 'icon-projects', appId: 'projects', label: 'Projects', x: 24, y: 216 },
  { id: 'icon-skills', appId: 'skills', label: 'Skills', x: 24, y: 312 },
  { id: 'icon-experience', appId: 'experience', label: 'Experience', x: 24, y: 408 },
  { id: 'icon-education', appId: 'education', label: 'Education', x: 120, y: 24 },
  { id: 'icon-resume', appId: 'resume', label: 'Resume', x: 120, y: 120 },
  { id: 'icon-contact', appId: 'contact', label: 'Contact', x: 120, y: 216 },
  { id: 'icon-explorer', appId: 'explorer', label: 'Files', x: 120, y: 312 },
  { id: 'icon-settings', appId: 'settings', label: 'Settings', x: 120, y: 408 },
];

export const LAUNCHER_APPS = Object.values(APPS).filter(
  (app, index, self) => self.findIndex((a) => a.id === app.id) === index
);

export function getAppConfig(appId) {
  return APPS[appId] || APPS.terminal;
}
