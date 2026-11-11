import { DashboardData } from '@/types/dashboard';

function generateMockData(): DashboardData {
  const commits = [];
  const codingHours = [];
  const today = new Date();

  for (let i = 365; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    const dateString = date.toISOString().split('T')[0];

    // Generate random but realistic looking data
    const isWeekend = date.getDay() === 0 || date.getDay() === 6;
    const baseCommits = isWeekend ? 0 : Math.floor(Math.random() * 5);
    const baseHours = isWeekend ? Math.random() * 2 : 4 + Math.random() * 6;

    commits.push({
      date: dateString,
      commits: baseCommits + (Math.random() > 0.8 ? 5 : 0), // Occasional spikes
    });

    codingHours.push({
      date: dateString,
      hours: Number(baseHours.toFixed(1)),
    });
  }

  return { commits, codingHours };
}

export const mockDashboardData = generateMockData();