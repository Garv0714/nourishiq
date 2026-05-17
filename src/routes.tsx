import React, { lazy, Suspense } from 'react';

import LandingPage from './pages/LandingPage';
import DashboardLayout from './pages/dashboard/Layout';
import DashboardPage from './pages/dashboard/index';
import HungerMapPage from './pages/dashboard/analytics/hunger-map';
import TrendsPage from './pages/dashboard/analytics/trends';
import SchoolsPage from './pages/dashboard/schools/index';
import SchoolOnboardPage from './pages/dashboard/schools/onboard';
import DistrictsPage from './pages/dashboard/districts/index';
import DistrictDetailPage from './pages/dashboard/districts/detail';
import ReportsPage from './pages/dashboard/reports/index';
import ReportDetailPage from './pages/dashboard/reports/detail';
import InterventionsPage from './pages/dashboard/interventions';
import SettingsPage from './pages/dashboard/settings';

const Loading = () => (
  <div className="flex h-screen w-full items-center justify-center bg-nourish-navy">
    <div className="flex flex-col items-center gap-4">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      <p className="text-sm text-muted-foreground animate-pulse">Loading Intelligence...</p>
    </div>
  </div>
);

export const routes = [
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      { path: '', element: <DashboardPage /> },
      { path: 'analytics/hunger-map', element: <HungerMapPage /> },
      { path: 'analytics/trends', element: <TrendsPage /> },
      { path: 'schools', element: <SchoolsPage /> },
      { path: 'schools/onboard', element: <SchoolOnboardPage /> },
      { path: 'districts', element: <DistrictsPage /> },
      { path: 'districts/:id', element: <DistrictDetailPage /> },
      { path: 'reports', element: <ReportsPage /> },
      { path: 'reports/:id', element: <ReportDetailPage /> },
      { path: 'interventions', element: <InterventionsPage /> },
      { path: 'settings', element: <SettingsPage /> },
    ]
  }
];
