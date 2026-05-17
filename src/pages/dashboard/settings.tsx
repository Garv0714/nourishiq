import React from 'react';
import { Bell, Shield, Database, Layout, ArrowRight, User } from 'lucide-react';

export default function SettingsPage() {
  const categories = [
    { icon: Bell, title: 'Notifications', desc: 'Alert thresholds, email frequencies, and priority levels.' },
    { icon: Shield, title: 'Security & Access', desc: 'User permissions, role-based access control, and audit logs.' },
    { icon: Database, title: 'Data Sources', desc: 'API integrations, marketplace price feeds, and attendance sync.' },
    { icon: Layout, title: 'Display & UI', desc: 'Theme customization, localization, and dashboard layout settings.' },
    { icon: User, title: 'User Profile', desc: 'Manage your account details and organizational affiliation.' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-black tracking-tight">System Configuration</h1>
        <p className="text-sm text-muted-foreground">Manage platform preferences and data integrations</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {categories.map((cat, i) => {
          const Icon = cat.icon;
          return (
            <div key={cat.title} className="glass-card p-6 rounded-2xl flex items-start gap-5 group cursor-pointer hover:border-primary/30 transition-all">
              <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                <Icon size={24} />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-bold">{cat.title}</h3>
                  <ArrowRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{cat.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="p-8 rounded-2xl border-2 border-dashed border-white/5 flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
          <Database size={32} className="text-muted-foreground" />
        </div>
        <h3 className="text-lg font-bold mb-2">Advanced API Configuration</h3>
        <p className="text-sm text-muted-foreground max-w-md mx-auto mb-6">
          Connect external data silos like national market price feeds or district education management systems.
        </p>
        <button className="px-6 py-2 rounded-full border border-white/10 text-sm font-bold hover:bg-white/5 transition-all">
          Manage Integrations
        </button>
      </div>
    </div>
  );
}
