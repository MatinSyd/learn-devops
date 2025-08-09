import React, { useState } from 'react';
import { Server } from 'lucide-react';

const KubernetesPage = () => {
  const [activeLevel, setActiveLevel] = useState('beginner');

  const levels = [
    { id: 'beginner', label: 'Beginner', description: 'K8s basics' },
    { id: 'intermediate', label: 'Intermediate', description: 'Deployments & Services' },
    { id: 'advanced', label: 'Advanced', description: 'Production K8s' }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Kubernetes</h1>
        <p className="text-xl text-gray-600">
          Learn container orchestration and management with Kubernetes
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

      <div className="bg-white rounded-lg p-6 shadow-sm border">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Server className="mr-3 text-blue-600" size={24} />
          {activeLevel === 'beginner' && 'Kubernetes Architecture & Concepts'}
          {activeLevel === 'intermediate' && 'Deployments, Services & Networking'}
          {activeLevel === 'advanced' && 'Advanced K8s & Production Patterns'}
        </h2>
        <p className="text-gray-600">
          Comprehensive Kubernetes content for {activeLevel} level, covering pods, 
          deployments, services, ingress, ConfigMaps, secrets, and cluster management.
        </p>
      </div>
    </div>
  );
};

export default KubernetesPage;