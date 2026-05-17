import React, { useState } from 'react';
import { districts } from '../../../data/synthetic/districts';
import { schools } from '../../../data/synthetic/schools';
import HungerHeatmap from '../../../components/maps/hunger-heatmap';
import { StatusBadge } from '../../../components/shared/status-badge';
import { Search, MapPin, ChevronRight } from 'lucide-react';
import { cn } from '../../../lib/utils';

export default function HungerMapPage() {
  const [selectedDistrict, setSelectedDistrict] = useState(districts[0]);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDistricts = districts.filter(d => 
    d.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="h-full flex flex-col space-y-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-black tracking-tight">Hunger Heatmap</h1>
          <p className="text-sm text-muted-foreground">Geographic intelligence & regional vulnerability clusters</p>
        </div>
        <div className="flex gap-2">
          {['Critical', 'High', 'Moderate', 'Low'].map(level => (
            <div key={level} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest">
              <span className={cn(
                "w-2 h-2 rounded-full",
                level === 'Critical' ? 'bg-risk-critical' : 
                level === 'High' ? 'bg-risk-high' : 
                level === 'Moderate' ? 'bg-risk-moderate' : 'bg-risk-low'
              )} /> {level}
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row gap-6 min-h-[600px]">
        {/* Map Area */}
        <div className="flex-1 glass-card rounded-2xl overflow-hidden border-white/5 min-h-[400px] lg:min-h-0 relative">
          <HungerHeatmap districts={districts} schools={schools} />
        </div>

        {/* Intelligence Side Panel - PC Optimized */}
        <div className="lg:w-80 flex flex-col gap-4 shrink-0">
          <div className="glass-card rounded-2xl p-4 flex flex-col gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
              <input 
                type="text" 
                placeholder="Search districts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-xs focus:outline-none focus:ring-1 focus:ring-primary/50"
              />
            </div>
            
            <div className="space-y-2 max-h-[300px] overflow-y-auto pr-1 custom-scrollbar">
              <h3 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Monitored Regions</h3>
              {filteredDistricts.map(d => (
                <button
                  key={d.id}
                  onClick={() => setSelectedDistrict(d)}
                  className={cn(
                    "w-full flex items-center justify-between p-3 rounded-xl transition-all border",
                    selectedDistrict.id === d.id 
                      ? "bg-primary/10 border-primary/30 text-primary" 
                      : "bg-white/5 border-white/5 text-muted-foreground hover:bg-white/10"
                  )}
                >
                  <div className="flex items-center gap-2">
                    <MapPin size={14} />
                    <span className="text-xs font-bold">{d.name}</span>
                  </div>
                  <ChevronRight size={14} />
                </button>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-2xl p-5 flex-1">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-black">{selectedDistrict.name}</h3>
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest">{selectedDistrict.state}</p>
              </div>
              <StatusBadge level={selectedDistrict.riskLevel} trend={selectedDistrict.riskTrend} />
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <p className="text-[9px] text-muted-foreground uppercase font-bold tracking-widest mb-1">Risk Score</p>
                  <p className={cn("text-xl font-black", 
                    selectedDistrict.riskScore > 75 ? "text-risk-critical" : 
                    selectedDistrict.riskScore > 50 ? "text-risk-high" : "text-primary"
                  )}>{selectedDistrict.riskScore}</p>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <p className="text-[9px] text-muted-foreground uppercase font-bold tracking-widest mb-1">Schools</p>
                  <p className="text-xl font-black">{selectedDistrict.totalSchools}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-muted-foreground">Attendance</span>
                  <span className="font-bold">{selectedDistrict.avgAttendance}%</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: `${selectedDistrict.avgAttendance}%` }} />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-muted-foreground">Meal Participation</span>
                  <span className="font-bold">{selectedDistrict.mealParticipation}%</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-secondary" style={{ width: `${selectedDistrict.mealParticipation}%` }} />
                </div>
              </div>

              <div className="pt-4 border-t border-white/5">
                <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-3">AI Cluster Sentiment</h4>
                <p className="text-[11px] text-muted-foreground leading-relaxed italic">
                  "Unusual drop in attendance detected in the northern sectors of {selectedDistrict.name} likely due to upcoming harvest period. Recommend early meal distribution."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
