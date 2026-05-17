import React from 'react';
import { motion } from 'framer-motion';
import { getRiskColor, cn } from '../../lib/utils';
import { RiskLevel } from '../../types';

interface RiskGaugeProps {
  score: number;
  label: string;
}

export function RiskGauge({ score, label }: RiskGaugeProps) {
  const radius = 80;
  const strokeWidth = 12;
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = normalizedRadius * Math.PI;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  const level: RiskLevel = 
    score < 25 ? 'low' : 
    score < 50 ? 'moderate' : 
    score < 75 ? 'high' : 'critical';

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-48 h-24 overflow-hidden">
        <svg height="96" width="192" className="transform rotate-0">
          <path
            d="M 16 96 A 80 80 0 0 1 176 96"
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <motion.path
            d="M 16 96 A 80 80 0 0 1 176 96"
            fill="none"
            stroke={getRiskColor(level)}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center">
          <span className="text-3xl font-bold">{score.toFixed(1)}</span>
          <span className={cn("text-xs font-semibold uppercase tracking-wider", 
            level === 'low' ? 'text-risk-low' : 
            level === 'moderate' ? 'text-risk-moderate' : 
            level === 'high' ? 'text-risk-high' : 'text-risk-critical'
          )}>
            {level} Risk
          </span>
        </div>
      </div>
      <p className="text-sm text-muted-foreground mt-2">{label}</p>
    </div>
  );
}


