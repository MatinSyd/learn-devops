import React, { useState } from 'react';
import { Container } from 'lucide-react';

const DockerPage = () => {
  const [activeLevel, setActiveLevel] = useState('beginner');

  const levels = [
    { id: 'beginner', label: 'Beginner', description: 'Docker basics' },
    { id: 'intermediate', label: 'Intermediate', description: 'Docker Compose' },
    { id: 'advanced', label: 'Advanced', description: 'Production Docker' }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Docker</h1>
        <p className="text-xl text-gray-600">
          Master containerization with Docker for consistent development and deployment
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

      {/* Content for each level would go here */}
      <div className="bg-white rounded-lg p-6 shadow-sm border">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Container className="mr-3 text-blue-600" size={24} />
          {activeLevel === 'beginner' && 'Docker Fundamentals'}
          {activeLevel === 'intermediate' && 'Docker Compose & Multi-Container Apps'}
          {activeLevel === 'advanced' && 'Production Docker & Optimization'}
        </h2>
        <p className="text-gray-600">
          Detailed Docker content for {activeLevel} level will be implemented here, 
          including containerization concepts, Dockerfile creation, Docker commands, 
          and best practices.
        </p>
      </div>
    </div>
  );
};

export default DockerPage;