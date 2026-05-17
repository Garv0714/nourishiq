import { AnalyticsTrend, FoodPriceData, AIInsight, Intervention, AIReport } from '../../types';

export const monthlyTrends: AnalyticsTrend[] = Array.from({ length: 12 }, (_, i) => ({
  month: new Date(2025, i, 1).toISOString().split('T')[0],
  attendanceRate: 70 + Math.sin(i / 2) * 10 + Math.random() * 5,
  mealParticipation: 65 + Math.cos(i / 2) * 8 + Math.random() * 5,
  riskIndex: 55 - Math.sin(i / 3) * 15 + Math.random() * 5
}));

export const foodPrices: FoodPriceData[] = Array.from({ length: 12 }, (_, i) => ({
  month: new Date(2025, i, 1).toISOString().split('T')[0],
  rice: 100 + i * 2 + Math.random() * 5,
  wheat: 95 + i * 1.5 + Math.random() * 5,
  dal: 110 + i * 3 + Math.random() * 10,
  vegetables: 105 + Math.sin(i) * 15 + i * 2,
  milk: 100 + i * 1 + Math.random() * 2
}));

export const aiInsights: AIInsight[] = [
  {
    id: 'insight-1',
    title: 'Predicted Attendance Drop',
    description: 'Attendance in Shravasti expected to drop by 15% next month due to upcoming harvesting season.',
    type: 'prediction',
    severity: 'high',
    confidence: 0.89,
    timestamp: new Date().toISOString(),
    affectedDistricts: ['d1']
  },
  {
    id: 'insight-2',
    title: 'Food Price Anomaly',
    description: 'Sudden 22% spike in dal prices detected in Andhra Pradesh. Potential impact on meal participation.',
    type: 'anomaly',
    severity: 'critical',
    confidence: 0.94,
    timestamp: new Date().toISOString(),
    affectedDistricts: ['d2']
  },
  {
    id: 'insight-3',
    title: 'Intervention Recommendation',
    description: 'Expand midday meal program in Koraput to include weekend supplements to stabilize attendance.',
    type: 'recommendation',
    severity: 'moderate',
    confidence: 0.82,
    timestamp: new Date().toISOString(),
    affectedDistricts: ['d3']
  },
  {
    id: 'insight-4',
    title: 'Critical Risk Escalation',
    description: 'District risk score for Kalahandi has increased from 64 to 72 in the last 30 days.',
    type: 'alert',
    severity: 'high',
    confidence: 0.91,
    timestamp: new Date().toISOString(),
    affectedDistricts: ['d4']
  },
  {
    id: 'insight-5',
    title: 'Positive Outcome Detected',
    description: 'Nandurbar shows 12% improvement in meal participation after recent NGO partnership.',
    type: 'prediction',
    severity: 'low',
    confidence: 0.88,
    timestamp: new Date().toISOString(),
    affectedDistricts: ['d6']
  },
  {
    id: 'insight-6',
    title: 'Seasonal Vulnerability',
    description: 'Jaisalmer districts show early signs of drought impact on school-aged children nutrition.',
    type: 'anomaly',
    severity: 'moderate',
    confidence: 0.79,
    timestamp: new Date().toISOString(),
    affectedDistricts: ['d7']
  }
];

export const interventions: Intervention[] = [
  {
    id: 'int-1',
    title: 'Emergency Nutrition Supplement',
    description: 'Direct distribution of protein-rich supplements to families in high-risk zones.',
    type: 'emergency_aid',
    status: 'active',
    districtId: 'd1',
    districtName: 'Shravasti',
    beneficiariesCount: 12500,
    impactScore: 8.4,
    startDate: '2025-01-15'
  },
  {
    id: 'int-2',
    title: 'Midday Meal Expansion',
    description: 'Extending current meal program to include high-energy breakfast for primary students.',
    type: 'meal_program',
    status: 'active',
    districtId: 'd3',
    districtName: 'Koraput',
    beneficiariesCount: 8200,
    impactScore: 7.9,
    startDate: '2025-02-01'
  },
  {
    id: 'int-3',
    title: 'Community Food Bank',
    description: 'Establishing local storage and distribution centers for essential grains.',
    type: 'food_bank',
    status: 'planned',
    districtId: 'd2',
    districtName: 'Anantapur',
    beneficiariesCount: 15000,
    impactScore: 0,
    startDate: '2025-06-01'
  },
  {
    id: 'int-4',
    title: 'Parental Nutrition Education',
    description: 'Workshops for parents on low-cost balanced diets and hygiene.',
    type: 'nutrition_education',
    status: 'active',
    districtId: 'd4',
    districtName: 'Kalahandi',
    beneficiariesCount: 5400,
    impactScore: 6.2,
    startDate: '2025-03-10'
  },
  {
    id: 'int-5',
    title: 'Rural Livelihood Support',
    description: 'Financial support for families to ensure children remain in school during off-season.',
    type: 'family_support',
    status: 'completed',
    districtId: 'd6',
    districtName: 'Nandurbar',
    beneficiariesCount: 3200,
    impactScore: 9.1,
    startDate: '2024-10-01',
    endDate: '2025-03-31'
  }
];

export const aiReports: AIReport[] = [
  {
    id: 'rep-1',
    title: 'Quarterly Hunger Risk Analysis - Q1 2025',
    summary: 'Comprehensive analysis of risk factors across 8 districts, identifying seasonal patterns and intervention gaps.',
    type: 'Trend Summary',
    confidence: 0.92,
    date: '2025-04-01',
    keyFindings: [
      'Positive correlation (0.84) between dal price spikes and meal participation drop.',
      'Attendance patterns in UP show early signs of seasonal migration impact.',
      'Intervention impact in Nandurbar has exceeded expectations by 15%.'
    ],
    recommendations: [
      'Accelerate Anantapur food bank deployment.',
      'Standardize protein supplements across all critical districts.',
      'Integrate weather forecasting into risk prediction model.'
    ],
    content: '# Quarterly Analysis Report\n\n## Executive Summary\nThe first quarter of 2025 has shown significant volatility in nutrition stability across the monitored regions...'
  },
  {
    id: 'rep-2',
    title: 'District Deep-Dive: Shravasti',
    summary: 'Focused analysis on Shravasti district following the recent risk level escalation to Critical.',
    type: 'District Analysis',
    confidence: 0.96,
    date: '2025-05-10',
    keyFindings: [
      'Primary schools show higher risk (88) compared to secondary schools (72).',
      'Local market prices for vegetables have risen 45% above regional average.',
      'Attendance has dropped 8% since the start of the summer season.'
    ],
    recommendations: [
      'Immediate deployment of mobile nutrition units.',
      'Cross-departmental meeting with district authorities.',
      'Targeted family support for bottom 10% of households by income.'
    ],
    content: '# Shravasti District Deep-Dive\n\n## Overview\nShravasti remains the highest priority district in our monitoring network...'
  }
];
