import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { RiskLevel } from '../types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getRiskColor(level: RiskLevel): string {
  switch (level) {
    case 'low': return '#22C55E';
    case 'moderate': return '#F59E0B';
    case 'high': return '#F97316';
    case 'critical': return '#EF4444';
    default: return '#9CA3AF';
  }
}

export function formatRiskScore(score: number): string {
  return score.toFixed(1);
}

export function formatDate(date: string): string {
  return new Date(date).toISOString().split('T')[0];
}

export function formatNumber(num: number): string {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
  if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
  return num.toString();
}
