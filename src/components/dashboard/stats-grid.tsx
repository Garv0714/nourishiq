import React from 'react';
import { motion } from 'framer-motion';
import { School, Users, Utensils, BrainCircuit, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { AnimatedCounter } from '../shared/animated-counter';
import { cn } from '../../lib/utils';

const stats = [
  { 
    label: 'Schools Monitored', 
    value: 50, 
    suffix: '+', 
    icon: School, 
    trend: '+12%', 
    trendUp: true,
    color: 'text-primary'
  },
  { 
    label: 'Children at Risk', 
    value: 24180, 
    suffix: '', 
    icon: Users, 
    trend: '+5.4%', 
    trendUp: false,
    color: 'text-risk-critical'
  },
  { 
    label: 'Meals Served Today', 
    value: 12400, 
    suffix: '', 
    icon: Utensils, 
    trend: '+8.2%', 
    trendUp: true,
    color: 'text-secondary'
  },
  { 
    label: 'AI Predictions', 
    value: 342, 
    suffix: '', 
    icon: BrainCircuit, 
    trend: '89% Accuracy', 
    trendUp: true,
    color: 'text-accent'
  },
];

export function StatsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, i) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -2, borderColor: 'rgba(255,255,255,0.12)' }}
            className="glass-card p-5 rounded-2xl group transition-all"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={cn("p-2.5 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors", stat.color)}>
                <Icon size={24} />
              </div>
            <div className={cn(
              "flex items-center gap-0.5 text-xs font-bold",
              stat.trendUp ? "text-risk-low" : "text-risk-critical"
            )}>
              {stat.trend}
              {stat.trendUp ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
            </div>
          </div>
          <div>
            <p className="text-sm text-muted-foreground font-medium mb-1">{stat.label}</p>
            <h3 className="text-3xl font-bold tracking-tight">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </h3>
          </div>
        </motion.div>
      )})}
    </div>
  );
}
