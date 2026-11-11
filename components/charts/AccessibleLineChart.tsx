'use client';

import { CodingHourMetric } from '@/types/dashboard';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useTheme } from '@/context/ThemeContext';

interface AccessibleLineChartProps {
  data: CodingHourMetric[];
}

export default function AccessibleLineChart({ data }: AccessibleLineChartProps) {
  const { theme } = useTheme();
  
  const lineColor = theme === 'high-contrast' ? '#ffffff' : '#10b981';
  const gridColor = theme === 'dark' ? '#334155' : theme === 'high-contrast' ? '#ffffff' : '#e2e8f0';
  const textColor = theme === 'dark' ? '#f8fafc' : theme === 'high-contrast' ? '#ffffff' : '#0f172a';

  return (
    <section className="bg-[var(--bg-primary)] p-6 rounded-lg border border-[var(--border-color)] shadow-sm mt-6">
      <h2 className="text-lg font-semibold mb-4">Coding Hours</h2>
      
      <div className="w-full h-72" aria-hidden="true">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
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
            <Line type="monotone" dataKey="hours" stroke={lineColor} strokeWidth={3} dot={false} activeDot={{ r: 6 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="sr-only">
        <table aria-label="Coding hours data table">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Hours</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.date}>
                <td>{item.date}</td>
                <td>{item.hours} hours</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}