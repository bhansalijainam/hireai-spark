
import React, { useState } from 'react';
import LandingPage from '@/components/landing-page';
import CandidateDashboard from '@/components/candidate-dashboard';
import RecruiterDashboard from '@/components/recruiter-dashboard';
import AnalyticsDashboard from '@/components/analytics-dashboard';

const Index = () => {
  const [currentView, setCurrentView] = useState<'landing' | 'candidate' | 'recruiter' | 'analytics'>('landing');

  const handleUserTypeSelect = (type: 'candidate' | 'recruiter') => {
    setCurrentView(type);
  };

  const handleBackToLanding = () => {
    setCurrentView('landing');
  };

  const handleViewAnalytics = () => {
    setCurrentView('analytics');
  };

  if (currentView === 'candidate') {
    return <CandidateDashboard onBack={handleBackToLanding} />;
  }

  if (currentView === 'recruiter') {
    return <RecruiterDashboard onBack={handleBackToLanding} />;
  }

  if (currentView === 'analytics') {
    return <AnalyticsDashboard onBack={handleBackToLanding} />;
  }

  return <LandingPage onUserTypeSelect={handleUserTypeSelect} />;
};

export default Index;
