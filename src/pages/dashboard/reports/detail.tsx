import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, FileDown, BrainCircuit, CheckCircle2, AlertCircle, Share2 } from 'lucide-react';
import { aiReports } from '../../../data/synthetic/analytics';
import { cn } from '../../../lib/utils';

export default function ReportDetailPage() {
  const { id } = useParams();
  const report = aiReports.find(r => r.id === id);

  if (!report) return <div>Report not found</div>;

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <Link to="/dashboard/reports" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-all">
          <ChevronLeft size={18} /> Back to Reports
        </Link>
        <div className="flex gap-3">
          <button className="p-2 rounded-lg bg-white/5 border border-white/10 text-muted-foreground hover:text-foreground transition-all">
            <Share2 size={18} />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20">
            <FileDown size={18} /> Export PDF
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2 text-[10px] font-bold text-accent uppercase tracking-widest">
          <BrainCircuit size={14} /> AI Generated • {report.date}
        </div>
        <h1 className="text-4xl font-black tracking-tight leading-tight">{report.title}</h1>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="h-2 w-24 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-accent" style={{ width: `${report.confidence * 100}%` }} />
            </div>
            <span className="text-xs text-accent font-bold">{(report.confidence * 100).toFixed(0)}% Intelligence Confidence</span>
          </div>
        </div>
      </div>

      <div className="glass-card rounded-2xl p-8 border-l-4 border-l-primary">
        <h3 className="text-lg font-bold mb-4">Executive Summary</h3>
        <p className="text-muted-foreground leading-relaxed italic">{report.summary}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <AlertCircle className="text-warning" size={20} /> Key Findings
          </h3>
          <div className="space-y-4">
            {report.keyFindings.map((finding, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-warning/20 text-warning flex items-center justify-center text-xs font-bold">
                  {i + 1}
                </span>
                <p className="text-sm text-muted-foreground leading-relaxed">{finding}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <CheckCircle2 className="text-secondary" size={20} /> Recommended Actions
          </h3>
          <div className="space-y-4">
            {report.recommendations.map((rec, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <CheckCircle2 className="flex-shrink-0 text-secondary" size={20} />
                <p className="text-sm text-muted-foreground leading-relaxed">{rec}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="glass-card rounded-2xl p-10 prose prose-invert max-w-none">
        <div dangerouslySetInnerHTML={{ __html: report.content.replace(/\n/g, '<br />') }} className="text-muted-foreground leading-loose" />
      </div>

      <div className="pt-12 text-center">
        <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest mb-2">End of Report</p>
        <div className="w-12 h-1 bg-white/5 mx-auto rounded-full" />
      </div>
    </div>
  );
}
