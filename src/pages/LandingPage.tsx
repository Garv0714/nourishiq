import React from 'react';
import { Link } from 'react-router-dom';
import { BrainCircuit, ArrowRight, Shield, BarChart3, Map as MapIcon, Zap, Globe } from 'lucide-react';
import { AnimatedCounter } from '../components/shared/animated-counter';

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-nourish-navy overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-accent/20 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[40%] left-[60%] w-[25%] h-[25%] bg-secondary/15 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <nav className="relative z-10 h-20 px-6 max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BrainCircuit className="text-primary" size={28} />
          <span className="text-2xl font-black tracking-tighter gradient-text-teal">NourishIQ</span>
        </div>
        <div className="flex items-center gap-8">
          <Link to="/dashboard" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hidden sm:block">Platform Dashboard</Link>
          <Link to="/dashboard" className="px-5 py-2.5 rounded-full bg-primary text-white text-sm font-bold hover:bg-primary-dark transition-all shadow-lg shadow-primary/25">Get Started</Link>
        </div>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-32">
        <div className="text-center max-w-4xl mx-auto">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-primary mb-6"
          >
            <span className="flex h-1.5 w-1.5 rounded-full bg-primary animate-ping" />
            National Nutrition Intelligence Infrastructure
          </div>
          
          <h1
            className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-8"
          >
            Predict child hunger <br />
            <span className="gradient-text-warm">before it impacts lives.</span>
          </h1>

          <p
            className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            NourishIQ is an AI-powered nutrition intelligence platform for governments, NGOs, and food banks to identify and respond to child hunger before it affects education and development.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/dashboard" className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-xl shadow-primary/20 group">
              Launch Dashboard <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/dashboard/analytics/hunger-map" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 border border-white/10 text-foreground font-bold hover:bg-white/10 transition-all backdrop-blur-sm">
              View Hunger Map
            </Link>
          </div>
        </div>

        <div className="mt-32 relative group">
          <div
            className="glass-card rounded-[40px] p-2 border-white/10 shadow-2xl shadow-primary/10 group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-nourish-navy via-transparent to-transparent z-10 opacity-60 pointer-events-none" />
            <img 
              src="https://miaoda-conversation-file.s3cdn.medo.dev/user-bmy9kry8j4zk/app-booa5k99m1vl/20260516/NourishIQ.jpeg" 
              alt="NourishIQ Platform Overview" 
              className="w-full h-auto rounded-[38px] group-hover:scale-[1.01] transition-transform duration-1000"
            />
            {/* Desktop Overlay - Context */}
            <div className="absolute bottom-10 left-10 z-20 hidden md:block max-w-sm">
              <div className="glass-card p-6 rounded-3xl bg-nourish-navy/40 border-white/10 backdrop-blur-xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Real-time Analysis</span>
                </div>
                <h4 className="text-xl font-bold mb-2">District Risk Node</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">Cross-referencing market inflation with school attendance logs in Shravasti cluster.</p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-accent/20 blur-[100px] rounded-full pointer-events-none" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-32">
          {[
            { label: 'Children at Risk', value: 24180, suffix: '+' },
            { label: 'Schools Monitored', value: 50, suffix: '' },
            { label: 'AI Accuracy', value: 89, suffix: '%' },
            { label: 'Interventions', value: 17, suffix: '' },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="glass-card p-6 rounded-2xl text-center"
            >
              <h3 className="text-3xl font-black mb-1">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-40">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Intelligence Stack</h2>
            <p className="text-muted-foreground">Comprehensive toolset for regional nutrition oversight</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: BrainCircuit, title: 'AI Risk Prediction', desc: 'Predictive modeling using attendance, meal data, and food price trends.' },
              { icon: MapIcon, title: 'Hunger Heatmaps', desc: 'Geographic visualization of regional risk distribution and school clusters.' },
              { icon: BarChart3, title: 'Predictive Analytics', desc: 'Identify early warning signals before nutrition crisis impacts performance.' },
              { icon: Globe, title: 'School Intelligence', desc: 'Real-time monitoring of school-level metrics and meal program participation.' },
              { icon: Zap, title: 'Intervention Engine', desc: 'Data-driven recommendations for targeted aid and social support programs.' },
              { icon: Shield, title: 'Impact Verification', desc: 'Track outcomes of interventions to optimize resource allocation.' },
            ].map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="glass-card p-8 rounded-3xl hover:border-primary/30 transition-all group"
                >
                  <div className="p-3 rounded-2xl bg-primary/10 text-primary w-fit mb-6 group-hover:scale-110 transition-transform">
                    <Icon size={28} />
                  </div>
                  <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-40 text-center">
          <h2 className="text-3xl font-black mb-8 italic text-white/80">"Every child deserves to learn on a full stomach"</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>
      </main>

      <footer className="relative z-10 border-t border-white/5 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <BrainCircuit className="text-primary/50" size={20} />
            <span className="text-lg font-black tracking-tighter text-white/50">NourishIQ</span>
          </div>
          <p className="text-xs text-muted-foreground">© 2026 NourishIQ. National Nutrition Intelligence Infrastructure.</p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Security</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
