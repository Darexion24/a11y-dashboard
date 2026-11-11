export type TimeRange = '7d' | '30d' | '1y';

export interface CommitMetric {
  date: string;
  commits: number;
}

export interface CodingHourMetric {
  date: string;
  hours: number;
}

export interface DashboardData {
  commits: CommitMetric[];
  codingHours: CodingHourMetric[];
}

export interface ChartBaseProps {
  isLoading: boolean;
  timeRange: TimeRange;
}