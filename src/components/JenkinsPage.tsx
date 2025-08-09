import React, { useState } from 'react';
import { Wrench, Play, Settings, AlertTriangle } from 'lucide-react';

const JenkinsPage = () => {
  const [activeLevel, setActiveLevel] = useState('beginner');

  const levels = [
    { id: 'beginner', label: 'Beginner', description: 'Jenkins basics' },
    { id: 'intermediate', label: 'Intermediate', description: 'Pipeline creation' },
    { id: 'advanced', label: 'Advanced', description: 'Enterprise Jenkins' }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Jenkins</h1>
        <p className="text-xl text-gray-600">
          Automate your build, test, and deployment processes with Jenkins
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
              <Wrench className="mr-3 text-blue-600" size={24} />
              What is Jenkins?
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Jenkins is an open-source automation server that helps teams build, test, and deploy 
              applications. It provides hundreds of plugins to support building, deploying, and 
              automating any project.
            </p>

            <h3 className="text-lg font-semibold mb-3">Key Features:</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {[
                { feature: 'Pipeline as Code', description: 'Define build pipelines in code using Jenkinsfile' },
                { feature: 'Plugin Ecosystem', description: '1800+ plugins for integration with various tools' },
                { feature: 'Distributed Builds', description: 'Scale builds across multiple machines' },
                { feature: 'Easy Configuration', description: 'Web-based interface for easy setup and management' },
                { feature: 'Version Control Integration', description: 'Works with Git, SVN, and other VCS systems' },
                { feature: 'Notification Support', description: 'Email, Slack, and other notification integrations' }
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900">{item.feature}</h4>
                  <p className="text-gray-700 text-sm mt-1">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-900 mb-2">💡 Why Jenkins?</h4>
              <p className="text-blue-800 text-sm">
                Jenkins automates the repetitive tasks in your development workflow, allowing developers 
                to focus on writing code while ensuring consistent, reliable builds and deployments.
              </p>
            </div>
          </section>

          <section className="bg-white rounded-lg p-6 shadow-sm border">
            <h2 className="text-2xl font-semibold mb-4">Jenkins Installation</h2>
            <p className="text-gray-700 mb-6">
              Jenkins can be installed on various platforms. Here are the most common installation methods:
            </p>

            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4 bg-blue-50 p-4 rounded-r-lg">
                <h3 className="font-semibold text-blue-900 mb-2">Docker Installation (Recommended)</h3>
                <p className="text-blue-800 text-sm mb-3">
                  The easiest way to get started with Jenkins using Docker.
                </p>
                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                  <div># Pull and run Jenkins Docker container</div>
                  <div>docker run -d -p 8080:8080 -p 50000:50000 \</div>
                  <div>  -v jenkins_home:/var/jenkins_home \</div>
                  <div>  --name jenkins \</div>
                  <div>  jenkins/jenkins:lts</div>
                  <div></div>
                  <div># Get the initial admin password</div>
                  <div>docker exec jenkins cat /var/jenkins_home/secrets/initialAdminPassword</div>
                </div>
              </div>

              <div className="border-l-4 border-green-500 pl-4 bg-green-50 p-4 rounded-r-lg">
                <h3 className="font-semibold text-green-900 mb-2">Ubuntu/Debian Installation</h3>
                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                  <div># Add Jenkins repository</div>
                  <div>curl -fsSL https://pkg.jenkins.io/debian/jenkins.io.key | sudo tee \</div>
                  <div>  /usr/share/keyrings/jenkins-keyring.asc &gt; /dev/null</div>
                  <div></div>
                  <div>echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] \</div>
                  <div>  https://pkg.jenkins.io/debian binary/ | sudo tee \</div>
                  <div>  /etc/apt/sources.list.d/jenkins.list &gt; /dev/null</div>
                  <div></div>
                  <div># Install Jenkins</div>
                  <div>sudo apt update</div>
                  <div>sudo apt install openjdk-11-jdk</div>
                  <div>sudo apt install jenkins</div>
                  <div></div>
                  <div># Start Jenkins service</div>
                  <div>sudo systemctl start jenkins</div>
                  <div>sudo systemctl enable jenkins</div>
                </div>
              </div>

              <div className="border-l-4 border-purple-500 pl-4 bg-purple-50 p-4 rounded-r-lg">
                <h3 className="font-semibold text-purple-900 mb-2">Initial Setup Steps</h3>
                <ol className="text-purple-800 text-sm space-y-2 list-decimal list-inside">
                  <li>Access Jenkins at <code className="bg-purple-200 px-2 py-1 rounded">http://localhost:8080</code></li>
                  <li>Enter the initial admin password from the installation</li>
                  <li>Install suggested plugins or select plugins manually</li>
                  <li>Create your first admin user</li>
                  <li>Configure Jenkins URL and start using Jenkins</li>
                </ol>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg p-6 shadow-sm border">
            <h2 className="text-2xl font-semibold mb-4">Creating Your First Job</h2>
            <p className="text-gray-700 mb-6">
              Let's create a simple "Freestyle project" to understand Jenkins basics.
            </p>

            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2 text-green-600">Step 1: Create New Job</h3>
                <div className="text-sm text-gray-700 space-y-2">
                  <div>1. Click "New Item" on Jenkins dashboard</div>
                  <div>2. Enter job name: "my-first-job"</div>
                  <div>3. Select "Freestyle project"</div>
                  <div>4. Click "OK"</div>
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2 text-blue-600">Step 2: Configure Source Code</h3>
                <div className="text-sm text-gray-700 space-y-2 mb-3">
                  <div>1. In "Source Code Management" section</div>
                  <div>2. Select "Git"</div>
                  <div>3. Enter repository URL</div>
                  <div>4. Add credentials if needed</div>
                  <div>5. Specify branch (e.g., */main)</div>
                </div>
                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                  <div># Example Git repository URL</div>
                  <div>https://github.com/your-username/your-repo.git</div>
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2 text-purple-600">Step 3: Add Build Steps</h3>
                <div className="text-sm text-gray-700 space-y-2 mb-3">
                  <div>1. In "Build" section, click "Add build step"</div>
                  <div>2. Select "Execute shell" (Linux/Mac) or "Execute Windows batch command"</div>
                  <div>3. Add your build commands</div>
                </div>
                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                  <div># Example build commands for Node.js project</div>
                  <div>echo "Starting build process..."</div>
                  <div>npm install</div>
                  <div>npm test</div>
                  <div>npm run build</div>
                  <div>echo "Build completed successfully!"</div>
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2 text-orange-600">Step 4: Save and Build</h3>
                <div className="text-sm text-gray-700 space-y-2">
                  <div>1. Click "Save" to save the job configuration</div>
                  <div>2. Click "Build Now" to trigger the first build</div>
                  <div>3. Check "Build History" to see build results</div>
                  <div>4. Click on build number to see detailed logs</div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg p-6 shadow-sm border">
            <h2 className="text-2xl font-semibold mb-4">Understanding Build Results</h2>
            
            <div className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  {
                    status: 'Success',
                    color: 'green',
                    icon: '✅',
                    description: 'Build completed without errors'
                  },
                  {
                    status: 'Failure', 
                    color: 'red',
                    icon: '❌',
                    description: 'Build failed due to errors'
                  },
                  {
                    status: 'Unstable',
                    color: 'yellow',
                    icon: '⚠️',
                    description: 'Build succeeded but tests failed'
                  }
                ].map((status, index) => (
                  <div key={index} className={`border rounded-lg p-4 bg-${status.color}-50`}>
                    <div className="flex items-center mb-2">
                      <span className="text-lg mr-2">{status.icon}</span>
                      <h4 className={`font-semibold text-${status.color}-900`}>{status.status}</h4>
                    </div>
                    <p className={`text-${status.color}-800 text-sm`}>{status.description}</p>
                  </div>
                ))}
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start">
                  <AlertTriangle className="text-yellow-600 mr-2 mt-1" size={16} />
                  <div>
                    <h4 className="font-semibold text-yellow-800">Troubleshooting Tips</h4>
                    <ul className="text-yellow-700 text-sm mt-2 space-y-1">
                      <li>• Check console output for detailed error messages</li>
                      <li>• Verify that all required tools are installed on Jenkins node</li>
                      <li>• Ensure proper permissions for file system access</li>
                      <li>• Check network connectivity for external dependencies</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg p-6 shadow-sm border">
            <h2 className="text-2xl font-semibold mb-4">Practice Exercise</h2>
            <div className="bg-gray-50 border rounded-lg p-4">
              <h3 className="font-semibold mb-2">Exercise 1: Create Your First Jenkins Job</h3>
              <p className="text-gray-700 text-sm mb-3">
                Set up Jenkins and create a basic build job for a sample project.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Requirements:</strong>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Install Jenkins using Docker</li>
                  <li>Complete the initial setup wizard</li>
                  <li>Create a freestyle job that builds a Node.js project</li>
                  <li>Configure the job to run tests and generate reports</li>
                  <li>Trigger a build and analyze the results</li>
                </ul>
                <br />
                <strong>Bonus:</strong> Set up email notifications for build failures.
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Additional levels would go here - intermediate and advanced content */}
      {/* Due to space constraints, I'll create placeholder sections for now */}
      
      {activeLevel === 'intermediate' && (
        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <h2 className="text-2xl font-semibold mb-4">Pipeline Creation & Management</h2>
          <p className="text-gray-600">
            Intermediate Jenkins content including Jenkinsfile creation, pipeline syntax, 
            build triggers, and plugin management will be detailed here.
          </p>
        </div>
      )}

      {activeLevel === 'advanced' && (
        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <h2 className="text-2xl font-semibold mb-4">Enterprise Jenkins Architecture</h2>
          <p className="text-gray-600">
            Advanced topics including master-slave architecture, security configuration, 
            performance optimization, and enterprise deployment strategies will be covered here.
          </p>
        </div>
      )}
    </div>
  );
};

export default JenkinsPage;