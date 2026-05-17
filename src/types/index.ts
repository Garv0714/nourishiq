export type RiskLevel = 'low' | 'moderate' | 'high' | 'critical';
export type RiskTrend = 'improving' | 'stable' | 'worsening';
export type SchoolType = 'primary' | 'middle' | 'secondary' | 'integrated';
export type InterventionType = 'meal_program' | 'food_bank' | 'nutrition_education' | 'family_support' | 'emergency_aid';
export type InterventionStatus = 'active' | 'planned' | 'completed';
export type InsightType = 'alert' | 'prediction' | 'recommendation' | 'anomaly';

export interface District {
  id: string;
  name: string;
  state: string;
  lat: number;
  lng: number;
  population: number;
  totalSchools: number;
  totalStudents: number;
  avgAttendance: number;
  mealParticipation: number;
  riskScore: number;
  riskLevel: RiskLevel;
  riskTrend: RiskTrend;
  activeInterventions: number;
}

export interface School {
  id: string;
  name: string;
  districtId: string;
  districtName: string;
  type: SchoolType;
  totalStudents: number;
  avgAttendance: number;
  mealParticipation: number;
  riskScore: number;
  riskLevel: RiskLevel;
  riskTrend: RiskTrend;
  lat: number;
  lng: number;
}

export interface AnalyticsTrend {
  month: string;
  attendanceRate: number;
  mealParticipation: number;
  riskIndex: number;
}

export interface FoodPriceData {
  month: string;
  rice: number;
  wheat: number;
  dal: number;
  vegetables: number;
  milk: number;
}

export interface AIInsight {
  id: string;
  title: string;
  description: string;
  type: InsightType;
  severity: RiskLevel;
  confidence: number;
  timestamp: string;
  affectedDistricts: string[];
}

export interface Intervention {
  id: string;
  title: string;
  description: string;
  type: InterventionType;
  status: InterventionStatus;
  districtId: string;
  districtName: string;
  beneficiariesCount: number;
  impactScore: number;
  startDate: string;
  endDate?: string;
}

export interface AIReport {
  id: string;
  title: string;
  summary: string;
  type: string;
  confidence: number;
  date: string;
  keyFindings: string[];
  recommendations: string[];
  content: string;
}
