import React from 'react';
import { Monitor } from 'lucide-react';

const MonitoringPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Monitoring</h1>
        <p className="text-xl text-gray-600">
          Application and infrastructure monitoring with Prometheus and Grafana
        </p>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm border">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Monitor className="mr-3 text-blue-600" size={24} />
          Observability and Monitoring Stack
        </h2>
        <p className="text-gray-600">
          Comprehensive monitoring content covering Prometheus, Grafana, alerting, 
          metrics collection, and observability best practices.
        </p>
      </div>
    </div>
  );
};

export default MonitoringPage;