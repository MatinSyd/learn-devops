import React, { useState } from 'react';
import { Code } from 'lucide-react';

const TerraformPage = () => {
  const [activeLevel, setActiveLevel] = useState('beginner');

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Terraform</h1>
        <p className="text-xl text-gray-600">
          Infrastructure as Code with Terraform for consistent and scalable deployments
        </p>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm border">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Code className="mr-3 text-blue-600" size={24} />
          Infrastructure as Code Fundamentals
        </h2>
        <p className="text-gray-600">
          Terraform content covering infrastructure provisioning, state management, 
          modules, and multi-cloud deployments will be detailed here.
        </p>
      </div>
    </div>
  );
};

export default TerraformPage;