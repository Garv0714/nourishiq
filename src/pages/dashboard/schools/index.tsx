import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Plus, Filter, ArrowUpDown, MoreHorizontal } from 'lucide-react';
import { schools } from '../../../data/synthetic/schools';
import { StatusBadge } from '../../../components/shared/status-badge';
import { cn } from '../../../lib/utils';

export default function SchoolsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterLevel, setFilterLevel] = useState('all');

  const filteredSchools = schools.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         s.districtName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = filterLevel === 'all' || s.riskLevel === filterLevel;
    return matchesSearch && matchesLevel;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-black tracking-tight">Schools Intelligence</h1>
          <p className="text-sm text-muted-foreground">Monitoring {schools.length} schools across 8 districts</p>
        </div>
        <Link to="/dashboard/schools/onboard" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white text-sm font-bold hover:bg-primary-dark transition-all shadow-lg shadow-primary/20">
          <Plus size={18} /> Onboard School
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
          <input 
            type="text" 
            placeholder="Search school name or district..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-primary/50"
          />
        </div>
        <div className="flex gap-2">
          {['all', 'critical', 'high', 'moderate', 'low'].map(level => (
            <button
              key={level}
              onClick={() => setFilterLevel(level)}
              className={cn(
                "px-3 py-2 rounded-lg border text-xs font-bold capitalize transition-all",
                filterLevel === level 
                  ? "bg-primary/20 border-primary text-primary" 
                  : "bg-white/5 border-white/10 text-muted-foreground hover:bg-white/10"
              )}
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      <div className="glass-card rounded-2xl overflow-hidden border-white/5">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-white/[0.03] border-b border-white/5">
              <tr>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">School Name</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">District</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground text-center">Students</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground text-center">Attendance %</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground text-center">Meals %</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Risk Level</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredSchools.map((school) => (
                <tr key={school.id} className="hover:bg-white/[0.02] transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold group-hover:text-primary transition-colors">{school.name}</span>
                      <span className="text-[10px] text-muted-foreground capitalize">{school.type} School</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-xs">{school.districtName}</td>
                  <td className="px-6 py-4 text-xs font-medium text-center">{school.totalStudents}</td>
                  <td className={cn(
                    "px-6 py-4 text-xs font-bold text-center",
                    school.avgAttendance < 70 ? "text-risk-critical" : "text-risk-low"
                  )}>
                    {school.avgAttendance}%
                  </td>
                  <td className={cn(
                    "px-6 py-4 text-xs font-bold text-center",
                    school.mealParticipation < 60 ? "text-risk-critical" : "text-risk-low"
                  )}>
                    {school.mealParticipation}%
                  </td>
                  <td className="px-6 py-4">
                    <StatusBadge level={school.riskLevel} trend={school.riskTrend} />
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-lg transition-all">
                      <MoreHorizontal size={18} />
                    </button>
                  </td>
                </tr>
              ))}
              {filteredSchools.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-6 py-12 text-center text-muted-foreground text-sm">
                    No schools match your search filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
