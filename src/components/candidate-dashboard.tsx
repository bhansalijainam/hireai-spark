
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { LoadingSkeleton } from "@/components/ui/loading-skeleton";
import { Upload, CheckCircle, Edit, FileText, MapPin, Briefcase, GraduationCap, Star, Eye, TrendingUp } from 'lucide-react';

interface CandidateDashboardProps {
  onBack: () => void;
}

const CandidateDashboard: React.FC<CandidateDashboardProps> = ({ onBack }) => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploaded, setIsUploaded] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileUpload = async () => {
    setIsUploading(true);
    setUploadProgress(0);
    
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploaded(true);
          setIsUploading(false);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    handleFileUpload();
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
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                <CheckCircle className="w-3 h-3 mr-1" />
                Profile Active
              </Badge>
              <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">JD</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Welcome back, John!</h1>
          <p className="text-xl text-gray-600">Manage your profile and track your opportunities</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Upload Section */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm mb-8 hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-2xl">
                  <Upload className="w-6 h-6 text-indigo-600" />
                  <span>Resume Upload</span>
                </CardTitle>
                <CardDescription className="text-lg">
                  Upload your latest resume to get discovered by top recruiters
                </CardDescription>
              </CardHeader>
              <CardContent>
                {!isUploaded ? (
                  <div
                    className={`border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 ${
                      isDragOver 
                        ? 'border-indigo-500 bg-indigo-50 scale-105' 
                        : 'border-gray-300 hover:border-indigo-400 hover:bg-gray-50'
                    }`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                  >
                    <div className="w-20 h-20 bg-indigo-100 rounded-3xl mx-auto mb-6 flex items-center justify-center">
                      <Upload className="w-10 h-10 text-indigo-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                      Drop your resume here, or click to browse
                    </h3>
                    <p className="text-gray-600 mb-8 text-lg">
                      Supports PDF, DOC, DOCX files up to 10MB
                    </p>
                    <Button 
                      onClick={handleFileUpload}
                      disabled={isUploading}
                      className="bg-indigo-600 hover:bg-indigo-700 rounded-xl px-12 h-12 text-lg card-interactive"
                    >
                      {isUploading ? 'Processing...' : 'Choose File'}
                    </Button>
                    {uploadProgress > 0 && uploadProgress < 100 && (
                      <div className="mt-8">
                        <Progress value={uploadProgress} className="h-3 mb-3" />
                        <p className="text-sm text-gray-600">Uploading and parsing... {uploadProgress}%</p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="bg-green-50 border border-green-200 rounded-2xl p-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                      <div>
                        <h3 className="text-xl font-semibold text-green-900">Resume Successfully Uploaded!</h3>
                        <p className="text-green-700">resume_john_doe.pdf • AI parsing complete</p>
                      </div>
                    </div>
                    <div className="flex space-x-3">
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100 text-sm px-3 py-1">
                        ✅ Resume Verified
                      </Badge>
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 text-sm px-3 py-1">
                        🎯 Skills Extracted
                      </Badge>
                      <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100 text-sm px-3 py-1">
                        📊 Profile Optimized
                      </Badge>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Resume Preview */}
            {isUploaded && (
              <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm hover-lift">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="flex items-center space-x-3 text-2xl">
                      <FileText className="w-6 h-6 text-indigo-600" />
                      <span>Resume Preview</span>
                    </CardTitle>
                    <Button variant="outline" className="rounded-xl card-interactive">
                      <Edit className="w-4 h-4 mr-2" />
                      Edit Profile
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    {/* Basic Info */}
                    <div className="flex items-start space-x-6">
                      <div className="w-20 h-20 bg-indigo-600 rounded-2xl flex items-center justify-center">
                        <span className="text-white text-2xl font-bold">JD</span>
                      </div>
                      <div className="flex-1">
                        <h2 className="text-3xl font-bold text-gray-900">John Doe</h2>
                        <p className="text-indigo-600 font-semibold text-xl">Senior AI Engineer</p>
                        <div className="flex items-center space-x-6 mt-3 text-gray-600">
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-5 h-5" />
                            <span>San Francisco, CA</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Briefcase className="w-5 h-5" />
                            <span>5+ years experience</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Skills */}
                    <div>
                      <h3 className="font-bold text-gray-900 mb-4 flex items-center space-x-2 text-xl">
                        <Star className="w-5 h-5 text-orange-500" />
                        <span>Top Skills</span>
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {['Machine Learning', 'Python', 'TensorFlow', 'PyTorch', 'Deep Learning', 'NLP', 'Computer Vision', 'AWS', 'MLOps', 'Data Science'].map((skill) => (
                          <Badge key={skill} variant="secondary" className="bg-indigo-100 text-indigo-800 hover:bg-indigo-100 px-3 py-1">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Experience */}
                    <div>
                      <h3 className="font-bold text-gray-900 mb-4 flex items-center space-x-2 text-xl">
                        <Briefcase className="w-5 h-5 text-orange-500" />
                        <span>Recent Experience</span>
                      </h3>
                      <div className="space-y-4">
                        <div className="border-l-4 border-indigo-200 pl-6">
                          <h4 className="font-semibold text-gray-900 text-lg">Senior AI Engineer</h4>
                          <p className="text-indigo-600 font-medium">TechCorp • 2021 - Present</p>
                          <p className="text-gray-600 mt-2">
                            Led development of ML models for recommendation systems, improving user engagement by 35%. 
                            Managed team of 4 engineers and deployed models serving 1M+ daily users.
                          </p>
                        </div>
                        <div className="border-l-4 border-gray-200 pl-6">
                          <h4 className="font-semibold text-gray-900 text-lg">ML Engineer</h4>
                          <p className="text-gray-600 font-medium">DataInc • 2019 - 2021</p>
                          <p className="text-gray-600 mt-2">
                            Built and deployed computer vision models for autonomous vehicle perception.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Education */}
                    <div>
                      <h3 className="font-bold text-gray-900 mb-4 flex items-center space-x-2 text-xl">
                        <GraduationCap className="w-5 h-5 text-orange-500" />
                        <span>Education</span>
                      </h3>
                      <div className="border-l-4 border-indigo-200 pl-6">
                        <h4 className="font-semibold text-gray-900 text-lg">M.S. Computer Science</h4>
                        <p className="text-indigo-600 font-medium">Stanford University • 2019</p>
                        <p className="text-gray-600 mt-1">Specialization in Machine Learning and AI</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Stats Sidebar */}
          <div className="space-y-6">
            <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm hover-lift">
              <CardHeader>
                <CardTitle className="text-xl flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-indigo-600" />
                  <span>Profile Stats</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-indigo-600 mb-2">95%</div>
                  <div className="text-gray-600 mb-3">Profile Completeness</div>
                  <Progress value={95} className="h-3" />
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="text-2xl font-bold text-gray-900">24</div>
                    <div className="text-sm text-gray-600">Profile Views</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="text-2xl font-bold text-gray-900">7</div>
                    <div className="text-sm text-gray-600">Recruiter Contacts</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm hover-lift">
              <CardHeader>
                <CardTitle className="text-xl">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600">Resume uploaded and verified</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-600">Profile viewed by TechCorp recruiter</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-600">3 new job matches available</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-600">Received outreach from Google</span>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-0 bg-gradient-to-br from-indigo-600 to-orange-500 text-white hover-lift">
              <CardContent className="p-8 text-center">
                <Eye className="w-12 h-12 mx-auto mb-4 opacity-90" />
                <h3 className="font-bold text-xl mb-3">Ready to be discovered?</h3>
                <p className="opacity-90 mb-6 text-lg">
                  Your profile is now visible to top recruiters actively searching for AI talent
                </p>
                <Button variant="secondary" className="w-full bg-white text-indigo-600 hover:bg-gray-50 h-12 font-semibold">
                  View Public Profile
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CandidateDashboard;
