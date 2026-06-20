'use client';

import { useState } from 'react';
import { Folder, File, ArrowLeft, ArrowRight } from 'lucide-react';
import { useOs } from '@/context/OsContext';
import { getDirectoryContents } from '@/lib/filesystem';
import Sidebar from '@/components/explorer/Sidebar';
import Breadcrumbs from '@/components/explorer/Breadcrumbs';

export default function FileExplorer() {
  const { state, dispatch, openApp } = useOs();
  const [path, setPath] = useState(state.explorerPath || '/home/imran');
  const [history, setHistory] = useState([path]);
  const [historyIndex, setHistoryIndex] = useState(0);

  const entries = getDirectoryContents(path);

  function navigate(newPath) {
    setPath(newPath);
    dispatch({ type: 'SET_EXPLORER_PATH', path: newPath });
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(newPath);
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  }

  function goBack() {
    if (historyIndex > 0) {
      const newIndex = historyIndex - 1;
      setHistoryIndex(newIndex);
      setPath(history[newIndex]);
      dispatch({ type: 'SET_EXPLORER_PATH', path: history[newIndex] });
    }
  }

  function goForward() {
    if (historyIndex < history.length - 1) {
      const newIndex = historyIndex + 1;
      setHistoryIndex(newIndex);
      setPath(history[newIndex]);
      dispatch({ type: 'SET_EXPLORER_PATH', path: history[newIndex] });
    }
  }

  function handleOpen(entry) {
    if (entry.type === 'dir') {
      navigate(entry.path);
    } else if (entry.app) {
      openApp(entry.app, { projectId: entry.projectId });
    }
  }

  return (
    <div className="h-full flex flex-col text-sm">
      <div className="flex items-center gap-1 px-2 py-1 border-b border-[var(--os-glass-border)]">
        <button type="button" onClick={goBack} disabled={historyIndex === 0} className="p-1.5 rounded hover:bg-glass border-0 bg-transparent cursor-pointer disabled:opacity-30 text-muted">
          <ArrowLeft size={14} />
        </button>
        <button type="button" onClick={goForward} disabled={historyIndex >= history.length - 1} className="p-1.5 rounded hover:bg-glass border-0 bg-transparent cursor-pointer disabled:opacity-30 text-muted">
          <ArrowRight size={14} />
        </button>
      </div>
      <Breadcrumbs path={path} onNavigate={navigate} />
      <div className="flex flex-1 min-h-0">
        <Sidebar currentPath={path} onNavigate={navigate} />
        <div className="flex-1 overflow-y-auto p-3">
          {entries.length === 0 ? (
            <div className="text-muted text-xs text-center py-8">This folder is empty</div>
          ) : (
            <div className="grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-2">
              {entries.map((entry) => (
                <button
                  key={entry.path}
                  type="button"
                  onDoubleClick={() => handleOpen(entry)}
                  onClick={() => entry.type === 'dir' && navigate(entry.path)}
                  className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-glass border-0 bg-transparent cursor-pointer transition-colors"
                >
                  {entry.type === 'dir' ? (
                    <Folder size={32} className="text-accent" />
                  ) : (
                    <File size={32} className="text-muted" />
                  )}
                  <span className="text-xs text-center text-muted break-all line-clamp-2">{entry.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
