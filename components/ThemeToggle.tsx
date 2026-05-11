'use client';

import { useTheme } from '@/lib/ThemeContext';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

export function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <MdLightMode className="text-xl text-yellow-400" />
      ) : (
        <MdDarkMode className="text-xl text-slate-700" />
      )}
    </button>
  );
}
