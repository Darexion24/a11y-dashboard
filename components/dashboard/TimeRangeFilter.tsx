'use client';

import { TimeRange } from '@/types/dashboard';

interface TimeRangeFilterProps {
  activeRange: TimeRange;
  onChange: (range: TimeRange) => void;
}

export default function TimeRangeFilter({ activeRange, onChange }: TimeRangeFilterProps) {
  const ranges: { value: TimeRange; label: string }[] = [
    { value: '7d', label: 'Last 7 Days' },
    { value: '30d', label: 'Last 30 Days' },
    { value: '1y', label: 'This Year' },
  ];

  return (
    <div 
      role="group" 
      aria-label="Filter data by time range" 
      className="flex gap-2 mb-6"
    >
      {ranges.map((range) => (
        <button
          key={range.value}
          onClick={() => onChange(range.value)}
          aria-pressed={activeRange === range.value}
          className={`
            px-4 py-2 rounded-md font-medium text-sm transition-colors
            focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 dark:focus:ring-offset-gray-900
            ${activeRange === range.value 
              ? 'bg-blue-600 text-white high-contrast:bg-white high-contrast:text-black high-contrast:border-white border border-transparent' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 border border-transparent high-contrast:border-white high-contrast:bg-black high-contrast:text-white'
            }
          `}
        >
          {range.label}
        </button>
      ))}
    </div>
  );
}