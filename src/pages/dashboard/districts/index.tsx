import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Users, School, ArrowRight, TrendingUp, TrendingDown, Minus, ShieldAlert, Utensils } from 'lucide-react';
import { districts } from '../../../data/synthetic/districts';
import { StatusBadge } from '../../../components/shared/status-badge';
import { cn, getRiskColor, formatNumber } from '../../../lib/utils';

export default function DistrictsPage() {
  const sortedDistricts = [...districts].sort((a, b) => b.riskScore - a.riskScore);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-black tracking-tight">Regional Oversight</h1>
          <p className="text-sm text-muted-foreground">District-level vulnerability analysis & social indicators</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Districts', value: '8', icon: MapPin },
          { label: 'Total Students', value: '1.8M', icon: Users },
          { label: 'Critical Zones', value: '2', icon: ShieldAlert },
          { label: 'Avg Meal Rate', value: '68%', icon: Utensils },
        ].map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="glass-card p-4 rounded-xl flex items-center gap-4">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Icon size={20} />
              </div>
              <div>
                <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">{stat.label}</p>
                <h3 className="text-xl font-bold">{stat.value}</h3>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sortedDistricts.map((district, i) => (
          <motion.div
            key={district.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card rounded-2xl overflow-hidden group hover:border-white/10 transition-all"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-bold mb-1">{district.name}</h3>
                  <p className="text-xs text-muted-foreground">{district.state}</p>
                </div>
                <StatusBadge level={district.riskLevel} trend={district.riskTrend} />
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-muted-foreground">District Risk Score</span>
                    <span className="font-bold">{district.riskScore}/100</span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${district.riskScore}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: getRiskColor(district.riskLevel) }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="flex items-center gap-2 text-muted-foreground mb-1">
                      <School size={12} />
                      <span className="text-[10px] uppercase font-bold tracking-widest">Schools</span>
                    </div>
                    <span className="text-sm font-bold">{district.totalSchools}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="flex items-center gap-2 text-muted-foreground mb-1">
                      <Users size={12} />
                      <span className="text-[10px] uppercase font-bold tracking-widest">Students</span>
                    </div>
                    <span className="text-sm font-bold">{formatNumber(district.totalStudents)}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div className="flex gap-4">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest mb-0.5">Attendance</span>
                      <span className="text-xs font-bold">{district.avgAttendance}%</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest mb-0.5">Meals</span>
                      <span className="text-xs font-bold">{district.mealParticipation}%</span>
                    </div>
                  </div>
                  <Link 
                    to={`/dashboard/districts/${district.id}`} 
                    className="flex items-center gap-1.5 text-xs font-bold text-primary hover:gap-2 transition-all"
                  >
                    Deep Dive <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
