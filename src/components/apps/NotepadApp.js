'use client';

import { useOs } from '@/context/OsContext';

export default function NotepadApp({ windowId }) {
  const { state } = useOs();
  const win = state.windows.find((w) => w.id === windowId);
  // data is stored directly on the window object due to the way createWindow handles overrides
  const content = win?.content || 'Empty file.';

  return (
    <div className="h-full overflow-y-auto p-4 bg-white text-black font-mono text-sm whitespace-pre-wrap">
      {content}
    </div>
  );
}
