import React from 'react';
import { ShieldAlert, Plus, Calendar, Users, Target, Activity } from 'lucide-react';
import { interventions } from '../../data/synthetic/analytics';
import { StatusBadge } from '../../components/shared/status-badge';
import { cn } from '../../lib/utils';

export default function InterventionsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-black tracking-tight">Intervention Tracking</h1>
          <p className="text-sm text-muted-foreground">Manage and monitor nutritional support programs</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white text-sm font-bold hover:bg-primary-dark transition-all shadow-lg shadow-primary/20">
          <Plus size={18} /> New Intervention
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Active Programs', value: '3', icon: Activity, color: 'text-risk-low' },
          { label: 'Planned Support', value: '1', icon: Calendar, color: 'text-accent' },
          { label: 'Beneficiaries', value: '31.5K', icon: Users, color: 'text-primary' },
          { label: 'Avg Impact Score', value: '7.8', icon: Target, color: 'text-secondary' },
        ].map((stat) => {
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

      <div className="space-y-4">
        <h2 className="text-lg font-bold">Timeline & Status</h2>
        <div className="space-y-4">
          {interventions.map((int, i) => (
            <div key={int.id} className="glass-card rounded-2xl p-6 flex flex-col md:flex-row gap-6 relative overflow-hidden group">
              <div className={cn(
                "absolute top-0 left-0 w-1 h-full",
                int.status === 'active' ? "bg-risk-low" : int.status === 'planned' ? "bg-accent" : "bg-muted"
              )} />
              
              <div className="md:w-48 shrink-0">
                <div className="flex items-center gap-2 text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2">
                  <Calendar size={12} /> {int.startDate}
                </div>
                <div className="flex flex-col gap-2">
                  <span className={cn(
                    "px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest border w-fit",
                    int.status === 'active' ? "bg-risk-low/10 text-risk-low border-risk-low/20" : "bg-accent/10 text-accent border-accent/20"
                  )}>
                    {int.status}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/5 text-muted-foreground w-fit uppercase font-bold tracking-widest">
                    {int.type.replace('_', ' ')}
                  </span>
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{int.title}</h3>
                <p className="text-xs text-muted-foreground mb-4 leading-relaxed">{int.description}</p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex flex-col">
                    <span className="text-[9px] text-muted-foreground uppercase font-bold tracking-widest">Target District</span>
                    <span className="text-xs font-bold">{int.districtName}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] text-muted-foreground uppercase font-bold tracking-widest">Beneficiaries</span>
                    <span className="text-xs font-bold">{(int.beneficiariesCount / 1000).toFixed(1)}K children</span>
                  </div>
                  {int.status !== 'planned' && (
                    <div className="flex flex-col">
                      <span className="text-[9px] text-muted-foreground uppercase font-bold tracking-widest">Impact Score</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold">{int.impactScore}/10</span>
                        <div className="w-16 h-1 bg-white/5 rounded-full overflow-hidden">
                          <div className="h-full bg-secondary" style={{ width: `${int.impactScore * 10}%` }} />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="md:w-32 flex flex-col justify-center items-end gap-2">
                <button className="w-full px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[10px] font-bold hover:bg-white/10 transition-all uppercase tracking-widest">
                  View Data
                </button>
                <button className="w-full px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[10px] font-bold hover:bg-white/10 transition-all uppercase tracking-widest">
                  Edit Program
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
