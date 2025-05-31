
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { User, Search, Mail, ArrowRight, CheckCircle } from 'lucide-react';

interface LandingPageProps {
  onUserTypeSelect: (type: 'candidate' | 'recruiter') => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onUserTypeSelect }) => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [selectedType, setSelectedType] = useState<'candidate' | 'recruiter' | null>(null);

  const handleUserTypeSelect = (type: 'candidate' | 'recruiter') => {
    setSelectedType(type);
    setShowSignIn(true);
  };

  const handleSignIn = () => {
    if (selectedType) {
      onUserTypeSelect(selectedType);
    }
  };

  if (showSignIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-orange-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome {selectedType === 'candidate' ? 'Candidate' : 'Recruiter'}!
            </h2>
            <p className="text-gray-600">Sign in to get started</p>
          </div>

          <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8 space-y-6">
              <div className="space-y-4">
                <Button 
                  className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all duration-200 transform hover:scale-[1.02]"
                  onClick={handleSignIn}
                >
                  <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Continue with Google
                </Button>

                <Button 
                  variant="outline" 
                  className="w-full h-12 border-2 hover:bg-blue-50 rounded-xl font-medium transition-all duration-200 transform hover:scale-[1.02]"
                  onClick={handleSignIn}
                >
                  <svg className="w-5 h-5 mr-3 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  Continue with LinkedIn
                </Button>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">Or continue with email</span>
                </div>
              </div>

              <div className="space-y-4">
                <Input 
                  type="email" 
                  placeholder="Enter your email"
                  className="h-12 rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
                />
                <Button 
                  className="w-full h-12 bg-indigo-600 hover:bg-indigo-700 rounded-xl font-medium transition-all duration-200 transform hover:scale-[1.02]"
                  onClick={handleSignIn}
                >
                  Continue with Email
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <p className="text-center text-sm text-gray-500 mt-6">
            By continuing, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-orange-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-orange-500 rounded-lg"></div>
            <span className="text-xl font-bold text-gray-900">HireAI Copilot</span>
          </div>
          <Button variant="outline" className="rounded-full px-6">
            Sign In
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-indigo-100 text-indigo-800 hover:bg-indigo-100 px-4 py-2 rounded-full text-sm font-medium">
            ✨ AI-Powered Hiring Platform
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Fill AI roles <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-orange-500">3× faster</span>
            <br />—no bias, no hassle.
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Revolutionary hiring platform that uses AI to match top talent with innovative companies. 
            Streamline your process from discovery to hire.
          </p>
        </div>

        {/* Sign-up Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          <Card 
            className="group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl border-0 bg-white/80 backdrop-blur-sm"
            onClick={() => handleUserTypeSelect('candidate')}
          >
            <CardHeader className="text-center p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <User className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900 mb-2">I'm a Candidate</CardTitle>
              <CardDescription className="text-gray-600 text-lg">
                Upload your resume and get discovered by top companies looking for AI talent
              </CardDescription>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>AI-powered resume parsing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Direct recruiter outreach</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Personalized job matching</span>
                </div>
              </div>
              <Button className="w-full mt-6 h-12 bg-indigo-600 hover:bg-indigo-700 rounded-xl font-medium group-hover:shadow-lg transition-all duration-300">
                Get Started as Candidate
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </CardContent>
          </Card>

          <Card 
            className="group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl border-0 bg-white/80 backdrop-blur-sm"
            onClick={() => handleUserTypeSelect('recruiter')}
          >
            <CardHeader className="text-center p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Search className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900 mb-2">I'm a Recruiter</CardTitle>
              <CardDescription className="text-gray-600 text-lg">
                Search and discover qualified AI professionals with intelligent matching
              </CardDescription>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Natural language search</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>AI-generated outreach</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Advanced analytics</span>
                </div>
              </div>
              <Button className="w-full mt-6 h-12 bg-orange-600 hover:bg-orange-700 rounded-xl font-medium group-hover:shadow-lg transition-all duration-300">
                Get Started as Recruiter
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Features Preview */}
        <div className="text-center">
          <p className="text-gray-600 mb-8">Trusted by innovative companies worldwide</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="w-24 h-8 bg-gray-200 rounded animate-pulse"></div>
            <div className="w-20 h-8 bg-gray-200 rounded animate-pulse"></div>
            <div className="w-28 h-8 bg-gray-200 rounded animate-pulse"></div>
            <div className="w-24 h-8 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
