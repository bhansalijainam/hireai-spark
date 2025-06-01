import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Search, Mail, ArrowRight, CheckCircle, Zap, Target, Clock } from 'lucide-react';
import { AuthForms } from '@/components/auth/AuthForms';

interface LandingPageProps {
  onUserTypeSelect: (type: 'candidate' | 'recruiter') => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onUserTypeSelect }) => {
  const [showRolePicker, setShowRolePicker] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [selectedType, setSelectedType] = useState<'candidate' | 'recruiter' | null>(null);

  const handleGetStarted = () => {
    setShowRolePicker(true);
  };

  const handleRoleSelect = (type: 'candidate' | 'recruiter') => {
    setSelectedType(type);
    setShowSignIn(true);
  };

  const handleAuthSuccess = () => {
    if (selectedType) {
      onUserTypeSelect(selectedType);
    }
  };

  if (showSignIn && selectedType) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-orange-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-orange-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              {selectedType === 'candidate' ? (
                <User className="w-8 h-8 text-white" />
              ) : (
                <Search className="w-8 h-8 text-white" />
              )}
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome {selectedType === 'candidate' ? 'Candidate' : 'Recruiter'}!
            </h2>
            <p className="text-gray-600">Sign in to get started with HireAI Copilot</p>
          </div>

          <AuthForms userType={selectedType} onSuccess={handleAuthSuccess} />

          <div className="text-center mt-6">
            <button
              onClick={() => setShowSignIn(false)}
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              ← Back to role selection
            </button>
          </div>

          <p className="text-center text-sm text-gray-500 mt-6">
            By continuing, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    );
  }

  if (showRolePicker) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-orange-50 flex items-center justify-center p-4">
        <div className="max-w-4xl w-full">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Path</h2>
            <p className="text-xl text-gray-600">How would you like to use HireAI Copilot?</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <Card 
              className="card-interactive shadow-xl border-0 bg-white/80 backdrop-blur-sm cursor-pointer"
              onClick={() => handleRoleSelect('candidate')}
            >
              <CardHeader className="text-center p-8">
                <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-3xl mx-auto mb-6 flex items-center justify-center">
                  <User className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-3">I'm a Candidate</CardTitle>
                <CardDescription className="text-gray-600 text-lg leading-relaxed">
                  Upload your resume and get discovered by top companies looking for AI talent like you
                </CardDescription>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <div className="space-y-3 text-sm text-gray-600 mb-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>AI-powered resume parsing and optimization</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Direct outreach from top recruiters</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Personalized job matching</span>
                  </div>
                </div>
                <Button className="w-full h-12 bg-indigo-600 hover:bg-indigo-700 rounded-xl font-medium">
                  Get Started as Candidate
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card 
              className="card-interactive shadow-xl border-0 bg-white/80 backdrop-blur-sm cursor-pointer"
              onClick={() => handleRoleSelect('recruiter')}
            >
              <CardHeader className="text-center p-8">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl mx-auto mb-6 flex items-center justify-center">
                  <Search className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-3">I'm a Recruiter</CardTitle>
                <CardDescription className="text-gray-600 text-lg leading-relaxed">
                  Search and discover qualified AI professionals with intelligent matching and outreach
                </CardDescription>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <div className="space-y-3 text-sm text-gray-600 mb-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Natural language search capabilities</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>AI-generated personalized outreach</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Advanced analytics and insights</span>
                  </div>
                </div>
                <Button className="w-full h-12 bg-orange-600 hover:bg-orange-700 rounded-xl font-medium">
                  Get Started as Recruiter
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button variant="ghost" onClick={() => setShowRolePicker(false)}>
              ← Back to homepage
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-orange-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 max-w-7xl">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-orange-500 rounded-xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">HireAI Copilot</span>
          </div>
          <Button variant="outline" className="rounded-full px-6 hover-lift">
            Sign In
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="text-center mb-16">
          <Badge className="mb-8 bg-indigo-100 text-indigo-800 hover:bg-indigo-100 px-6 py-3 rounded-full text-base font-medium">
            ✨ AI-Powered Hiring Revolution
          </Badge>
          
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Fill AI roles{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-orange-500">
              3× faster
            </span>
            <br />
            —no bias, no hassle.
          </h1>
          
          <p className="text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Search in plain English, see ranked talent instantly, reach out in seconds.
          </p>
          
          <Button 
            onClick={handleGetStarted}
            className="h-16 px-12 text-lg bg-indigo-600 hover:bg-indigo-700 rounded-full font-semibold card-interactive shadow-xl"
          >
            Get started
            <ArrowRight className="w-6 h-6 ml-3" />
          </Button>
        </div>

        {/* Illustration */}
        <div className="relative mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border">
              {/* Radar Animation */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-r from-indigo-500 to-orange-500 rounded-full flex items-center justify-center animate-radar">
                <Search className="w-8 h-8 text-white" />
              </div>
              
              {/* Candidate Cards */}
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { name: "Sarah Chen", role: "Senior ML Engineer", match: 95, skills: ["Python", "TensorFlow"] },
                  { name: "Marcus Johnson", role: "AI Research Scientist", match: 88, skills: ["PyTorch", "NLP"] },
                  { name: "Elena Rodriguez", role: "Data Scientist", match: 82, skills: ["R", "Statistics"] }
                ].map((candidate, i) => (
                  <div key={i} className="bg-white rounded-xl p-4 shadow-lg hover-lift animate-float" style={{ animationDelay: `${i * 0.5}s` }}>
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{candidate.name.split(' ').map(n => n[0]).join('')}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 text-sm">{candidate.name}</h4>
                        <p className="text-gray-600 text-xs">{candidate.role}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-green-600 font-bold text-sm">{candidate.match}%</div>
                        <div className="text-xs text-gray-500">match</div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {candidate.skills.map(skill => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <Card className="text-center p-8 border-0 bg-white/80 backdrop-blur-sm shadow-xl hover-lift">
            <div className="w-16 h-16 bg-indigo-100 rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <Target className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Intelligent Matching</h3>
            <p className="text-gray-600">AI-powered algorithms match candidates based on skills, experience, and cultural fit.</p>
          </Card>
          
          <Card className="text-center p-8 border-0 bg-white/80 backdrop-blur-sm shadow-xl hover-lift">
            <div className="w-16 h-16 bg-orange-100 rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <Clock className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Lightning Fast</h3>
            <p className="text-gray-600">Find and connect with top AI talent in minutes, not weeks or months.</p>
          </Card>
          
          <Card className="text-center p-8 border-0 bg-white/80 backdrop-blur-sm shadow-xl hover-lift">
            <div className="w-16 h-16 bg-green-100 rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Bias-Free Hiring</h3>
            <p className="text-gray-600">Focus on skills and qualifications with our bias-reduction technology.</p>
          </Card>
        </div>

        {/* Social Proof */}
        <div className="text-center">
          <p className="text-gray-600 mb-8 text-lg">Trusted by innovative companies worldwide</p>
          <div className="flex justify-center items-center space-x-12 opacity-60">
            <div className="w-32 h-10 bg-gray-200 rounded-lg animate-pulse"></div>
            <div className="w-28 h-10 bg-gray-200 rounded-lg animate-pulse"></div>
            <div className="w-36 h-10 bg-gray-200 rounded-lg animate-pulse"></div>
            <div className="w-30 h-10 bg-gray-200 rounded-lg animate-pulse"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
