import React from 'react';
import { BarChart3, TrendingUp, TrendingDown, Info } from 'lucide-react';
import { HungerTrendChart } from '../../../components/charts/hunger-trend-chart';
import { FoodInflationChart } from '../../../components/charts/food-inflation-chart';
import { RiskDistributionChart } from '../../../components/charts/risk-distribution-chart';
import { districts } from '../../../data/synthetic/districts';
import { monthlyTrends, foodPrices } from '../../../data/synthetic/analytics';

export default function TrendsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-black tracking-tight">Predictive Analytics</h1>
          <p className="text-sm text-muted-foreground">Historical patterns & market force correlations</p>
        </div>
        <div className="flex gap-2">
          {['3M', '6M', '1Y', 'ALL'].map(t => (
            <button key={t} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[10px] font-bold hover:bg-primary/10 hover:border-primary/30 transition-all uppercase tracking-widest">
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-card rounded-2xl p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="font-bold">Attendance & Nutrition Participation</h3>
              <p className="text-xs text-muted-foreground">12-month rolling trend analysis</p>
            </div>
            <div className="flex items-center gap-1 text-risk-low text-xs font-bold">
              <TrendingUp size={14} /> +2.4% vs LY
            </div>
          </div>
          <HungerTrendChart data={monthlyTrends} />
          <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/10 flex gap-4">
            <Info className="text-primary shrink-0" size={20} />
            <p className="text-xs text-muted-foreground leading-relaxed">
              <span className="font-bold text-primary">Insight:</span> Attendance peaks correlate strongly with local harvest cycles. We recommend scheduling major nutritional drives during off-harvest months.
            </p>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="font-bold">Regional Food Price Indices</h3>
              <p className="text-xs text-muted-foreground">Essential commodity price tracking</p>
            </div>
            <div className="flex items-center gap-1 text-risk-critical text-xs font-bold">
              <TrendingUp size={14} /> +15.8% Inflation
            </div>
          </div>
          <FoodInflationChart data={foodPrices} />
          <div className="mt-6 p-4 rounded-xl bg-warning/5 border border-warning/10 flex gap-4">
            <Info className="text-warning shrink-0" size={20} />
            <p className="text-xs text-muted-foreground leading-relaxed">
              <span className="font-bold text-warning">Alert:</span> The 22% spike in Dal prices has historically triggered a 5-8% drop in school meal participation within 14 days.
            </p>
          </div>
        </div>
      </div>

      <div className="glass-card rounded-2xl p-6">
        <h3 className="font-bold mb-6">Cross-District Risk Distribution</h3>
        <RiskDistributionChart data={districts} />
      </div>
    </div>
  );
}
