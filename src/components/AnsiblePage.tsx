import React, { useState } from 'react';
import { Cog } from 'lucide-react';

const AnsiblePage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Ansible</h1>
        <p className="text-xl text-gray-600">
          Configuration management and automation with Ansible
        </p>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm border">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Cog className="mr-3 text-blue-600" size={24} />
          Configuration Management Essentials
        </h2>
        <p className="text-gray-600">
          Ansible content including playbooks, roles, inventory management, 
          and automation strategies will be comprehensive here.
        </p>
      </div>
    </div>
  );
};

export default AnsiblePage;