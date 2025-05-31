
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Search, Filter, Star, MapPin, Briefcase, Mail, Eye, Users, TrendingUp, Clock } from 'lucide-react';

interface RecruiterDashboardProps {
  onBack: () => void;
}

const RecruiterDashboard: React.FC<RecruiterDashboardProps> = ({ onBack }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCandidate, setSelectedCandidate] = useState<number | null>(null);
  const [showOutreach, setShowOutreach] = useState(false);

  const candidates = [
    {
      id: 1,
      name: 'Sarah Chen',
      title: 'Senior ML Engineer',
      location: 'Seattle, WA',
      experience: '6 years',
      skills: ['Python', 'TensorFlow', 'AWS', 'Deep Learning'],
      matchScore: 95,
      avatar: 'SC'
    },
    {
      id: 2,
      name: 'Marcus Johnson',
      title: 'AI Research Scientist',
      location: 'Boston, MA',
      experience: '8 years',
      skills: ['PyTorch', 'NLP', 'Computer Vision', 'Research'],
      matchScore: 88,
      avatar: 'MJ'
    },
    {
      id: 3,
      name: 'Elena Rodriguez',
      title: 'Data Scientist',
      location: 'Austin, TX',
      experience: '4 years',
      skills: ['R', 'Python', 'Statistics', 'ML'],
      matchScore: 82,
      avatar: 'ER'
    }
  ];

  const handleSearch = () => {
    console.log('Searching for:', searchQuery);
  };

  const handleViewProfile = (candidateId: number) => {
    setSelectedCandidate(candidateId);
  };

  const handleSendOutreach = () => {
    setShowOutreach(false);
    // Confetti animation would trigger here
    alert('Message sent successfully! 🎉');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-orange-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={onBack} className="text-gray-600 hover:text-gray-900">
                ← Back
              </Button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-orange-500 rounded-lg"></div>
                <span className="text-xl font-bold text-gray-900">HireAI Copilot</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">
                Recruiter Pro
              </Badge>
              <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">RH</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Talent Search</h1>
          <p className="text-gray-600">Find and connect with top AI professionals</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Search and Results */}
          <div className="lg:col-span-3">
            {/* Search Bar */}
            <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm mb-6">
              <CardContent className="p-6">
                <div className="flex space-x-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      placeholder="Find senior Gen-AI engineers in San Francisco..."
                      className="pl-10 h-12 rounded-xl border-gray-200 focus:border-orange-500 focus:ring-orange-500"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                    />
                  </div>
                  <Button 
                    onClick={handleSearch}
                    className="h-12 px-8 bg-orange-600 hover:bg-orange-700 rounded-xl"
                  >
                    Search
                  </Button>
                </div>
                
                {/* Filter Chips */}
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary" className="bg-indigo-100 text-indigo-800 hover:bg-indigo-100">
                    Skills: AI/ML
                  </Badge>
                  <Badge variant="secondary" className="bg-indigo-100 text-indigo-800 hover:bg-indigo-100">
                    Experience: 5+ years
                  </Badge>
                  <Badge variant="secondary" className="bg-indigo-100 text-indigo-800 hover:bg-indigo-100">
                    Location: San Francisco
                  </Badge>
                  <Button variant="ghost" size="sm" className="h-6 px-2 text-gray-500">
                    <Filter className="w-3 h-3 mr-1" />
                    More filters
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Results */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-900">
                  {candidates.length} candidates found
                </h2>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="rounded-lg">
                    Relevance
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-lg">
                    Experience
                  </Button>
                </div>
              </div>

              {candidates.map((candidate) => (
                <Card key={candidate.id} className="shadow-lg border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-indigo-600 rounded-xl flex items-center justify-center">
                        <span className="text-white text-lg font-bold">{candidate.avatar}</span>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">{candidate.name}</h3>
                            <p className="text-indigo-600 font-medium">{candidate.title}</p>
                            <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                              <div className="flex items-center space-x-1">
                                <MapPin className="w-4 h-4" />
                                <span>{candidate.location}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Briefcase className="w-4 h-4" />
                                <span>{candidate.experience}</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="text-right">
                            <div className="flex items-center space-x-2 mb-2">
                              <span className="text-sm text-gray-600">Match Score</span>
                              <div className="relative w-12 h-12">
                                <Progress 
                                  value={candidate.matchScore} 
                                  className="w-12 h-12 rounded-full [&>div]:rounded-full"
                                />
                                <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-indigo-600">
                                  {candidate.matchScore}%
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mt-3">
                          {candidate.skills.map((skill) => (
                            <Badge key={skill} variant="secondary" className="bg-gray-100 text-gray-800 hover:bg-gray-100">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="flex space-x-3 mt-4">
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="rounded-lg"
                            onClick={() => handleViewProfile(candidate.id)}
                          >
                            <Eye className="w-4 h-4 mr-2" />
                            View Profile
                          </Button>
                          <Button 
                            size="sm" 
                            className="bg-orange-600 hover:bg-orange-700 rounded-lg"
                            onClick={() => setShowOutreach(true)}
                          >
                            <Mail className="w-4 h-4 mr-2" />
                            Send Outreach
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Analytics Sidebar */}
          <div className="space-y-6">
            <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-orange-500" />
                  <span>Search Analytics</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Match Quality</span>
                    <span className="font-medium">Excellent</span>
                  </div>
                  <Progress value={88} className="h-2" />
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-xl font-bold text-gray-900">156</div>
                    <div className="text-xs text-gray-600">Total Results</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-gray-900">23</div>
                    <div className="text-xs text-gray-600">High Matches</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg flex items-center space-x-2">
                  <Users className="w-5 h-5 text-orange-500" />
                  <span>Diversity Mix</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Gender Balance</span>
                  <span className="font-medium">52% / 48%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Geographic Spread</span>
                  <span className="font-medium">8 cities</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Experience Range</span>
                  <span className="font-medium">2-15 years</span>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-orange-500" />
                  <span>Recent Activity</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600">3 new matches today</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-600">Sarah Chen viewed profile</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-600">2 outreach responses</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Outreach Modal */}
      {showOutreach && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-md shadow-2xl border-0 bg-white">
            <CardHeader>
              <CardTitle>Send Outreach Message</CardTitle>
              <CardDescription>AI-generated personalized message</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  Hi Sarah! I came across your profile and was impressed by your expertise in TensorFlow and deep learning. 
                  We have an exciting Senior ML Engineer role at TechCorp that aligns perfectly with your background. 
                  Would you be open to a brief conversation about this opportunity?
                </p>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Send via:</label>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    Portal DM
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    LinkedIn
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    Email
                  </Button>
                </div>
              </div>
              
              <div className="flex space-x-3 pt-4">
                <Button variant="outline" className="flex-1" onClick={() => setShowOutreach(false)}>
                  Cancel
                </Button>
                <Button 
                  className="flex-1 bg-orange-600 hover:bg-orange-700"
                  onClick={handleSendOutreach}
                >
                  Send Message
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default RecruiterDashboard;
