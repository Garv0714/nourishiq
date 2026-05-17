import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Plus, ArrowRight, BrainCircuit, Calendar, ChevronRight } from 'lucide-react';
import { aiReports } from '../../../data/synthetic/analytics';
import { cn } from '../../../lib/utils';

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-black tracking-tight">AI Intelligence Reports</h1>
          <p className="text-sm text-muted-foreground">Comprehensive narrative analysis & predictive summaries</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="glass-card rounded-2xl p-6 border-dashed border-primary/30 flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-primary/5 transition-all">
          <div className="p-4 rounded-full bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform">
            <Plus size={32} />
          </div>
          <h3 className="text-lg font-bold mb-2">Generate New Report</h3>
          <p className="text-xs text-muted-foreground mb-6">Create a custom AI-driven analysis for specific districts or time periods.</p>
          <button className="px-6 py-2 rounded-full bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20">
            Start AI Engine
          </button>
        </div>

        {aiReports.map((report) => (
          <Link 
            key={report.id} 
            to={`/dashboard/reports/${report.id}`}
            className="glass-card rounded-2xl p-6 flex flex-col group hover:border-white/10 transition-all"
          >
            <div className="flex justify-between items-start mb-4">
              <span className={cn(
                "px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest border",
                report.type.includes('District') ? "bg-accent/10 text-accent border-accent/20" : "bg-primary/10 text-primary border-primary/20"
              )}>
                {report.type}
              </span>
              <div className="flex items-center gap-1 text-[10px] text-muted-foreground uppercase font-bold tracking-widest">
                <Calendar size={10} /> {report.date}
              </div>
            </div>
            
            <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{report.title}</h3>
            <p className="text-xs text-muted-foreground line-clamp-2 mb-6">{report.summary}</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {report.keyFindings.slice(0, 2).map((finding, i) => (
                <span key={i} className="text-[9px] px-2 py-1 rounded bg-white/5 text-muted-foreground">
                  {finding.split(' ').slice(0, 3).join(' ')}...
                </span>
              ))}
            </div>

            <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="h-1 w-12 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-accent" style={{ width: `${report.confidence * 100}%` }} />
                </div>
                <span className="text-[10px] text-accent font-bold">{(report.confidence * 100).toFixed(0)}% AI Confidence</span>
              </div>
              <ChevronRight className="text-muted-foreground group-hover:text-primary transition-colors" size={16} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
