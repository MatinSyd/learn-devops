import React from 'react';
import { MessageCircleQuestion } from 'lucide-react';

const InterviewPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Interview Preparation</h1>
        <p className="text-xl text-gray-600">
          DevOps interview questions, scenarios, and preparation strategies
        </p>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm border">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <MessageCircleQuestion className="mr-3 text-blue-600" size={24} />
          Complete Interview Guide
        </h2>
        <p className="text-gray-600">
          Extensive interview preparation including technical questions, scenario-based problems, 
          behavioral questions, and tips for different experience levels.
        </p>
      </div>
    </div>
  );
};

export default InterviewPage;