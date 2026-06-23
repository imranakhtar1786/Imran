export const themes = {
  ubuntu: {
    id: 'ubuntu',
    name: 'Ubuntu',
    description: 'Classic Ubuntu purple & orange',
    accent: '#e95420',
    preview: 'linear-gradient(135deg, #2c001e, #e95420)',
  },
  kali: {
    id: 'kali',
    name: 'Kali Linux',
    description: 'Cyber blue & purple',
    accent: '#00d4ff',
    preview: 'linear-gradient(135deg, #1a1a2e, #00d4ff)',
  },
  arch: {
    id: 'arch',
    name: 'Arch Linux',
    description: 'Minimal blue on dark',
    accent: '#1793d1',
    preview: 'linear-gradient(135deg, #0f1117, #1793d1)',
  },
  matrix: {
    id: 'matrix',
    name: 'Matrix',
    description: 'Green terminal aesthetic',
    accent: '#00ff41',
    preview: 'linear-gradient(135deg, #000800, #00ff41)',
  },
  win95: {
    id: 'win95',
    name: 'Windows 95',
    description: 'Retro teal & gray',
    accent: '#000080',
    preview: 'linear-gradient(135deg, #008080, #c0c0c0)',
  },
};

export const themeList = Object.values(themes);

export const DEFAULT_THEME = 'arch';

export function applyTheme(themeId) {
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('data-theme', themeId);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta && themes[themeId]) {
      meta.setAttribute('content', themes[themeId].accent);
    }
  }
}
