import React from 'react';
import { BookOpen, Users, Clock, Award } from 'lucide-react';

const HomePage = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Comprehensive Curriculum',
      description: 'From Git basics to advanced Kubernetes deployments, covering all essential DevOps tools and practices.'
    },
    {
      icon: Users,
      title: 'Beginner to Advanced',
      description: 'Structured learning path with content tailored for all skill levels, from complete beginners to experienced professionals.'
    },
    {
      icon: Clock,
      title: 'Hands-on Practice',
      description: 'Real-world examples, code samples, and practical exercises to reinforce your learning.'
    },
    {
      icon: Award,
      title: 'Interview Ready',
      description: 'Comprehensive interview preparation with common questions, scenarios, and best practices.'
    }
  ];

  const topics = [
    'Introduction to DevOps & Lifecycle',
    'Git & GitHub Mastery',
    'CI/CD Pipeline Concepts',
    'Jenkins Automation',
    'Docker Containerization',
    'Kubernetes Orchestration',
    'Infrastructure as Code with Terraform',
    'Configuration Management with Ansible',
    'Monitoring with Prometheus & Grafana',
    'Cloud DevOps (AWS, Azure, GCP)',
    'DevOps Best Practices',
    'Interview Preparation'
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Master DevOps from 
          <span className="text-blue-600"> Zero to Hero</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Complete guide to DevOps engineering with hands-on tutorials, real-world examples, 
          and practical exercises. Learn at your own pace with our structured curriculum.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
            Start Learning Now
          </button>
          <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-semibold">
            Browse Curriculum
          </button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Icon size={24} className="text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          );
        })}
      </div>

      {/* Learning Path */}
      <div className="bg-white rounded-xl shadow-sm border p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Complete Learning Path</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {topics.map((topic, index) => (
            <div key={index} className="flex items-center p-4 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4">
                {index + 1}
              </div>
              <span className="text-gray-700 font-medium">{topic}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white p-8">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold mb-2">12+</div>
            <div className="text-blue-100">Comprehensive Topics</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">100+</div>
            <div className="text-blue-100">Practical Examples</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">50+</div>
            <div className="text-blue-100">Interview Questions</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;