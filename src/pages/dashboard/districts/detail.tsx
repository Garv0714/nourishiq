import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, TrendingUp, Users, School, Utensils, Calendar, ShieldAlert } from 'lucide-react';
import { districts } from '../../../data/synthetic/districts';
import { schools } from '../../../data/synthetic/schools';
import { monthlyTrends } from '../../../data/synthetic/analytics';
import { HungerTrendChart } from '../../../components/charts/hunger-trend-chart';
import { StatusBadge } from '../../../components/shared/status-badge';
import { cn, getRiskColor, formatNumber } from '../../../lib/utils';

export default function DistrictDetailPage() {
  const { id } = useParams();
  const district = districts.find(d => d.id === id);
  const districtSchools = schools.filter(s => s.districtId === id);

  if (!district) return <div>District not found</div>;

  const riskFactors = [
    { label: 'Attendance Decline', weight: 30, value: district.riskScore * 0.8 },
    { label: 'Meal Participation Drop', weight: 25, value: district.riskScore * 0.9 },
    { label: 'Food Price Inflation', weight: 20, value: district.riskScore * 1.1 },
    { label: 'Seasonal Risk', weight: 15, value: district.riskScore * 0.7 },
    { label: 'Historical Pattern', weight: 10, value: district.riskScore * 0.6 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link to="/dashboard/districts" className="p-2 rounded-lg bg-white/5 border border-white/10 text-muted-foreground hover:text-foreground transition-all">
          <ChevronLeft size={20} />
        </Link>
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-black tracking-tight">{district.name}</h1>
            <StatusBadge level={district.riskLevel} trend={district.riskTrend} />
          </div>
          <p className="text-sm text-muted-foreground">{district.state} • Regional Intelligence Node</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {[
          { label: 'Risk Score', value: district.riskScore, icon: ShieldAlert, color: 'text-risk-critical' },
          { label: 'Schools', value: district.totalSchools, icon: School, color: 'text-primary' },
          { label: 'Students', value: formatNumber(district.totalStudents), icon: Users, color: 'text-secondary' },
          { label: 'Attendance', value: `${district.avgAttendance}%`, icon: Calendar, color: 'text-accent' },
          { label: 'Meal Rate', value: `${district.mealParticipation}%`, icon: Utensils, color: 'text-warning' },
        ].map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="glass-card p-4 rounded-xl">
              <div className={cn("p-2 rounded-lg bg-white/5 w-fit mb-3", stat.color)}>
                <Icon size={20} />
              </div>
              <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest mb-1">{stat.label}</p>
              <h3 className="text-xl font-bold">{stat.value}</h3>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-card rounded-2xl p-6">
          <h3 className="font-bold mb-6">AI Risk Factor Breakdown</h3>
          <div className="space-y-6">
            {riskFactors.map((factor, i) => (
              <div key={factor.label}>
                <div className="flex justify-between text-xs mb-2">
                  <span className="text-muted-foreground">{factor.label} <span className="text-[10px] opacity-60">({factor.weight}%)</span></span>
                  <span className="font-bold">{(factor.value / factor.weight * 10).toFixed(0)}% Impact</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.min(factor.value, 100)}%` }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className="h-full rounded-full bg-primary"
                    style={{ backgroundColor: getRiskColor(district.riskLevel) }}
                  />
                </div>
              </div>
            ))}
            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
              <div>
                <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest mb-1">Composite Score</p>
                <h4 className="text-2xl font-black">{district.riskScore}</h4>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest mb-1">Status</p>
                <span className={cn("text-sm font-bold capitalize", district.riskLevel === 'critical' ? 'text-risk-critical' : 'text-primary')}>
                  {district.riskLevel} Risk Level
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-0 overflow-hidden flex flex-col">
          <div className="p-6 border-b border-white/5">
            <h3 className="font-bold">Schools in District</h3>
          </div>
          <div className="flex-1 overflow-y-auto max-h-[400px]">
            {districtSchools.map((school) => (
              <div key={school.id} className="p-4 border-b border-white/5 flex items-center justify-between hover:bg-white/[0.02] transition-colors">
                <div>
                  <h4 className="text-sm font-bold">{school.name}</h4>
                  <p className="text-[10px] text-muted-foreground capitalize">{school.type} • {school.totalStudents} Students</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-xs font-bold">{school.riskScore}</p>
                    <p className={cn("text-[9px] font-bold", school.riskLevel === 'critical' ? 'text-risk-critical' : 'text-risk-low')}>
                      {school.riskLevel}
                    </p>
                  </div>
                  <ChevronLeft className="rotate-180 text-muted-foreground" size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="glass-card rounded-2xl p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="font-bold">District Hunger Trend</h3>
            <p className="text-xs text-muted-foreground">Historical attendance & nutrition monitoring</p>
          </div>
        </div>
        <HungerTrendChart data={monthlyTrends} />
      </div>
    </div>
  );
}
