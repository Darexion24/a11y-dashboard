'use client';

import { CommitMetric } from '@/types/dashboard';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useTheme } from '@/context/ThemeContext';

interface AccessibleBarChartProps {
  data: CommitMetric[];
}

export default function AccessibleBarChart({ data }: AccessibleBarChartProps) {
  const { theme } = useTheme();
  
  // Adjust chart colors based on the theme
  const barColor = theme === 'high-contrast' ? '#ffffff' : '#3b82f6';
  const gridColor = theme === 'dark' ? '#334155' : theme === 'high-contrast' ? '#ffffff' : '#e2e8f0';
  const textColor = theme === 'dark' ? '#f8fafc' : theme === 'high-contrast' ? '#ffffff' : '#0f172a';

  return (
    <section className="bg-[var(--bg-primary)] p-6 rounded-lg border border-[var(--border-color)] shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Daily Commits</h2>
      
      {/* Visual Chart - Hidden from Screen Readers */}
      <div className="w-full h-72" aria-hidden="true">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={gridColor} vertical={false} />
            <XAxis 
              dataKey="date" 
              stroke={textColor} 
              tick={{ fill: textColor }} 
              fontSize={12} 
              tickLine={false} 
            />
            <YAxis 
              stroke={textColor} 
              tick={{ fill: textColor }} 
              fontSize={12} 
              tickLine={false} 
              axisLine={false} 
            />
            <Tooltip 
              contentStyle={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-color)' }}
              itemStyle={{ color: 'var(--text-primary)' }}
              labelStyle={{ color: 'var(--text-primary)', fontWeight: 'bold' }}
            />
            <Bar dataKey="commits" fill={barColor} radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Screen Reader Only Data Table */}
      <div className="sr-only">
        <table aria-label="Daily commits data table">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Commits</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.date}>
                <td>{item.date}</td>
                <td>{item.commits} commits</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}