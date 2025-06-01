
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { MatchScoreRing } from "@/components/ui/match-score-ring";
import { CardSkeleton, LoadingSkeleton } from "@/components/ui/loading-skeleton";
import { Search, Filter, Star, MapPin, Briefcase, Mail, Eye, Users, TrendingUp, Clock, Zap, Target } from 'lucide-react';

interface RecruiterDashboardProps {
  onBack: () => void;
}

const RecruiterDashboard: React.FC<RecruiterDashboardProps> = ({ onBack }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCandidate, setSelectedCandidate] = useState<number | null>(null);
  const [showOutreach, setShowOutreach] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [activeFilters, setActiveFilters] = useState<string[]>(['AI/ML', '5+ years', 'San Francisco']);

  const candidates = [
    {
      id: 1,
      name: 'Sarah Chen',
      title: 'Senior ML Engineer',
      location: 'Seattle, WA',
      experience: '6 years',
      skills: ['Python', 'TensorFlow', 'AWS', 'Deep Learning', 'MLOps'],
      matchScore: 95,
      avatar: 'SC',
      company: 'Microsoft',
      summary: 'Built production ML systems serving millions of users. Expert in deep learning and computer vision.'
    },
    {
      id: 2,
      name: 'Marcus Johnson',
      title: 'AI Research Scientist',
      location: 'Boston, MA',
      experience: '8 years',
      skills: ['PyTorch', 'NLP', 'Computer Vision', 'Research', 'Publications'],
      matchScore: 88,
      avatar: 'MJ',
      company: 'MIT',
      summary: 'PhD in AI with 20+ publications. Specializes in natural language processing and multimodal AI.'
    },
    {
      id: 3,
      name: 'Elena Rodriguez',
      title: 'Principal Data Scientist',
      location: 'Austin, TX',
      experience: '7 years',
      skills: ['R', 'Python', 'Statistics', 'ML', 'Leadership'],
      matchScore: 82,
      avatar: 'ER',
      company: 'Meta',
      summary: 'Led data science teams building recommendation systems. Strong background in statistical modeling.'
    },
    {
      id: 4,
      name: 'David Kim',
      title: 'ML Infrastructure Engineer',
      location: 'San Francisco, CA',
      experience: '5 years',
      skills: ['Kubernetes', 'MLOps', 'Python', 'AWS', 'Docker'],
      matchScore: 79,
      avatar: 'DK',
      company: 'Uber',
      summary: 'Specialized in scaling ML infrastructure. Built systems handling billions of predictions daily.'
    }
  ];

  const handleSearch = async () => {
    setIsSearching(true);
    setSearchResults([]);
    
    // Simulate API call
    setTimeout(() => {
      setSearchResults(candidates);
      setIsSearching(false);
    }, 2000);
  };

  const handleViewProfile = (candidateId: number) => {
    setSelectedCandidate(candidateId);
  };

  const handleSendOutreach = () => {
    setShowOutreach(false);
    // Trigger confetti animation
    const confettiDiv = document.createElement('div');
    confettiDiv.className = 'confetti-animation fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl z-50';
    confettiDiv.innerHTML = '🎉';
    document.body.appendChild(confettiDiv);
    setTimeout(() => document.body.removeChild(confettiDiv), 800);
    
    alert('Message sent successfully! 🎉');
  };

  const removeFilter = (filter: string) => {
    setActiveFilters(prev => prev.filter(f => f !== filter));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-orange-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 max-w-7xl">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={onBack} className="text-gray-600 hover:text-gray-900">
                ← Back
              </Button>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-orange-500 rounded-lg"></div>
                <span className="text-xl font-bold text-gray-900">HireAI Copilot</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100 px-3 py-1">
                <Star className="w-3 h-3 mr-1" />
                Recruiter Pro
              </Badge>
              <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">RH</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">AI Talent Search</h1>
          <p className="text-xl text-gray-600">Find and connect with top AI professionals using natural language</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Search and Results */}
          <div className="lg:col-span-3">
            {/* Search Bar */}
            <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm mb-8 hover-lift">
              <CardContent className="p-8">
                <div className="flex space-x-4 mb-6">
                  <div className="flex-1 relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                    <Input
                      placeholder="Find senior Gen-AI engineers in San Francisco with computer vision experience..."
                      className="pl-12 h-14 rounded-2xl border-gray-200 focus:border-orange-500 focus:ring-orange-500 text-lg"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                    />
                  </div>
                  <Button 
                    onClick={handleSearch}
                    disabled={isSearching}
                    className="h-14 px-8 bg-orange-600 hover:bg-orange-700 rounded-2xl text-lg font-semibold card-interactive"
                  >
                    {isSearching ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Searching...
                      </>
                    ) : (
                      <>
                        <Search className="w-5 h-5 mr-2" />
                        Search
                      </>
                    )}
                  </Button>
                </div>
                
                {/* Active Filter Chips */}
                <div className="flex flex-wrap gap-3">
                  {activeFilters.map((filter, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="bg-indigo-100 text-indigo-800 hover:bg-indigo-100 px-4 py-2 text-sm cursor-pointer"
                      onClick={() => removeFilter(filter)}
                    >
                      Skills: {filter}
                      <span className="ml-2 text-indigo-600">×</span>
                    </Badge>
                  ))}
                  <Button variant="ghost" size="sm" className="h-8 px-3 text-gray-500 hover:text-gray-700">
                    <Filter className="w-4 h-4 mr-1" />
                    More filters
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Results */}
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold text-gray-900">
                  {isSearching ? 'Searching...' : `${candidates.length} candidates found`}
                </h2>
                <div className="flex space-x-3">
                  <Button variant="outline" size="sm" className="rounded-xl">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Relevance
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-xl">
                    <Clock className="w-4 h-4 mr-2" />
                    Recent
                  </Button>
                </div>
              </div>

              {/* Loading State */}
              {isSearching && (
                <div className="space-y-4">
                  {[...Array(3)].map((_, i) => (
                    <CardSkeleton key={i} />
                  ))}
                </div>
              )}

              {/* Results List */}
              {!isSearching && searchResults.length > 0 && searchResults.map((candidate) => (
                <Card key={candidate.id} className="shadow-lg border-0 bg-white/80 backdrop-blur-sm hover-lift">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="w-20 h-20 bg-indigo-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xl font-bold">{candidate.avatar}</span>
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-2xl font-semibold text-gray-900">{candidate.name}</h3>
                            <p className="text-indigo-600 font-semibold text-lg">{candidate.title}</p>
                            <p className="text-gray-500 text-sm">{candidate.company}</p>
                            <div className="flex items-center space-x-6 mt-3 text-gray-600">
                              <div className="flex items-center space-x-2">
                                <MapPin className="w-5 h-5" />
                                <span>{candidate.location}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Briefcase className="w-5 h-5" />
                                <span>{candidate.experience}</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="text-right">
                            <div className="flex items-center space-x-3 mb-3">
                              <span className="text-sm text-gray-600 font-medium">Match Score</span>
                              <MatchScoreRing score={candidate.matchScore} size="lg" />
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 mb-4 leading-relaxed">{candidate.summary}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-6">
                          {candidate.skills.map((skill) => (
                            <Badge key={skill} variant="secondary" className="bg-gray-100 text-gray-800 hover:bg-gray-100">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="flex space-x-4">
                          <Button 
                            variant="outline" 
                            className="rounded-xl card-interactive"
                            onClick={() => handleViewProfile(candidate.id)}
                          >
                            <Eye className="w-4 h-4 mr-2" />
                            View Profile
                          </Button>
                          <Button 
                            className="bg-orange-600 hover:bg-orange-700 rounded-xl card-interactive"
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

              {/* Default state */}
              {!isSearching && searchResults.length === 0 && (
                <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm text-center p-12">
                  <div className="w-20 h-20 bg-gray-100 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                    <Search className="w-10 h-10 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Start Your Search</h3>
                  <p className="text-gray-600 mb-6">Use natural language to find AI talent. Try: "Senior ML engineers with 5+ years experience in computer vision"</p>
                  <Button onClick={handleSearch} className="bg-orange-600 hover:bg-orange-700 rounded-xl">
                    <Zap className="w-4 h-4 mr-2" />
                    Try Sample Search
                  </Button>
                </Card>
              )}
            </div>
          </div>

          {/* Analytics Sidebar */}
          <div className="space-y-6">
            <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm hover-lift">
              <CardHeader>
                <CardTitle className="text-lg flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-orange-500" />
                  <span>Search Analytics</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Match Quality</span>
                    <span className="font-semibold text-green-600">Excellent</span>
                  </div>
                  <Progress value={88} className="h-3" />
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="text-2xl font-bold text-gray-900">156</div>
                    <div className="text-xs text-gray-600">Total Results</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="text-2xl font-bold text-gray-900">23</div>
                    <div className="text-xs text-gray-600">High Matches</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm hover-lift">
              <CardHeader>
                <CardTitle className="text-lg flex items-center space-x-2">
                  <Users className="w-5 h-5 text-orange-500" />
                  <span>Diversity Insights</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Gender Balance</span>
                  <span className="font-medium">52% / 48%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Geographic Spread</span>
                  <span className="font-medium">8 cities</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Experience Range</span>
                  <span className="font-medium">2-15 years</span>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm hover-lift">
              <CardHeader>
                <CardTitle className="text-lg flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-orange-500" />
                  <span>Recent Activity</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600 text-sm">5 new matches today</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-600 text-sm">Sarah Chen viewed your outreach</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-600 text-sm">3 responses to outreach</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-600 text-sm">Marcus Johnson available for call</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Outreach Modal */}
      {showOutreach && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-2xl shadow-2xl border-0 bg-white">
            <CardHeader>
              <CardTitle className="text-2xl">Send Outreach Message</CardTitle>
              <CardDescription className="text-lg">AI-generated personalized message</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-start space-x-3 mb-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">AI-Generated Message</h4>
                    <p className="text-sm text-gray-600">Personalized based on candidate profile</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Hi Sarah! I came across your profile and was impressed by your expertise in TensorFlow and deep learning, 
                  particularly your work on production ML systems at Microsoft. We have an exciting Senior ML Engineer role 
                  at our innovative AI startup that aligns perfectly with your background in computer vision and MLOps. 
                  Would you be open to a brief conversation about this opportunity? The role offers significant technical 
                  leadership opportunities and competitive compensation.
                </p>
              </div>
              
              <div className="space-y-3">
                <label className="text-sm font-medium text-gray-700">Choose outreach channel:</label>
                <div className="grid grid-cols-3 gap-3">
                  <Button variant="outline" className="h-12 rounded-xl">
                    <Mail className="w-4 h-4 mr-2" />
                    Portal DM
                  </Button>
                  <Button variant="outline" className="h-12 rounded-xl">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </Button>
                  <Button variant="outline" className="h-12 rounded-xl">
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </Button>
                </div>
              </div>
              
              <div className="flex space-x-4 pt-4">
                <Button variant="outline" className="flex-1 h-12 rounded-xl" onClick={() => setShowOutreach(false)}>
                  Cancel
                </Button>
                <Button 
                  className="flex-1 h-12 bg-orange-600 hover:bg-orange-700 rounded-xl font-semibold"
                  onClick={handleSendOutreach}
                >
                  <Mail className="w-4 h-4 mr-2" />
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
