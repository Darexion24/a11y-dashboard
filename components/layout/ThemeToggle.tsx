'use client';

import { useTheme } from '@/context/ThemeContext';
import { Sun, Moon, Contrast } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div 
      role="group" 
      aria-label="Theme selection" 
      className="flex items-center gap-2"
    >
      <button
        onClick={() => setTheme('light')}
        aria-pressed={theme === 'light'}
        aria-label="Light theme"
        className={`p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 ${theme === 'light' ? 'bg-gray-200 dark:bg-gray-700' : ''}`}
      >
        <Sun className="w-5 h-5" aria-hidden="true" />
      </button>
      <button
        onClick={() => setTheme('dark')}
        aria-pressed={theme === 'dark'}
        aria-label="Dark theme"
        className={`p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 ${theme === 'dark' ? 'bg-gray-200 dark:bg-gray-700' : ''}`}
      >
        <Moon className="w-5 h-5" aria-hidden="true" />
      </button>
      <button
        onClick={() => setTheme('high-contrast')}
        aria-pressed={theme === 'high-contrast'}
        aria-label="High contrast theme"
        className={`p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white ${theme === 'high-contrast' ? 'bg-gray-800 text-white border border-white' : ''}`}
      >
        <Contrast className="w-5 h-5" aria-hidden="true" />
      </button>
    </div>
  );
}