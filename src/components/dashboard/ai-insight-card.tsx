import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, TrendingUp, Lightbulb, Zap, Clock } from 'lucide-react';
import { AIInsight } from '../../types';
import { cn, getRiskColor } from '../../lib/utils';

interface AIInsightCardProps {
  insight: AIInsight;
}

export function AIInsightCard({ insight }: AIInsightCardProps) {
  const icons = {
    alert: AlertTriangle,
    prediction: TrendingUp,
    recommendation: Lightbulb,
    anomaly: Zap
  };

  const Icon = icons[insight.type];

  return (
    <motion.div 
      whileHover={{ y: -2, borderColor: 'rgba(255,255,255,0.12)' }}
      className="glass-card p-4 flex flex-col gap-3 group transition-all"
    >
      <div className="flex justify-between items-start">
        <div className={cn("p-2 rounded-lg transition-transform group-hover:scale-110", 
          insight.type === 'alert' ? 'bg-risk-critical/20 text-risk-critical' :
          insight.type === 'prediction' ? 'bg-risk-high/20 text-risk-high' :
          insight.type === 'recommendation' ? 'bg-accent/20 text-accent' : 'bg-risk-moderate/20 text-risk-moderate'
        )}>
          <Icon size={20} />
        </div>
        <div className="flex flex-col items-end">
          <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest flex items-center gap-1">
            <Clock size={10} /> 12h ago
          </span>
          <div className="mt-1 h-1 w-20 bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${insight.confidence * 100}%` }}
              className="h-full bg-accent"
            />
          </div>
          <span className="text-[9px] text-accent font-bold mt-0.5">{(insight.confidence * 100).toFixed(0)}% Confidence</span>
        </div>
      </div>

      <div>
        <h4 className="font-semibold text-sm mb-1">{insight.title}</h4>
        <p className="text-xs text-muted-foreground line-clamp-2">{insight.description}</p>
      </div>

      <div className="flex gap-1 flex-wrap mt-auto pt-2 border-t border-white/5">
        {insight.affectedDistricts.map(d => (
          <span key={d} className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-muted-foreground">
            {d}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
