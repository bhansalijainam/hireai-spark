
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  Users, 
  Clock, 
  Target, 
  ArrowUp, 
  ArrowDown,
  Calendar,
  Filter,
  Download
} from 'lucide-react';

interface AnalyticsDashboardProps {
  onBack: () => void;
}

const AnalyticsDashboard: React.FC<AnalyticsDashboardProps> = ({ onBack }) => {
  const [timeRange, setTimeRange] = useState('30d');

  const metrics = [
    {
      title: 'Avg. Time-to-Contact',
      value: '2.4 days',
      change: '-12%',
      trend: 'down',
      icon: Clock,
      color: 'green'
    },
    {
      title: 'Response Rate',
      value: '68%',
      change: '+15%',
      trend: 'up',
      icon: TrendingUp,
      color: 'blue'
    },
    {
      title: 'Active Candidates',
      value: '1,247',
      change: '+23%',
      trend: 'up',
      icon: Users,
      color: 'purple'
    },
    {
      title: 'Successful Hires',
      value: '34',
      change: '+8%',
      trend: 'up',
      icon: Target,
      color: 'orange'
    }
  ];

  const funnelData = [
    { stage: 'Candidates Uploaded', count: 1247, percentage: 100 },
    { stage: 'Profiles Screened', count: 892, percentage: 72 },
    { stage: 'Contacted by Recruiters', count: 456, percentage: 37 },
    { stage: 'Initial Interviews', count: 189, percentage: 15 },
    { stage: 'Final Interviews', count: 67, percentage: 5 },
    { stage: 'Offers Made', count: 34, percentage: 3 }
  ];

  const topSkills = [
    { skill: 'Machine Learning', searches: 245, growth: '+23%' },
    { skill: 'Python', searches: 198, growth: '+18%' },
    { skill: 'Deep Learning', searches: 167, growth: '+15%' },
    { skill: 'Computer Vision', searches: 143, growth: '+28%' },
    { skill: 'NLP', searches: 128, growth: '+31%' },
    { skill: 'PyTorch', searches: 112, growth: '+19%' },
    { skill: 'TensorFlow', searches: 98, growth: '+12%' },
    { skill: 'MLOps', searches: 87, growth: '+42%' }
  ];

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
                <span className="text-xl font-bold text-gray-900">Analytics Dashboard</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex bg-gray-100 rounded-xl p-1">
                {['7d', '30d', '90d'].map((range) => (
                  <Button
                    key={range}
                    variant={timeRange === range ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setTimeRange(range)}
                    className="rounded-lg"
                  >
                    {range}
                  </Button>
                ))}
              </div>
              <Button variant="outline" className="rounded-xl">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Analytics Dashboard</h1>
          <p className="text-xl text-gray-600">Track hiring performance and talent insights</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <Card key={index} className="shadow-lg border-0 bg-white/80 backdrop-blur-sm hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    metric.color === 'green' ? 'bg-green-100' :
                    metric.color === 'blue' ? 'bg-blue-100' :
                    metric.color === 'purple' ? 'bg-purple-100' : 'bg-orange-100'
                  }`}>
                    <metric.icon className={`w-6 h-6 ${
                      metric.color === 'green' ? 'text-green-600' :
                      metric.color === 'blue' ? 'text-blue-600' :
                      metric.color === 'purple' ? 'text-purple-600' : 'text-orange-600'
                    }`} />
                  </div>
                  <div className={`flex items-center space-x-1 ${
                    metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {metric.trend === 'up' ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
                    <span className="text-sm font-medium">{metric.change}</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold text-gray-900">{metric.value}</h3>
                  <p className="text-gray-600 text-sm">{metric.title}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Candidate Funnel */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm hover-lift mb-8">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center space-x-2">
                  <TrendingUp className="w-6 h-6 text-indigo-600" />
                  <span>Candidate Funnel</span>
                </CardTitle>
                <CardDescription className="text-lg">
                  Track candidates through the hiring process
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {funnelData.map((stage, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900">{stage.stage}</span>
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl font-bold text-gray-900">{stage.count}</span>
                        <span className="text-sm text-gray-600">({stage.percentage}%)</span>
                      </div>
                    </div>
                    <Progress value={stage.percentage} className="h-3" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Hires Chart */}
            <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm hover-lift">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center space-x-2">
                  <Calendar className="w-6 h-6 text-indigo-600" />
                  <span>Hires Over Time</span>
                </CardTitle>
                <CardDescription className="text-lg">
                  Monthly hiring trends and projections
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Simplified chart representation */}
                <div className="h-64 bg-gradient-to-r from-indigo-100 to-orange-100 rounded-xl flex items-end justify-center p-8">
                  <div className="flex items-end space-x-4 h-full">
                    {[12, 18, 15, 22, 28, 34, 41, 38].map((value, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <div 
                          className="bg-gradient-to-t from-indigo-600 to-orange-500 rounded-t-lg w-8"
                          style={{ height: `${(value / 41) * 100}%` }}
                        ></div>
                        <span className="text-xs text-gray-600 mt-2">
                          {new Date(2024, index).toLocaleDateString('en', { month: 'short' })}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Top Skills */}
          <div>
            <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm hover-lift">
              <CardHeader>
                <CardTitle className="text-xl flex items-center space-x-2">
                  <Target className="w-5 h-5 text-orange-500" />
                  <span>Top Searched Skills</span>
                </CardTitle>
                <CardDescription>
                  Most in-demand skills this week
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {topSkills.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                        <span className="text-indigo-600 font-bold text-sm">{index + 1}</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{item.skill}</p>
                        <p className="text-sm text-gray-600">{item.searches} searches</p>
                      </div>
                    </div>
                    <Badge 
                      variant="secondary" 
                      className="bg-green-100 text-green-800 hover:bg-green-100"
                    >
                      {item.growth}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AnalyticsDashboard;
