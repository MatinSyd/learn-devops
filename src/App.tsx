import React, { useState } from 'react';
import { 
  BookOpen, 
  GitBranch, 
  Settings, 
  Wrench, 
  Container, 
  Server, 
  Code, 
  Cog, 
  Monitor, 
  Cloud, 
  Award, 
  MessageCircleQuestion,
  Home,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import HomePage from './components/HomePage';
import IntroductionPage from './components/IntroductionPage';
import GitPage from './components/GitPage';
import CICDPage from './components/CICDPage';
import JenkinsPage from './components/JenkinsPage';
import DockerPage from './components/DockerPage';
import KubernetesPage from './components/KubernetesPage';
import TerraformPage from './components/TerraformPage';
import AnsiblePage from './components/AnsiblePage';
import MonitoringPage from './components/MonitoringPage';
import CloudPage from './components/CloudPage';
import BestPracticesPage from './components/BestPracticesPage';
import InterviewPage from './components/InterviewPage';

const navigationItems = [
  { id: 'home', label: 'Home', icon: Home, component: HomePage },
  { id: 'introduction', label: 'Introduction to DevOps', icon: BookOpen, component: IntroductionPage },
  { id: 'git', label: 'Git & GitHub', icon: GitBranch, component: GitPage },
  { id: 'cicd', label: 'CI/CD Concepts', icon: Settings, component: CICDPage },
  { id: 'jenkins', label: 'Jenkins', icon: Wrench, component: JenkinsPage },
  { id: 'docker', label: 'Docker', icon: Container, component: DockerPage },
  { id: 'kubernetes', label: 'Kubernetes', icon: Server, component: KubernetesPage },
  { id: 'terraform', label: 'Terraform', icon: Code, component: TerraformPage },
  { id: 'ansible', label: 'Ansible', icon: Cog, component: AnsiblePage },
  { id: 'monitoring', label: 'Monitoring', icon: Monitor, component: MonitoringPage },
  { id: 'cloud', label: 'Cloud DevOps', icon: Cloud, component: CloudPage },
  { id: 'best-practices', label: 'Best Practices', icon: Award, component: BestPracticesPage },
  { id: 'interview', label: 'Interview Prep', icon: MessageCircleQuestion, component: InterviewPage },
];

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const CurrentComponent = navigationItems.find(item => item.id === currentPage)?.component || HomePage;

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-between h-16 px-6 bg-blue-600 text-white">
          <h1 className="text-xl font-bold">DevOps Academy</h1>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="mt-6">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center px-6 py-3 text-left hover:bg-blue-50 hover:text-blue-600 transition-colors ${
                  currentPage === item.id ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600' : 'text-gray-600'
                }`}
              >
                <Icon size={20} className="mr-3" />
                <span className="text-sm font-medium">{item.label}</span>
                <ChevronRight size={16} className="ml-auto" />
              </button>
            );
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:ml-0">
        {/* Top Bar */}
        <div className="bg-white shadow-sm border-b h-16 flex items-center px-6 lg:px-8">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden mr-4"
          >
            <Menu size={24} />
          </button>
          <h2 className="text-xl font-semibold text-gray-800">
            {navigationItems.find(item => item.id === currentPage)?.label || 'DevOps Learning Platform'}
          </h2>
        </div>

        {/* Page Content */}
        <div className="p-6 lg:p-8">
          <CurrentComponent />
        </div>
      </div>
    </div>
  );
}

export default App;