import React from 'react';
import { cn } from '../../lib/utils';
import { RiskLevel, RiskTrend } from '../../types';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface StatusBadgeProps {
  level: RiskLevel;
  trend?: RiskTrend;
  className?: string;
}

export function StatusBadge({ level, trend, className }: StatusBadgeProps) {
  const levelColors = {
    low: 'bg-risk-low/20 text-risk-low border-risk-low/30',
    moderate: 'bg-risk-moderate/20 text-risk-moderate border-risk-moderate/30',
    high: 'bg-risk-high/20 text-risk-high border-risk-high/30',
    critical: 'bg-risk-critical/20 text-risk-critical border-risk-critical/30',
  };

  return (
    <div className={cn(
      "px-2 py-0.5 rounded-full text-xs font-semibold border flex items-center gap-1 w-fit",
      levelColors[level],
      className
    )}>
      <span className="capitalize">{level}</span>
      {trend && (
        <span className="opacity-80">
          {trend === 'worsening' && <TrendingUp size={12} className="text-risk-critical" />}
          {trend === 'improving' && <TrendingDown size={12} className="text-risk-low" />}
          {trend === 'stable' && <Minus size={12} />}
        </span>
      )}
    </div>
  );
}
