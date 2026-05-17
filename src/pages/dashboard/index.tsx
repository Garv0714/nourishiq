import React from 'react';
import { FileDown, Play, ArrowUpRight, TrendingUp } from 'lucide-react';
import { StatsGrid } from '../../components/dashboard/stats-grid';
import { RiskGauge } from '../../components/dashboard/risk-gauge';
import { HungerTrendChart } from '../../components/charts/hunger-trend-chart';
import { FoodInflationChart } from '../../components/charts/food-inflation-chart';
import { AIInsightCard } from '../../components/dashboard/ai-insight-card';
import { RiskDistributionChart } from '../../components/charts/risk-distribution-chart';
import { districts } from '../../data/synthetic/districts';
import { monthlyTrends, foodPrices, aiInsights } from '../../data/synthetic/analytics';
import { cn } from '../../lib/utils';
import HungerHeatmap from '../../components/maps/hunger-heatmap';

export default function DashboardPage() {
  const criticalDistricts = [...districts]
    .sort((a, b) => b.riskScore - a.riskScore)
    .slice(0, 4);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h1 className="text-2xl font-black tracking-tight">Intelligence Dashboard</h1>
            <span className="px-2 py-0.5 rounded-full bg-risk-critical/10 text-risk-critical text-[10px] font-bold border border-risk-critical/20 flex items-center gap-1">
              <span className="w-1 h-1 rounded-full bg-risk-critical animate-pulse" /> LIVE
            </span>
          </div>
          <p className="text-sm text-muted-foreground">National nutrition vulnerability oversight & predictive analytics</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-semibold hover:bg-white/10 transition-all">
            <FileDown size={16} /> Export Report
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white text-sm font-bold hover:bg-primary-dark transition-all shadow-lg shadow-primary/20">
            <Play size={16} fill="currentColor" /> Run AI Analysis
          </button>
        </div>
      </div>

      <StatsGrid />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass-card rounded-2xl p-0 overflow-hidden border-white/5">
          <div className="p-4 border-b border-white/5 flex justify-between items-center">
            <h3 className="font-bold text-sm">Compact Hunger Heatmap</h3>
            <button className="text-xs text-primary font-bold hover:underline">View Full Map</button>
          </div>
          <HungerHeatmap districts={districts} compact />
        </div>
        
        <div className="glass-card rounded-2xl p-6 flex flex-col justify-between">
          <div className="text-center mb-4">
            <h3 className="font-bold text-sm mb-1">National Risk Index</h3>
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Composite vulnerability score</p>
          </div>
          <RiskGauge score={65.8} label="Average district vulnerability" />
          <div className="mt-6 space-y-3">
            <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2">Critical Districts</h4>
            {criticalDistricts.map(d => (
              <div key={d.id} className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/5">
                <div className="flex flex-col">
                  <span className="text-xs font-bold">{d.name}</span>
                  <span className="text-[10px] text-muted-foreground">{d.state}</span>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-risk-critical">{d.riskScore}</div>
                  <div className="text-[10px] text-risk-critical flex items-center justify-end gap-0.5">
                    <TrendingUp size={10} /> {d.riskTrend}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-card rounded-2xl p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="font-bold">Hunger Trends</h3>
              <p className="text-xs text-muted-foreground">Attendance vs Meal Participation</p>
            </div>
            <div className="flex gap-2">
              <span className="px-2 py-1 rounded bg-primary/10 text-primary text-[10px] font-bold">12 MONTHS</span>
            </div>
          </div>
          <HungerTrendChart data={monthlyTrends} />
        </div>
        <div className="glass-card rounded-2xl p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="font-bold">Food Price Inflation</h3>
              <p className="text-xs text-muted-foreground">Market indices for essential commodities</p>
            </div>
            <div className="flex gap-2">
              <span className="px-2 py-1 rounded bg-warning/10 text-warning text-[10px] font-bold">REAL-TIME</span>
            </div>
          </div>
          <FoodInflationChart data={foodPrices} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-bold">Latest AI Insights</h3>
            <button className="text-xs text-primary font-bold hover:underline">View All Insights</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {aiInsights.map((insight, i) => (
              <AIInsightCard key={insight.id} insight={insight} />
            ))}
          </div>
        </div>
        <div className="glass-card rounded-2xl p-6">
          <h3 className="font-bold mb-6">Risk Distribution</h3>
          <RiskDistributionChart data={districts} />
          <div className="mt-4 p-3 rounded-xl bg-accent/10 border border-accent/20">
            <p className="text-[10px] text-accent leading-relaxed">
              <span className="font-bold">AI Note:</span> The distribution shows a 15% rightward shift in risk scores since last quarter, primarily driven by Shravasti and Anantapur clusters.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
