
import React, { useState } from 'react';
import LandingPage from '@/components/LandingPage';
import CandidateDashboard from '@/components/CandidateDashboard';
import RecruiterDashboard from '@/components/RecruiterDashboard';

const Index = () => {
  const [currentView, setCurrentView] = useState<'landing' | 'candidate' | 'recruiter'>('landing');

  const handleUserTypeSelect = (type: 'candidate' | 'recruiter') => {
    setCurrentView(type);
  };

  const handleBackToLanding = () => {
    setCurrentView('landing');
  };

  if (currentView === 'candidate') {
    return <CandidateDashboard onBack={handleBackToLanding} />;
  }

  if (currentView === 'recruiter') {
    return <RecruiterDashboard onBack={handleBackToLanding} />;
  }

  return <LandingPage onUserTypeSelect={handleUserTypeSelect} />;
};

export default Index;
