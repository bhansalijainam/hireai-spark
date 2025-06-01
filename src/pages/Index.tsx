
import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { LoadingSkeleton } from '@/components/ui/loading-skeleton';
import LandingPage from '@/components/landing-page';
import CandidateDashboard from '@/components/candidate-dashboard';
import RecruiterDashboard from '@/components/recruiter-dashboard';
import AnalyticsDashboard from '@/components/analytics-dashboard';

const Index = () => {
  const { user, loading } = useAuth();
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

  // Show loading skeleton while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-orange-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full space-y-4">
          <LoadingSkeleton lines={3} />
        </div>
      </div>
    );
  }

  // If user is authenticated, show appropriate dashboard
  if (user) {
    if (currentView === 'candidate') {
      return <CandidateDashboard onBack={handleBackToLanding} />;
    }

    if (currentView === 'recruiter') {
      return <RecruiterDashboard onBack={handleBackToLanding} />;
    }

    if (currentView === 'analytics') {
      return <AnalyticsDashboard onBack={handleBackToLanding} />;
    }

    // Default to candidate dashboard for authenticated users
    return <CandidateDashboard onBack={handleBackToLanding} />;
  }

  // Show landing page for unauthenticated users
  return <LandingPage onUserTypeSelect={handleUserTypeSelect} />;
};

export default Index;
