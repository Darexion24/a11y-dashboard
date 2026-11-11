'use client';

import { useState } from 'react';
import { TimeRange } from '@/types/dashboard';
import { useDashboardData } from '@/hooks/useDashboardData';
import TimeRangeFilter from './TimeRangeFilter';
import ChartSkeleton from '../charts/ChartSkeleton';
import AccessibleBarChart from '../charts/AccessibleBarChart';
import AccessibleLineChart from '../charts/AccessibleLineChart';

export default function DashboardClient() {
  const [timeRange, setTimeRange] = useState<TimeRange>('7d');
  const { data, isLoading, error } = useDashboardData(timeRange);

  return (
    <div className="max-w-6xl mx-auto">
      <header className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Contribution Overview</h2>
        <p className="text-gray-600 dark:text-gray-400 high-contrast:text-white">
          Review your development metrics and coding activity over time.
        </p>
      </header>

      <TimeRangeFilter activeRange={timeRange} onChange={setTimeRange} />

      {error && (
        <div role="alert" className="p-4 bg-red-100 text-red-900 rounded-md mb-6">
          <p className="font-semibold">Error loading data</p>
          <p>{error.message}</p>
        </div>
      )}

      <div className="space-y-6">
        {isLoading || !data ? (
          <>
            <ChartSkeleton />
            <ChartSkeleton />
          </>
        ) : (
          <>
            <AccessibleBarChart data={data.commits} />
            <AccessibleLineChart data={data.codingHours} />
          </>
        )}
      </div>
    </div>
  );
}