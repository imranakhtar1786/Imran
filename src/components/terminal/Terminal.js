'use client';

import { useRef, useEffect, useState } from 'react';
import { useOs } from '@/context/OsContext';
import { profile } from '@/data/profile';
import { executeCommand } from '@/lib/terminal';
import TerminalOutput from '@/components/terminal/TerminalOutput';
import MatrixRain from '@/components/terminal/MatrixRain';

export default function Terminal({ windowId }) {
  const { state, dispatch, openApp, setTheme } = useOs();
  const session = state.terminalSessions[windowId];
  const [input, setInput] = useState('');
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [session?.lines]);

  useEffect(() => {
    inputRef.current?.focus();
  }, [windowId]);

  if (!session) return null;

  function submitCommand(cmd) {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    dispatch({
      type: 'TERMINAL_APPEND',
      windowId,
      lines: [
        { type: 'command', text: `${profile.username}@imranos:${session.cwd.replace(/^\/home\/imran/, '~')}$ ${trimmed}` },
      ],
    });
    dispatch({ type: 'TERMINAL_ADD_HISTORY', windowId, command: trimmed });

    const result = executeCommand(trimmed, {
      cwd: session.cwd,
      history: session.history,
      historyIndex: session.historyIndex,
      pythonMode: session.pythonMode,
      matrixActive: session.matrixActive,
    }, {
      openApp,
      setTheme,
    });

    if (result.clear) {
      dispatch({ type: 'TERMINAL_CLEAR', windowId });
    } else if (result.lines?.length) {
      dispatch({ type: 'TERMINAL_APPEND', windowId, lines: result.lines });
    }

    if (result.state?.cwd && result.state.cwd !== session.cwd) {
      dispatch({ type: 'TERMINAL_SET_CWD', windowId, cwd: result.state.cwd });
    }

    if (result.state?.pythonMode !== undefined && result.state.pythonMode !== session.pythonMode) {
      dispatch({ type: 'TERMINAL_SET_PYTHON_MODE', windowId, active: result.state.pythonMode });
    }

    if (result.toggleMatrix !== undefined) {
      if (result.toggleMatrix !== session.matrixActive) {
        dispatch({ type: 'TERMINAL_TOGGLE_MATRIX', windowId });
      }
    }

    setInput('');
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      submitCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const history = session.history;
      if (!history.length) return;
      const newIndex = session.historyIndex < 0 ? history.length - 1 : Math.max(0, session.historyIndex - 1);
      dispatch({ type: 'TERMINAL_SET_HISTORY_INDEX', windowId, index: newIndex });
      setInput(history[newIndex]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const history = session.history;
      if (session.historyIndex < 0) return;
      const newIndex = session.historyIndex + 1;
      if (newIndex >= history.length) {
        dispatch({ type: 'TERMINAL_SET_HISTORY_INDEX', windowId, index: -1 });
        setInput('');
      } else {
        dispatch({ type: 'TERMINAL_SET_HISTORY_INDEX', windowId, index: newIndex });
        setInput(history[newIndex]);
      }
    } else if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault();
      dispatch({ type: 'TERMINAL_CLEAR', windowId });
    }
  }

  const promptPath = session.cwd.replace(/^\/home\/imran/, '~');

  return (
    <div className="os-terminal h-full flex flex-col relative" onClick={() => inputRef.current?.focus()}>
      {session.matrixActive && <MatrixRain />}
      <div className="flex-1 overflow-y-auto p-3 relative z-10">
        <TerminalOutput lines={session.lines} />
        <div ref={bottomRef} />
      </div>
      <div className="flex items-center px-3 py-2 border-t border-[var(--os-glass-border)] relative z-10">
        <span className="os-prompt shrink-0 text-xs">
          {profile.username}@imranos:{promptPath}$
        </span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent border-0 outline-none text-[var(--os-terminal-text)] font-mono text-xs ml-1 caret-[var(--os-accent)]"
          spellCheck={false}
          autoComplete="off"
          aria-label="Terminal input"
        />
      </div>
    </div>
  );
}
