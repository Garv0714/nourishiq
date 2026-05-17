import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Check, School, Users, Utensils, MapPin } from 'lucide-react';
import { cn } from '../../../lib/utils';

const steps = [
  { icon: School, title: 'Basic Info' },
  { icon: Users, title: 'Demographics' },
  { icon: Utensils, title: 'Nutrition' },
  { icon: Check, title: 'Review' },
];

export default function SchoolOnboardPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 0));

  return (
    <div className="max-w-4xl mx-auto space-y-8 py-8 px-4">
      <div className="text-center space-y-2">
        <h1 className="text-3xl md:text-4xl font-black tracking-tight">Onboard New School</h1>
        <p className="text-sm md:text-base text-muted-foreground">Integrate a new educational node into the NourishIQ network</p>
      </div>

      <div className="flex justify-between items-center relative px-4 max-w-2xl mx-auto">
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/5 -translate-y-1/2 z-0" />
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <div key={i} className="relative z-10 flex flex-col items-center gap-2">
              <div className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 border-2",
                currentStep === i ? "bg-primary border-primary text-white scale-110 shadow-lg shadow-primary/20" : 
                currentStep > i ? "bg-secondary border-secondary text-white" : 
                "bg-nourish-navy border-white/10 text-muted-foreground"
              )}>
                <Icon size={18} />
              </div>
              <span className={cn(
                "text-[10px] font-bold uppercase tracking-widest",
                currentStep === i ? "text-primary" : "text-muted-foreground"
              )}>{step.title}</span>
            </div>
          );
        })}
      </div>

      <div className="glass-card rounded-2xl p-8 min-h-[400px] flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex-1 space-y-6"
          >
            {currentStep === 0 && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">School Name</label>
                    <input type="text" placeholder="e.g. Shravasti Primary" className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-sm focus:ring-1 focus:ring-primary/50" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">District</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-sm focus:ring-1 focus:ring-primary/50 appearance-none">
                      <option>Shravasti</option>
                      <option>Anantapur</option>
                      <option>Koraput</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">School Type</label>
                  <div className="grid grid-cols-4 gap-2">
                    {['Primary', 'Middle', 'Secondary', 'Integrated'].map(t => (
                      <button key={t} className="py-3 px-1 rounded-lg border border-white/10 text-[10px] font-bold uppercase hover:bg-primary/10 hover:border-primary/50 transition-all">
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {currentStep === 1 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Total Students</label>
                  <input type="number" placeholder="0" className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-sm focus:ring-1 focus:ring-primary/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Full Address</label>
                  <textarea rows={3} placeholder="Enter school location details..." className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-sm focus:ring-1 focus:ring-primary/50" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Latitude</label>
                    <input type="text" placeholder="27.5095" className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-sm" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Longitude</label>
                    <input type="text" placeholder="81.9961" className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-sm" />
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.03] border border-white/5">
                  <div>
                    <h4 className="text-sm font-bold">Midday Meal Program</h4>
                    <p className="text-[10px] text-muted-foreground">Active monitoring enabled</p>
                  </div>
                  <div className="w-12 h-6 rounded-full bg-primary/20 p-1 flex items-center justify-end">
                    <div className="w-4 h-4 rounded-full bg-primary" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Meal Provider</label>
                  <input type="text" placeholder="e.g. District Central Kitchen" className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Provided Meals</label>
                  <div className="flex gap-2">
                    {['Breakfast', 'Lunch', 'Evening Snack'].map(m => (
                      <button key={m} className="flex-1 py-3 px-1 rounded-lg border border-white/10 text-[10px] font-bold uppercase hover:bg-primary/10 hover:border-primary/50 transition-all">
                        {m}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                  <h4 className="text-sm font-bold text-primary mb-2 flex items-center gap-2">
                    <Check size={16} /> Data Ready for Submission
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Once submitted, NourishIQ will begin polling regional social signals and market trends to establish a baseline risk score for this school.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs py-2 border-b border-white/5">
                    <span className="text-muted-foreground">School</span>
                    <span className="font-bold italic opacity-50">Pending Input</span>
                  </div>
                  <div className="flex justify-between text-xs py-2 border-b border-white/5">
                    <span className="text-muted-foreground">District</span>
                    <span className="font-bold italic opacity-50">Pending Input</span>
                  </div>
                  <div className="flex justify-between text-xs py-2">
                    <span className="text-muted-foreground">Students</span>
                    <span className="font-bold italic opacity-50">Pending Input</span>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center">
          <button 
            onClick={prevStep}
            disabled={currentStep === 0}
            className="flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-foreground disabled:opacity-0 transition-all"
          >
            <ChevronLeft size={18} /> Previous
          </button>
          {currentStep === steps.length - 1 ? (
            <button 
              onClick={() => navigate('/dashboard/schools')}
              className="px-8 py-3 rounded-xl bg-primary text-white font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-all"
            >
              Submit & Begin Monitoring
            </button>
          ) : (
            <button 
              onClick={nextStep}
              className="flex items-center gap-2 px-8 py-3 rounded-xl bg-white/5 border border-white/10 text-sm font-bold hover:bg-white/10 transition-all"
            >
              Next Step <ChevronRight size={18} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
