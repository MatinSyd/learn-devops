import React, { useState } from 'react';
import { BookOpen, Users, Zap, Target } from 'lucide-react';

const IntroductionPage = () => {
  const [activeLevel, setActiveLevel] = useState('beginner');

  const levels = [
    { id: 'beginner', label: 'Beginner', description: 'DevOps basics' },
    { id: 'intermediate', label: 'Intermediate', description: 'Core practices' },
    { id: 'advanced', label: 'Advanced', description: 'Enterprise DevOps' }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Introduction to DevOps</h1>
        <p className="text-xl text-gray-600">
          Understanding DevOps culture, practices, and lifecycle
        </p>
      </div>

      {/* Level Selector */}
      <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg mb-8">
        {levels.map((level) => (
          <button
            key={level.id}
            onClick={() => setActiveLevel(level.id)}
            className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeLevel === level.id
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <div>{level.label}</div>
            <div className="text-xs opacity-75">{level.description}</div>
          </button>
        ))}
      </div>

      {/* Beginner Content */}
      {activeLevel === 'beginner' && (
        <div className="space-y-8">
          <section className="bg-white rounded-lg p-6 shadow-sm border">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <BookOpen className="mr-3 text-blue-600" size={24} />
              What is DevOps?
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              DevOps is a set of practices that combines software development (Dev) and IT operations (Ops). 
              It aims to shorten the systems development life cycle and provide continuous delivery with high software quality.
            </p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-blue-900 mb-2">Key Benefits</h3>
              <ul className="text-blue-800 text-sm space-y-1">
                <li>• Faster deployment and delivery</li>
                <li>• Improved collaboration between teams</li>
                <li>• Higher quality software releases</li>
                <li>• Better customer satisfaction</li>
                <li>• Increased operational efficiency</li>
              </ul>
            </div>
          </section>

          <section className="bg-white rounded-lg p-6 shadow-sm border">
            <h2 className="text-2xl font-semibold mb-4">DevOps Lifecycle</h2>
            <p className="text-gray-700 mb-6">
              The DevOps lifecycle consists of several phases that work together in a continuous loop:
            </p>

            <div className="space-y-4">
              {[
                {
                  phase: 'Plan',
                  icon: '📋',
                  description: 'Define requirements and plan the development process',
                  tools: 'Jira, Azure DevOps, Trello'
                },
                {
                  phase: 'Code',
                  icon: '💻',
                  description: 'Write and review code collaboratively',
                  tools: 'Git, GitHub, GitLab, Bitbucket'
                },
                {
                  phase: 'Build',
                  icon: '🔨',
                  description: 'Compile and package the application',
                  tools: 'Maven, Gradle, npm, Docker'
                },
                {
                  phase: 'Test',
                  icon: '🧪',
                  description: 'Automated testing to ensure quality',
                  tools: 'JUnit, Selenium, Jest, Cypress'
                },
                {
                  phase: 'Release',
                  icon: '📦',
                  description: 'Prepare for deployment with release management',
                  tools: 'Jenkins, GitLab CI, Azure Pipelines'
                },
                {
                  phase: 'Deploy',
                  icon: '🚀',
                  description: 'Deploy to production environments',
                  tools: 'Kubernetes, Docker, Ansible, Terraform'
                },
                {
                  phase: 'Operate',
                  icon: '⚙️',
                  description: 'Manage and maintain production systems',
                  tools: 'Kubernetes, Docker Swarm, AWS ECS'
                },
                {
                  phase: 'Monitor',
                  icon: '📊',
                  description: 'Monitor performance and gather feedback',
                  tools: 'Prometheus, Grafana, ELK Stack, Datadog'
                }
              ].map((phase, index) => (
                <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start">
                    <div className="text-2xl mr-4 mt-1">{phase.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">{phase.phase}</h3>
                      <p className="text-gray-700 text-sm mb-2">{phase.description}</p>
                      <div className="text-xs text-blue-600 bg-blue-50 inline-block px-2 py-1 rounded">
                        Tools: {phase.tools}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}

      {/* Intermediate and Advanced content would go here */}
      {activeLevel === 'intermediate' && (
        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <h2 className="text-2xl font-semibold mb-4">DevOps Core Practices</h2>
          <p className="text-gray-600">
            Intermediate content covering DevOps practices, automation strategies, and team collaboration.
          </p>
        </div>
      )}

      {activeLevel === 'advanced' && (
        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <h2 className="text-2xl font-semibold mb-4">Enterprise DevOps</h2>
          <p className="text-gray-600">
            Advanced topics including enterprise architecture, security, compliance, and scaling DevOps practices.
          </p>
        </div>
      )}
    </div>
  );
};

export default IntroductionPage;