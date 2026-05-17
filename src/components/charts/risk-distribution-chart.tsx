import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';
import { District } from '../../types';
import { getRiskColor } from '../../lib/utils';

interface RiskDistributionChartProps {
  data: District[];
}

export function RiskDistributionChart({ data }: RiskDistributionChartProps) {
  const sortedData = [...data].sort((a, b) => b.riskScore - a.riskScore);

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={sortedData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#94a3b8', fontSize: 10 }}
          />
          <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 10 }} />
          <Tooltip 
            cursor={{ fill: 'rgba(255,255,255,0.02)' }}
            contentStyle={{ backgroundColor: '#0F1D32', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
            itemStyle={{ fontSize: '12px' }}
          />
          <Bar dataKey="riskScore" radius={[4, 4, 0, 0]} barSize={24}>
            {sortedData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getRiskColor(entry.riskLevel)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
