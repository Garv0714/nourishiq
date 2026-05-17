import React from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from 'recharts';
import { FoodPriceData } from '../../types';

interface FoodInflationChartProps {
  data: FoodPriceData[];
}

export function FoodInflationChart({ data }: FoodInflationChartProps) {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
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
          <Line type="monotone" dataKey="rice" stroke="#F59E0B" strokeWidth={2} dot={false} name="Rice" />
          <Line type="monotone" dataKey="wheat" stroke="#F97316" strokeWidth={2} dot={false} name="Wheat" />
          <Line type="monotone" dataKey="dal" stroke="#EF4444" strokeWidth={2} dot={false} name="Dal" />
          <Line type="monotone" dataKey="vegetables" stroke="#14B8A6" strokeWidth={2} dot={false} name="Vegetables" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
