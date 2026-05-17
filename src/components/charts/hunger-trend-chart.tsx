import React from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from 'recharts';
import { AnalyticsTrend } from '../../types';

interface HungerTrendChartProps {
  data: AnalyticsTrend[];
}

export function HungerTrendChart({ data }: HungerTrendChartProps) {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="colorAttendance" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#14B8A6" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#14B8A6" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorMeal" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
          <XAxis 
            dataKey="month" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#94a3b8', fontSize: 10 }}
            tickFormatter={(val) => new Date(val).toLocaleString('default', { month: 'short' })}
          />
          <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 10 }} />
          <Tooltip 
            contentStyle={{ backgroundColor: '#0F1D32', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
            itemStyle={{ fontSize: '12px' }}
          />
          <Legend verticalAlign="top" align="right" iconType="circle" wrapperStyle={{ paddingBottom: '20px', fontSize: '10px' }} />
          <Area 
            type="monotone" 
            dataKey="attendanceRate" 
            name="Attendance" 
            stroke="#14B8A6" 
            fillOpacity={1} 
            fill="url(#colorAttendance)" 
            strokeWidth={2}
          />
          <Area 
            type="monotone" 
            dataKey="mealParticipation" 
            name="Meal Participation" 
            stroke="#10B981" 
            fillOpacity={1} 
            fill="url(#colorMeal)" 
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
