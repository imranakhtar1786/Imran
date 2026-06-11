import {
  Terminal,
  FolderOpen,
  User,
  Code2,
  Briefcase,
  GraduationCap,
  FileText,
  Mail,
  Settings,
  LayoutGrid,
  FolderKanban,
} from 'lucide-react';

export const APP_TYPES = {
  terminal: 'terminal',
  explorer: 'explorer',
  about: 'about',
  skills: 'skills',
  projects: 'projects',
  experience: 'experience',
  education: 'education',
  resume: 'resume',
  contact: 'contact',
  settings: 'settings',
};

export const appRegistry = {
  terminal: {
    id: 'terminal',
    title: 'Terminal',
    icon: Terminal,
    defaultSize: { width: 720, height: 440 },
    defaultPosition: { x: 80, y: 60 },
    desktop: true,
    launcher: true,
  },
  explorer: {
    id: 'explorer',
    title: 'Files',
    icon: FolderOpen,
    defaultSize: { width: 780, height: 500 },
    defaultPosition: { x: 120, y: 80 },
    desktop: true,
    launcher: true,
  },
  about: {
    id: 'about',
    title: 'About Me',
    icon: User,
    defaultSize: { width: 520, height: 580 },
    defaultPosition: { x: 160, y: 50 },
    desktop: true,
    launcher: true,
  },
  skills: {
    id: 'skills',
    title: 'Skills',
    icon: Code2,
    defaultSize: { width: 600, height: 520 },
    defaultPosition: { x: 200, y: 70 },
    desktop: true,
    launcher: true,
  },
  projects: {
    id: 'projects',
    title: 'Projects',
    icon: FolderKanban,
    defaultSize: { width: 700, height: 540 },
    defaultPosition: { x: 140, y: 60 },
    desktop: true,
    launcher: true,
  },
  experience: {
    id: 'experience',
    title: 'Experience',
    icon: Briefcase,
    defaultSize: { width: 580, height: 520 },
    defaultPosition: { x: 180, y: 70 },
    desktop: true,
    launcher: true,
  },
  education: {
    id: 'education',
    title: 'Education',
    icon: GraduationCap,
    defaultSize: { width: 560, height: 480 },
    defaultPosition: { x: 220, y: 80 },
    desktop: true,
    launcher: true,
  },
  resume: {
    id: 'resume',
    title: 'Resume',
    icon: FileText,
    defaultSize: { width: 500, height: 600 },
    defaultPosition: { x: 240, y: 50 },
    desktop: true,
    launcher: true,
  },
  contact: {
    id: 'contact',
    title: 'Contact',
    icon: Mail,
    defaultSize: { width: 480, height: 520 },
    defaultPosition: { x: 260, y: 70 },
    desktop: true,
    launcher: true,
  },
  settings: {
    id: 'settings',
    title: 'Settings',
    icon: Settings,
    defaultSize: { width: 520, height: 480 },
    defaultPosition: { x: 300, y: 90 },
    desktop: false,
    launcher: true,
  },
};

export const desktopApps = Object.values(appRegistry).filter((a) => a.desktop);

export const launcherApps = Object.values(appRegistry).filter((a) => a.launcher);

export const launcherIcon = LayoutGrid;

let windowCounter = 0;
export function generateWindowId() {
  windowCounter += 1;
  return `win-${windowCounter}`;
}
