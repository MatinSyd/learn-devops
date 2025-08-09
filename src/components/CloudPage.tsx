import React from 'react';
import { Cloud } from 'lucide-react';

const CloudPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Cloud DevOps</h1>
        <p className="text-xl text-gray-600">
          DevOps practices on AWS, Azure, and Google Cloud Platform
        </p>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm border">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Cloud className="mr-3 text-blue-600" size={24} />
          Multi-Cloud DevOps Strategies
        </h2>
        <p className="text-gray-600">
          Cloud-specific DevOps content covering AWS CodePipeline, Azure DevOps, 
          Google Cloud Build, and multi-cloud deployment strategies.
        </p>
      </div>
    </div>
  );
};

export default CloudPage;