'use client';

import { useState, useEffect } from 'react';
import { DashboardData, TimeRange } from '@/types/dashboard';
import { mockDashboardData } from '@/lib/mockData';

export function useDashboardData(timeRange: TimeRange) {
  const [data, setData] = useState<DashboardData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setIsLoading(true);
    
    // Simulate network latency
    const timer = setTimeout(() => {
      try {
        const daysToFilter = timeRange === '7d' ? 7 : timeRange === '30d' ? 30 : 365;
        
        // Filter the data based on the selected time range
        const filteredData: DashboardData = {
          commits: mockDashboardData.commits.slice(-daysToFilter),
          codingHours: mockDashboardData.codingHours.slice(-daysToFilter),
        };

        setData(filteredData);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch data'));
      } finally {
        setIsLoading(false);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeRange]);

  return { data, isLoading, error };
}