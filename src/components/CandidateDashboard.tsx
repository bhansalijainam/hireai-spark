
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Upload, CheckCircle, Edit, FileText, MapPin, Briefcase, GraduationCap, Star } from 'lucide-react';

interface CandidateDashboardProps {
  onBack: () => void;
}

const CandidateDashboard: React.FC<CandidateDashboardProps> = ({ onBack }) => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploaded, setIsUploaded] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleFileUpload = () => {
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploaded(true);
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
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                <CheckCircle className="w-3 h-3 mr-1" />
                Profile Active
              </Badge>
              <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">JD</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, John!</h1>
          <p className="text-gray-600">Manage your profile and track your opportunities</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Upload Section */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm mb-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Upload className="w-5 h-5 text-indigo-600" />
                  <span>Resume Upload</span>
                </CardTitle>
                <CardDescription>
                  Upload your latest resume to get discovered by top recruiters
                </CardDescription>
              </CardHeader>
              <CardContent>
                {!isUploaded ? (
                  <div
                    className={`border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 ${
                      isDragOver 
                        ? 'border-indigo-500 bg-indigo-50' 
                        : 'border-gray-300 hover:border-indigo-400'
                    }`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                  >
                    <div className="w-16 h-16 bg-indigo-100 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                      <Upload className="w-8 h-8 text-indigo-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Drop your resume here, or click to browse
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Supports PDF, DOC, DOCX files up to 10MB
                    </p>
                    <Button 
                      onClick={handleFileUpload}
                      className="bg-indigo-600 hover:bg-indigo-700 rounded-xl px-8"
                    >
                      Choose File
                    </Button>
                    {uploadProgress > 0 && uploadProgress < 100 && (
                      <div className="mt-6">
                        <Progress value={uploadProgress} className="h-2" />
                        <p className="text-sm text-gray-600 mt-2">Uploading... {uploadProgress}%</p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                      <div>
                        <h3 className="font-semibold text-green-900">Resume Successfully Uploaded!</h3>
                        <p className="text-green-700 text-sm">resume_john_doe.pdf</p>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                      ✅ Résumé Verified
                    </Badge>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Resume Preview */}
            {isUploaded && (
              <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="flex items-center space-x-2">
                      <FileText className="w-5 h-5 text-indigo-600" />
                      <span>Resume Preview</span>
                    </CardTitle>
                    <Button variant="outline" className="rounded-xl">
                      <Edit className="w-4 h-4 mr-2" />
                      Edit Profile
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Basic Info */}
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-indigo-600 rounded-xl flex items-center justify-center">
                        <span className="text-white text-lg font-bold">JD</span>
                      </div>
                      <div className="flex-1">
                        <h2 className="text-xl font-bold text-gray-900">John Doe</h2>
                        <p className="text-indigo-600 font-medium">Senior AI Engineer</p>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>San Francisco, CA</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Briefcase className="w-4 h-4" />
                            <span>5+ years experience</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Skills */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                        <Star className="w-4 h-4 text-orange-500" />
                        <span>Top Skills</span>
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {['Machine Learning', 'Python', 'TensorFlow', 'PyTorch', 'Deep Learning', 'NLP', 'Computer Vision', 'AWS'].map((skill) => (
                          <Badge key={skill} variant="secondary" className="bg-indigo-100 text-indigo-800 hover:bg-indigo-100">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Experience */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                        <Briefcase className="w-4 h-4 text-orange-500" />
                        <span>Recent Experience</span>
                      </h3>
                      <div className="space-y-3">
                        <div className="border-l-2 border-indigo-200 pl-4">
                          <h4 className="font-medium text-gray-900">Senior AI Engineer</h4>
                          <p className="text-indigo-600 text-sm">TechCorp • 2021 - Present</p>
                          <p className="text-gray-600 text-sm mt-1">
                            Led development of ML models for recommendation systems, improving user engagement by 35%
                          </p>
                        </div>
                        <div className="border-l-2 border-gray-200 pl-4">
                          <h4 className="font-medium text-gray-900">ML Engineer</h4>
                          <p className="text-gray-600 text-sm">DataInc • 2019 - 2021</p>
                        </div>
                      </div>
                    </div>

                    {/* Education */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                        <GraduationCap className="w-4 h-4 text-orange-500" />
                        <span>Education</span>
                      </h3>
                      <div className="border-l-2 border-indigo-200 pl-4">
                        <h4 className="font-medium text-gray-900">M.S. Computer Science</h4>
                        <p className="text-indigo-600 text-sm">Stanford University • 2019</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Stats Sidebar */}
          <div className="space-y-6">
            <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">Profile Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-600">95%</div>
                  <div className="text-sm text-gray-600">Profile Completeness</div>
                  <Progress value={95} className="mt-2 h-2" />
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-xl font-bold text-gray-900">12</div>
                    <div className="text-xs text-gray-600">Profile Views</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-gray-900">3</div>
                    <div className="text-xs text-gray-600">Recruiter Contacts</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600">Resume uploaded</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-600">Profile viewed by TechCorp</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-600">New match available</span>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-0 bg-gradient-to-br from-indigo-600 to-orange-500 text-white">
              <CardContent className="p-6 text-center">
                <h3 className="font-bold mb-2">Ready to be discovered?</h3>
                <p className="text-sm opacity-90 mb-4">
                  Your profile is now visible to recruiters
                </p>
                <Button variant="secondary" className="w-full bg-white text-indigo-600 hover:bg-gray-50">
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
