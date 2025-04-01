import React from 'react';
import { BarChart as LucideBarChart, Users, FileText, CheckCircle, Sparkles, UserCheck, FileSearch, MessageSquare, Award } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import chatGPTLogo from "./assets/ChatGPT-Logo.png";
import deepseekLogo from "./assets/deepseek-logo-03.png";
import MetaLogo from "./assets/Meta-ai-logo.png";
import GeminiLogo from "./assets/Gemini-Icon-300x300.png.webp";
import GrokLogo from "./assets/grok-logo-png_seeklogo-613403.png";


const RecruitIQHomepage = () => {
  const companies = [
    { name: 'Microsoft' },
    { name: 'Google' },
    { name: 'Amazon' },
    { name: 'Meta' },
    { name: 'Apple' }
  ];

  // Sample analytics data for the dashboard
  const analyticsData = [
    { month: 'Jan', applicants: 120, hires: 12, interviews: 45 },
    { month: 'Feb', applicants: 150, hires: 15, interviews: 60 },
    { month: 'Mar', applicants: 180, hires: 18, interviews: 70 },
    { month: 'Apr', applicants: 210, hires: 21, interviews: 85 },
    { month: 'May', applicants: 240, hires: 24, interviews: 95 },
    { month: 'Jun', applicants: 270, hires: 27, interviews: 110 }
  ];

  // Recruitment process steps
  const recruitmentSteps = [
    { icon: FileSearch, color: '#4F46E5', title: 'CV Screening', description: 'AI-powered resume analysis' },
    { icon: MessageSquare, color: '#10B981', title: 'Initial Interview', description: 'Automated scheduling' },
    { icon: UserCheck, color: '#F59E0B', title: 'Skills Assessment', description: 'Custom AI evaluations' },
    { icon: Award, color: '#EF4444', title: 'Final Decision', description: 'Data-driven hiring' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-xl font-bold text-blue-600">RecruitIQ</div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#platform" className="text-gray-600 hover:text-blue-600 transition-colors">Platform</a>
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact us</a>
          </nav>
          <div className="flex gap-4">
            <button className="px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors">
              Login
            </button>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-medium">
              Sign up for free
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-16">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Amplify your recruitment process
            </span>
          </h1>
          
          {/* Platform Section - With actual chart instead of placeholder */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-100 p-8 rounded-xl">
                <div className="mb-4">
                  <span className="text-xs uppercase font-medium text-gray-500">PLATFORM</span>
                </div>
                <h3 className="text-2xl font-bold mb-8 text-center md:text-left">Driving more traffic and expanding your audience reach.</h3>
                <div className="relative h-64 border rounded-lg bg-white p-4">
                  <div className="text-center mb-2 font-medium text-gray-700">Dashboard Analytics</div>
                  <ResponsiveContainer width="100%" height="85%">
                    <BarChart data={analyticsData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="applicants" fill="#4F46E5" name="Applicants" />
                      <Bar dataKey="interviews" fill="#10B981" name="Interviews" />
                      <Bar dataKey="hires" fill="#F59E0B" name="Hires" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              <div className="flex flex-col gap-6">
                <div className="bg-gray-200 p-6 rounded-xl flex-1">
                  {/* Recruitment Process Visualization */}
                  <h3 className="text-lg font-medium mb-6 text-center">Recruitment process</h3>
                  <div className="flex justify-between items-center">
                    {recruitmentSteps.map((step, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <div 
                          className="w-12 h-12 rounded-full flex items-center justify-center mb-2" 
                          style={{ backgroundColor: `${step.color}20` }}
                        >
                          <step.icon size={24} style={{ color: step.color }} />
                        </div>
                        <div className="text-xs font-medium text-center">{step.title}</div>
                        <div className="text-xs text-gray-500 text-center mt-1 max-w-16">{step.description}</div>
                      </div>
                    ))}
                  </div>
                  {/* Arrow connections between steps */}
                  <div className="relative h-1 flex justify-center mt-4">
                    <div className="absolute top-1/2 left-1/4 w-1/2 h-px bg-gray-300 -translate-y-1/2"></div>
                  </div>
                </div>
                
                <div className="bg-green-100 p-6 rounded-xl flex-1">
                  <h3 className="text-lg font-medium mb-4 text-center">Take control of how AI presents your brand in major AI chatbots</h3>
                  <div className="flex mt-6 gap-4 justify-center">
                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                      <img src={chatGPTLogo} alt="AI logo" />
                    </div>
                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                      <img src={GeminiLogo} alt="AI logo" />
                    </div>
                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                      <img src={GrokLogo} alt="AI logo" />
                    </div>
                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                      <img src={MetaLogo} alt="AI logo" />
                    </div>
                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                      <img src={deepseekLogo} alt="AI logo" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-left">
              <span className="text-xs uppercase font-medium text-gray-500">FEATURES</span>
            </div>
          </div>
          
          {/* Trusted by section */}
          <div className="mb-16">
            <p className="text-gray-500 mb-6 uppercase text-sm font-medium tracking-wide">Trusted by top companies</p>
            <div className="flex justify-center flex-wrap gap-8 md:gap-16">
              {companies.map((company, index) => (
                <div key={index} className="text-gray-400 font-medium">{company.name}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="py-16 bg-white px-6" id="features">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Major AI features available</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform uses advanced AI to streamline your recruitment process
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <FileText className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold">Resume Analysis</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Extract skills, experience, and qualifications automatically from any resume format.
              </p>
              <div className="mt-8">
                <img 
                  src="/api/placeholder/500/300" 
                  alt="Resume analysis dashboard" 
                  className="rounded-lg shadow-md w-full"
                />
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Users className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold">Candidate Matching</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Automatically rank and score candidates based on job requirements and company fit.
              </p>
              <div className="mt-8">
                <img 
                  src="/api/placeholder/500/300" 
                  alt="Candidate matching interface" 
                  className="rounded-lg shadow-md w-full"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-200 rounded-xl">
              <CheckCircle className="text-green-500 mb-4" size={28} />
              <h3 className="text-lg font-semibold mb-2">Skill Identification</h3>
              <p className="text-gray-600">
                Extract and verify skills from resumes with 98% accuracy
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-xl">
              <LucideBarChart className="text-green-500 mb-4" size={28} />
              <h3 className="text-lg font-semibold mb-2">Analytics Dashboard</h3>
              <p className="text-gray-600">
                Track hiring metrics and optimize your recruitment pipeline
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-xl">
              <Sparkles className="text-green-500 mb-4" size={28} />
              <h3 className="text-lg font-semibold mb-2">AI Recommendations</h3>
              <p className="text-gray-600">
                Get personalized suggestions for interview questions and assessments
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-blue-600 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Transform your hiring process today</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of companies using RecruitIQ to find the best talent faster
          </p>
          <button className="px-8 py-3 bg-white text-blue-600 rounded-full font-medium hover:bg-gray-100 transition-colors">
            Sign up for free
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="text-lg font-bold text-blue-600 mb-4 md:mb-0">RecruitIQ</div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">We're hiring</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Help Center</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Terms</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Privacy</a>
            </div>
          </div>
          <div className="text-center text-gray-500 text-sm">
            © 2025 RecruitIQ. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RecruitIQHomepage;