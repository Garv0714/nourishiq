import React from 'react';
import { Search, Bell, User, Zap } from 'lucide-react';
import { cn } from '../../lib/utils';

export function Header() {
  return (
    <header className="h-16 border-b border-white/5 bg-nourish-navy/80 backdrop-blur-md px-6 flex items-center justify-between sticky top-0 z-30">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative max-w-md w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
          <input 
            type="text" 
            placeholder="Search districts, schools, or reports..."
            className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-all"
          />
        </div>
        <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent">
          <Zap size={14} />
          <span className="text-[10px] font-bold uppercase tracking-wider">AI Analysis Active</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 text-muted-foreground hover:text-foreground transition-colors">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-risk-critical rounded-full border-2 border-nourish-navy" />
        </button>
        <div className="h-8 w-[1px] bg-white/5" />
        <div className="flex items-center gap-3 pl-2">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium">District Officer</p>
            <p className="text-[10px] text-muted-foreground">Admin Access</p>
          </div>
          <div className="h-9 w-9 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary">
            <User size={20} />
          </div>
        </div>
      </div>
    </header>
  );
}
