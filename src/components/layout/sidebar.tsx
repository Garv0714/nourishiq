import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Map as MapIcon, 
  School, 
  MapPin, 
  BarChart3, 
  FileText, 
  ShieldAlert, 
  Settings, 
  ChevronLeft, 
  ChevronRight,
  BrainCircuit
} from 'lucide-react';
import { cn } from '../../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
  { icon: MapIcon, label: 'Hunger Map', path: '/dashboard/analytics/hunger-map' },
  { icon: School, label: 'Schools', path: '/dashboard/schools' },
  { icon: MapPin, label: 'Districts', path: '/dashboard/districts' },
  { icon: BarChart3, label: 'Trends', path: '/dashboard/analytics/trends' },
  { icon: FileText, label: 'AI Reports', path: '/dashboard/reports' },
  { icon: ShieldAlert, label: 'Interventions', path: '/dashboard/interventions' },
  { icon: Settings, label: 'Settings', path: '/dashboard/settings' },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className={cn(
      "bg-nourish-card border-r border-white/5 flex flex-col transition-all duration-300 relative z-40",
      collapsed ? "w-16" : "w-64"
    )}>
      <div className="p-4 flex items-center gap-3 border-b border-white/5 h-16">
        <div className="bg-primary/20 p-2 rounded-lg text-primary">
          <BrainCircuit size={24} />
        </div>
        {!collapsed && (
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-bold text-xl tracking-tight gradient-text-teal"
          >
            NourishIQ
          </motion.span>
        )}
      </div>

      <nav className="flex-1 py-4 overflow-y-auto px-2 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/dashboard'}
              className={({ isActive }) => cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all group relative",
                isActive 
                  ? "bg-primary/10 text-primary border-l-2 border-primary rounded-l-none" 
                  : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
              )}
            >
              <Icon size={20} className={cn("shrink-0", collapsed && "mx-auto")} />
              {!collapsed && <span className="text-sm font-medium">{item.label}</span>}
              {collapsed && (
                <div className="absolute left-full ml-2 px-2 py-1 bg-nourish-navy border border-white/10 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
                  {item.label}
                </div>
              )}
            </NavLink>
          );
        })}
      </nav>

      <div className="p-4 border-t border-white/5">
        {!collapsed ? (
          <div className="glass-card p-3 rounded-xl bg-accent/5 border-accent/20">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-[10px] font-bold text-accent uppercase tracking-widest">AI Engine Active</span>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-[10px]">
                <span className="text-muted-foreground">Predictions</span>
                <span className="font-bold text-foreground">342</span>
              </div>
              <div className="flex justify-between text-[10px]">
                <span className="text-muted-foreground">Accuracy</span>
                <span className="font-bold text-foreground">89%</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-center">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          </div>
        )}
      </div>

      <button 
        onClick={() => setCollapsed(!collapsed)}
        className="absolute top-20 -right-3 bg-nourish-card border border-white/10 rounded-full p-1 text-muted-foreground hover:text-foreground hover:bg-nourish-hover transition-colors z-50"
      >
        {collapsed ? <ChevronRight size={12} /> : <ChevronLeft size={12} />}
      </button>
    </aside>
  );
}
