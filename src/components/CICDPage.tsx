import React, { useState } from 'react';
import { Settings, PlayCircle, CheckCircle, AlertCircle } from 'lucide-react';

const CICDPage = () => {
  const [activeLevel, setActiveLevel] = useState('beginner');

  const levels = [
    { id: 'beginner', label: 'Beginner', description: 'CI/CD concepts' },
    { id: 'intermediate', label: 'Intermediate', description: 'Pipeline design' },
    { id: 'advanced', label: 'Advanced', description: 'Enterprise CI/CD' }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">CI/CD Concepts</h1>
        <p className="text-xl text-gray-600">
          Understanding Continuous Integration and Continuous Deployment pipelines
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
              <Settings className="mr-3 text-blue-600" size={24} />
              What is CI/CD?
            </h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4 bg-blue-50 p-4 rounded-r-lg">
                <h3 className="font-semibold text-blue-900 mb-2">Continuous Integration (CI)</h3>
                <p className="text-blue-800 text-sm mb-3">
                  The practice of frequently integrating code changes into a shared repository, 
                  with automated builds and tests to catch integration issues early.
                </p>
                <div className="text-xs text-blue-700">
                  <strong>Key Activities:</strong> Code commit → Automated build → Run tests → Report results
                </div>
              </div>

              <div className="border-l-4 border-green-500 pl-4 bg-green-50 p-4 rounded-r-lg">
                <h3 className="font-semibold text-green-900 mb-2">Continuous Deployment (CD)</h3>
                <p className="text-green-800 text-sm mb-3">
                  The practice of automatically deploying code changes to production environments 
                  after passing all tests and quality checks.
                </p>
                <div className="text-xs text-green-700">
                  <strong>Key Activities:</strong> Automated deployment → Environment provisioning → Release management
                </div>
              </div>

              <div className="border-l-4 border-purple-500 pl-4 bg-purple-50 p-4 rounded-r-lg">
                <h3 className="font-semibold text-purple-900 mb-2">Continuous Delivery (CD)</h3>
                <p className="text-purple-800 text-sm mb-3">
                  Ensures that code is always in a deployable state, but deployment to production 
                  requires manual approval or is triggered by business decisions.
                </p>
                <div className="text-xs text-purple-700">
                  <strong>Key Activities:</strong> Automated testing → Staging deployment → Manual approval → Production release
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg p-6 shadow-sm border">
            <h2 className="text-2xl font-semibold mb-4">CI/CD Pipeline Stages</h2>
            <p className="text-gray-700 mb-6">
              A typical CI/CD pipeline consists of several automated stages that code passes through:
            </p>

            <div className="space-y-4">
              {[
                {
                  stage: 'Source',
                  icon: '📂',
                  description: 'Code is committed to version control system',
                  activities: ['Git push', 'Webhook trigger', 'Branch protection'],
                  tools: 'Git, GitHub, GitLab, Bitbucket'
                },
                {
                  stage: 'Build',
                  icon: '🔨',
                  description: 'Application is compiled and packaged',
                  activities: ['Code compilation', 'Dependency resolution', 'Asset bundling'],
                  tools: 'Maven, Gradle, npm, Docker'
                },
                {
                  stage: 'Test',
                  icon: '🧪',
                  description: 'Automated tests validate code quality',
                  activities: ['Unit tests', 'Integration tests', 'Code coverage'],
                  tools: 'JUnit, Jest, Selenium, SonarQube'
                },
                {
                  stage: 'Deploy',
                  icon: '🚀',
                  description: 'Application is deployed to target environment',
                  activities: ['Environment setup', 'Database migration', 'Service restart'],
                  tools: 'Kubernetes, Docker, Ansible, Terraform'
                },
                {
                  stage: 'Monitor',
                  icon: '📊',
                  description: 'Application performance and health monitoring',
                  activities: ['Log aggregation', 'Metrics collection', 'Alert management'],
                  tools: 'Prometheus, Grafana, ELK Stack, Datadog'
                }
              ].map((stage, index) => (
                <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start">
                    <div className="text-2xl mr-4 mt-1">{stage.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-900">{stage.stage}</h3>
                        <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">
                          Stage {index + 1}
                        </span>
                      </div>
                      <p className="text-gray-700 text-sm mb-3">{stage.description}</p>
                      <div className="mb-2">
                        <div className="text-xs font-semibold text-gray-600 mb-1">Key Activities:</div>
                        <div className="text-xs text-gray-600">
                          {stage.activities.join(' • ')}
                        </div>
                      </div>
                      <div className="text-xs text-blue-600 bg-blue-50 inline-block px-2 py-1 rounded">
                        Tools: {stage.tools}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-lg p-6 shadow-sm border">
            <h2 className="text-2xl font-semibold mb-4">Benefits of CI/CD</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="font-semibold mb-3 text-green-600 flex items-center">
                  <CheckCircle size={20} className="mr-2" />
                  Development Benefits
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Faster feedback on code changes</li>
                  <li>• Early detection of integration issues</li>
                  <li>• Improved code quality through automated testing</li>
                  <li>• Reduced manual effort and human errors</li>
                  <li>• Better collaboration between team members</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3 text-blue-600 flex items-center">
                  <PlayCircle size={20} className="mr-2" />
                  Business Benefits
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Faster time to market</li>
                  <li>• Increased deployment frequency</li>
                  <li>• Reduced deployment risks</li>
                  <li>• Improved customer satisfaction</li>
                  <li>• Better resource utilization</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-start">
                <AlertCircle className="text-yellow-600 mr-2 mt-1" size={16} />
                <div>
                  <h4 className="font-semibold text-yellow-800">Common Misconception</h4>
                  <p className="text-yellow-700 text-sm mt-1">
                    CI/CD is not just about automation tools—it's a cultural shift that requires 
                    team commitment to practices like frequent commits, comprehensive testing, 
                    and collaborative problem-solving.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg p-6 shadow-sm border">
            <h2 className="text-2xl font-semibold mb-4">Practice Exercise</h2>
            <div className="bg-gray-50 border rounded-lg p-4">
              <h3 className="font-semibold mb-2">Exercise 1: Design Your First Pipeline</h3>
              <p className="text-gray-700 text-sm mb-3">
                Plan a basic CI/CD pipeline for a simple web application.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Scenario:</strong> Node.js web app with React frontend, deployed to a cloud server.
                <br /><br />
                <strong>Tasks:</strong>
                <ol className="list-decimal list-inside mt-2 space-y-1">
                  <li>List the stages your pipeline would need</li>
                  <li>Identify what happens in each stage</li>
                  <li>Choose appropriate tools for each stage</li>
                  <li>Define success/failure criteria for each stage</li>
                  <li>Plan rollback strategy if deployment fails</li>
                </ol>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Intermediate Content */}
      {activeLevel === 'intermediate' && (
        <div className="space-y-8">
          <section className="bg-white rounded-lg p-6 shadow-sm border">
            <h2 className="text-2xl font-semibold mb-4">Pipeline Design Patterns</h2>
            <p className="text-gray-700 mb-6">
              Different CI/CD patterns suit different project requirements and team structures.
            </p>

            <div className="space-y-6">
              <div className="border rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2 text-blue-600">Feature Branch Workflow</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Each feature is developed in a separate branch with its own CI pipeline.
                </p>
                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-3">
                  <div># .github/workflows/feature-branch.yml</div>
                  <div>name: Feature Branch CI</div>
                  <div>on:</div>
                  <div>  push:</div>
                  <div>    branches: [ feature/* ]</div>
                  <div>  pull_request:</div>
                  <div>    branches: [ main ]</div>
                  <div></div>
                  <div>jobs:</div>
                  <div>  test:</div>
                  <div>    runs-on: ubuntu-latest</div>
                  <div>    steps:</div>
                  <div>      - uses: actions/checkout@v2</div>
                  <div>      - name: Setup Node.js</div>
                  <div>        uses: actions/setup-node@v2</div>
                  <div>        with:</div>
                  <div>          node-version: '16'</div>
                  <div>      - run: npm ci</div>
                  <div>      - run: npm test</div>
                  <div>      - run: npm run lint</div>
                </div>
                <div className="text-xs text-gray-600">
                  <strong>Benefits:</strong> Isolated testing, parallel development, easy rollback
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2 text-green-600">Trunk-based Development</h3>
                <p className="text-gray-700 text-sm mb-3">
                  All developers work on a single main branch with frequent integration.
                </p>
                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-3">
                  <div># Pipeline triggers on every main branch commit</div>
                  <div>trigger:</div>
                  <div>  - main</div>
                  <div></div>
                  <div>stages:</div>
                  <div>  - stage: FastFeedback</div>
                  <div>    displayName: 'Fast Feedback'</div>
                  <div>    jobs:</div>
                  <div>      - job: UnitTests</div>
                  <div>        timeoutInMinutes: 5</div>
                  <div>        steps:</div>
                  <div>          - script: npm test -- --maxWorkers=4</div>
                  <div>  - stage: Deploy</div>
                  <div>    condition: succeeded()</div>
                  <div>    jobs:</div>
                  <div>      - deployment: Production</div>
                  <div>        environment: prod</div>
                </div>
                <div className="text-xs text-gray-600">
                  <strong>Benefits:</strong> Fast integration, simple branching, continuous deployment ready
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2 text-purple-600">Multi-Environment Pipeline</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Progressive deployment through multiple environments (dev → staging → production).
                </p>
                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-3">
                  <div>stages:</div>
                  <div>  - name: build</div>
                  <div>  - name: dev-deploy</div>
                  <div>    condition: eq(variables['Build.SourceBranch'], 'refs/heads/develop')</div>
                  <div>  - name: staging-deploy</div>
                  <div>    condition: eq(variables['Build.SourceBranch'], 'refs/heads/release/*')</div>
                  <div>    dependsOn: dev-deploy</div>
                  <div>  - name: prod-deploy</div>
                  <div>    condition: eq(variables['Build.SourceBranch'], 'refs/heads/main')</div>
                  <div>    dependsOn: staging-deploy</div>
                  <div>    environment: production</div>
                  <div>    strategy:</div>
                  <div>      canary:</div>
                  <div>        increments: [25, 50, 100]</div>
                </div>
                <div className="text-xs text-gray-600">
                  <strong>Benefits:</strong> Risk mitigation, environment parity, gradual rollout
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg p-6 shadow-sm border">
            <h2 className="text-2xl font-semibold mb-4">Pipeline Optimization Strategies</h2>
            
            <div className="space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-blue-800 mb-2">Parallel Execution</h3>
                <p className="text-blue-700 text-sm mb-3">
                  Run independent tasks simultaneously to reduce total pipeline time.
                </p>
                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                  <div>jobs:</div>
                  <div>  unit-tests:</div>
                  <div>    runs-on: ubuntu-latest</div>
                  <div>    steps:</div>
                  <div>      - run: npm run test:unit</div>
                  <div>  </div>
                  <div>  integration-tests:</div>
                  <div>    runs-on: ubuntu-latest</div>
                  <div>    steps:</div>
                  <div>      - run: npm run test:integration</div>
                  <div>  </div>
                  <div>  security-scan:</div>
                  <div>    runs-on: ubuntu-latest</div>
                  <div>    steps:</div>
                  <div>      - run: npm audit</div>
                  <div>  </div>
                  <div>  deploy:</div>
                  <div>    needs: [unit-tests, integration-tests, security-scan]</div>
                  <div>    runs-on: ubuntu-latest</div>
                  <div>    steps:</div>
                  <div>      - run: npm run deploy</div>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-800 mb-2">Caching and Artifacts</h3>
                <p className="text-green-700 text-sm mb-3">
                  Cache dependencies and reuse build artifacts to speed up subsequent runs.
                </p>
                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                  <div>steps:</div>
                  <div>  - name: Cache dependencies</div>
                  <div>    uses: actions/cache@v2</div>
                  <div>    with:</div>
                  <div>      path: ~/.npm</div>
                  <div>      key: ${'{{ runner.os }}'}-node-${'{{ hashFiles(\'**/package-lock.json\') }}'}</div>
                  <div>  </div>
                  <div>  - name: Upload build artifacts</div>
                  <div>    uses: actions/upload-artifact@v2</div>
                  <div>    with:</div>
                  <div>      name: build-files</div>
                  <div>      path: dist/</div>
                  <div>  </div>
                  <div>  - name: Download build artifacts</div>
                  <div>    uses: actions/download-artifact@v2</div>
                  <div>    with:</div>
                  <div>      name: build-files</div>
                  <div>      path: dist/</div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="font-semibold text-yellow-800 mb-2">Fast Feedback Loops</h3>
                <p className="text-yellow-700 text-sm mb-3">
                  Prioritize fast-running tests and checks to provide quick developer feedback.
                </p>
                <div className="text-sm text-yellow-700">
                  <strong>Strategy:</strong> Run unit tests first (1-2 min), then integration tests (5-10 min), 
                  finally end-to-end tests (15-30 min). Fail fast on critical issues.
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg p-6 shadow-sm border">
            <h2 className="text-2xl font-semibold mb-4">Testing in CI/CD Pipelines</h2>
            
            <div className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  {
                    type: 'Unit Tests',
                    speed: 'Fast (seconds)',
                    scope: 'Individual functions/methods',
                    tools: 'Jest, JUnit, pytest',
                    percentage: '70%'
                  },
                  {
                    type: 'Integration Tests',
                    speed: 'Medium (minutes)', 
                    scope: 'Component interactions',
                    tools: 'Supertest, TestContainers',
                    percentage: '20%'
                  },
                  {
                    type: 'E2E Tests',
                    speed: 'Slow (minutes-hours)',
                    scope: 'Full user workflows',
                    tools: 'Cypress, Selenium, Playwright',
                    percentage: '10%'
                  }
                ].map((test, index) => (
                  <div key={index} className="border rounded-lg p-4 bg-gray-50">
                    <h4 className="font-semibold text-gray-900 mb-2">{test.type}</h4>
                    <div className="text-xs space-y-1">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Speed:</span>
                        <span className="text-gray-800">{test.speed}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Scope:</span>
                        <span className="text-gray-800">{test.scope}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Tools:</span>
                        <span className="text-gray-800">{test.tools}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Coverage:</span>
                        <span className="font-semibold text-blue-600">{test.percentage}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
                <div># Example test stage with quality gates</div>
                <div>test:</div>
                <div>  stage: test</div>
                <div>  script:</div>
                <div>    - npm run test:unit -- --coverage</div>
                <div>    - npm run test:integration</div>
                <div>  coverage: '/Coverage: \\d+\\.\\d+%/'</div>
                <div>  artifacts:</div>
                <div>    reports:</div>
                <div>      coverage_report:</div>
                <div>        coverage_format: cobertura</div>
                <div>        path: coverage/cobertura-coverage.xml</div>
                <div>  rules:</div>
                <div>    - if: $CI_MERGE_REQUEST_ID</div>
                <div>      coverage: 80  # Minimum coverage threshold</div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg p-6 shadow-sm border">
            <h2 className="text-2xl font-semibold mb-4">Practice Exercise</h2>
            <div className="bg-gray-50 border rounded-lg p-4">
              <h3 className="font-semibold mb-2">Exercise 2: Pipeline Optimization</h3>
              <p className="text-gray-700 text-sm mb-3">
                Optimize a slow CI/CD pipeline for better developer experience.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Current State:</strong> Pipeline takes 45 minutes, tests run sequentially, 
                no caching, frequent timeouts.
                <br /><br />
                <strong>Tasks:</strong>
                <ol className="list-decimal list-inside mt-2 space-y-1">
                  <li>Identify bottlenecks in the current pipeline</li>
                  <li>Design parallel execution strategy</li>
                  <li>Implement caching for dependencies and artifacts</li>
                  <li>Create fast feedback loop for developers</li>
                  <li>Set up proper quality gates and failure handling</li>
                </ol>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Advanced Content */}
      {activeLevel === 'advanced' && (
        <div className="space-y-8">
          <section className="bg-white rounded-lg p-6 shadow-sm border">
            <h2 className="text-2xl font-semibold mb-4">Enterprise CI/CD Architecture</h2>
            <p className="text-gray-700 mb-6">
              Large-scale CI/CD systems require careful architecture design for scalability, 
              security, and maintainability across multiple teams and projects.
            </p>

            <div className="space-y-6">
              <div className="border rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2 text-blue-600">Pipeline as Code (PaC)</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Manage pipeline definitions as version-controlled code with reusable templates.
                </p>
                <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
                  <div># .gitlab/pipeline-templates/nodejs-template.yml</div>
                  <div>.nodejs_template:</div>
                  <div>  image: node:16</div>
                  <div>  variables:</div>
                  <div>    NPM_CONFIG_CACHE: ".npm"</div>
                  <div>  cache:</div>
                  <div>    key: ${'$CI_COMMIT_REF_SLUG'}</div>
                  <div>    paths:</div>
                  <div>      - .npm/</div>
                  <div>      - node_modules/</div>
                  <div>  before_script:</div>
                  <div>    - npm ci --cache .npm --prefer-offline</div>
                  <div>  rules:</div>
                  <div>    - if: $CI_PIPELINE_SOURCE == "merge_request_event"</div>
                  <div>    - if: $CI_COMMIT_BRANCH == $CI_DEFAULT_BRANCH</div>
                  <div></div>
                  <div># Usage in project pipeline</div>
                  <div>include:</div>
                  <div>  - template: nodejs-template.yml</div>
                  <div></div>
                  <div>unit_test:</div>
                  <div>  extends: .nodejs_template</div>
                  <div>  script: npm test</div>
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2 text-green-600">Multi-Cloud CI/CD</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Deploy applications across multiple cloud providers with environment-specific configurations.
                </p>
                <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
                  <div># Multi-cloud deployment matrix</div>
                  <div>strategy:</div>
                  <div>  matrix:</div>
                  <div>    environment: [aws-prod, azure-prod, gcp-prod]</div>
                  <div>    include:</div>
                  <div>      - environment: aws-prod</div>
                  <div>        cloud_provider: aws</div>
                  <div>        deployment_tool: terraform</div>
                  <div>        region: us-east-1</div>
                  <div>      - environment: azure-prod</div>
                  <div>        cloud_provider: azure</div>
                  <div>        deployment_tool: arm</div>
                  <div>        region: eastus</div>
                  <div>      - environment: gcp-prod</div>
                  <div>        cloud_provider: gcp</div>
                  <div>        deployment_tool: gcp-deployment-manager</div>
                  <div>        region: us-central1</div>
                  <div></div>
                  <div>deploy:</div>
                  <div>  runs-on: ubuntu-latest</div>
                  <div>  strategy: ${'{{ matrix }}'}</div>
                  <div>  steps:</div>
                  <div>    - name: Deploy to ${'{{ matrix.cloud_provider }}'}</div>
                  <div>      run: ./deploy.sh ${'{{ matrix.cloud_provider }}'} ${'{{ matrix.region }}'}</div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg p-6 shadow-sm border">
            <h2 className="text-2xl font-semibold mb-4">Advanced Deployment Strategies</h2>
            
            <div className="space-y-6">
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2 text-blue-600">Blue-Green Deployment</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Maintain two identical production environments, switching traffic between them for zero-downtime deployments.
                </p>
                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                  <div># Blue-Green deployment script</div>
                  <div>CURRENT_ENV=$(kubectl get service app-service -o jsonpath='&lbrace;.metadata.labels.version&rbrace;')</div>
                  <div>if [ "$CURRENT_ENV" = "blue" ]; then</div>
                  <div>  NEW_ENV="green"</div>
                  <div>else</div>
                  <div>  NEW_ENV="blue"</div>
                  <div>fi</div>
                  <div></div>
                  <div># Deploy to inactive environment</div>
                  <div>kubectl apply -f k8s/deployment-$NEW_ENV.yaml</div>
                  <div>kubectl rollout status deployment/app-$NEW_ENV</div>
                  <div></div>
                  <div># Run health checks</div>
                  <div>./health-check.sh $NEW_ENV</div>
                  <div></div>
                  <div># Switch traffic</div>
                  <div>kubectl patch service app-service -p '&lbrace;"metadata":&lbrace;"labels":&lbrace;"version":"'$NEW_ENV'"&rbrace;&rbrace;&rbrace;'</div>
                </div>
                <div className="text-xs text-blue-600">
                  <strong>Benefits:</strong> Zero downtime, instant rollback, production testing
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2 text-green-600">Canary Deployment</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Gradually roll out changes to a subset of users, monitoring metrics before full deployment.
                </p>
                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                  <div># Canary deployment with Istio</div>
                  <div>apiVersion: networking.istio.io/v1alpha3</div>
                  <div>kind: VirtualService</div>
                  <div>spec:</div>
                  <div>  http:</div>
                  <div>  - match:</div>
                  <div>    - headers:</div>
                  <div>        canary:</div>
                  <div>          exact: "true"</div>
                  <div>    route:</div>
                  <div>    - destination:</div>
                  <div>        host: myapp</div>
                  <div>        subset: canary</div>
                  <div>  - route:</div>
                  <div>    - destination:</div>
                  <div>        host: myapp</div>
                  <div>        subset: stable</div>
                  <div>      weight: 90</div>
                  <div>    - destination:</div>
                  <div>        host: myapp</div>
                  <div>        subset: canary</div>
                  <div>      weight: 10  # Start with 10% traffic</div>
                </div>
                <div className="text-xs text-green-600">
                  <strong>Benefits:</strong> Risk mitigation, A/B testing, automated rollback on metrics
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2 text-purple-600">Feature Flags Integration</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Decouple deployment from release using feature flags for controlled feature rollouts.
                </p>
                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                  <div># Feature flag pipeline integration</div>
                  <div>deploy_production:</div>
                  <div>  stage: deploy</div>
                  <div>  script:</div>
                  <div>    - kubectl apply -f k8s/</div>
                  <div>    - # Deploy with feature disabled by default</div>
                  <div>    - curl -X POST "$FEATURE_FLAG_API/flags/new-checkout" \</div>
                  <div>      -H "Authorization: Bearer $FF_TOKEN" \</div>
                  <div>      -d '&lbrace;"enabled": false, "rollout": 0&rbrace;'</div>
                  <div>  </div>
                  <div>enable_feature:</div>
                  <div>  stage: release</div>
                  <div>  when: manual</div>
                  <div>  script:</div>
                  <div>    - # Gradual rollout: 5% → 25% → 50% → 100%</div>
                  <div>    - ./gradual-rollout.sh new-checkout</div>
                </div>
                <div className="text-xs text-purple-600">
                  <strong>Benefits:</strong> Deployment decoupling, instant rollback, targeted releases
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg p-6 shadow-sm border">
            <h2 className="text-2xl font-semibold mb-4">Pipeline Security & Compliance</h2>
            
            <div className="space-y-4">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="font-semibold text-red-800 mb-2">Security Scanning Integration</h3>
                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                  <div>security_scan:</div>
                  <div>  stage: security</div>
                  <div>  parallel:</div>
                  <div>    matrix:</div>
                  <div>      - SCAN_TYPE: [sast, dast, dependency, secrets]</div>
                  <div>  script:</div>
                  <div>    - |</div>
                  <div>      case $SCAN_TYPE in</div>
                  <div>        sast)</div>
                  <div>          sonar-scanner -Dsonar.qualitygate.wait=true</div>
                  <div>          ;;</div>
                  <div>        dast)</div>
                  <div>          zap-baseline.py -t $STAGING_URL</div>
                  <div>          ;;</div>
                  <div>        dependency)</div>
                  <div>          safety check -r requirements.txt</div>
                  <div>          ;;</div>
                  <div>        secrets)</div>
                  <div>          truffleHog --regex --entropy=False .</div>
                  <div>          ;;</div>
                  <div>      esac</div>
                  <div>  allow_failure:</div>
                  <div>    exit_codes: [1, 2]  # Non-critical vulnerabilities</div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-blue-800 mb-2">Compliance and Audit Trail</h3>
                <div className="text-sm text-blue-700 space-y-2">
                  <div>• <strong>Change Approval:</strong> Require manual approval for production deployments</div>
                  <div>• <strong>Audit Logging:</strong> Log all pipeline executions with user attribution</div>
                  <div>• <strong>Evidence Collection:</strong> Store test results, security scans, and deployment artifacts</div>
                  <div>• <strong>Compliance Reports:</strong> Generate reports for SOX, PCI-DSS, HIPAA compliance</div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg p-6 shadow-sm border">
            <h2 className="text-2xl font-semibold mb-4">Practice Exercise</h2>
            <div className="bg-gray-50 border rounded-lg p-4">
              <h3 className="font-semibold mb-2">Exercise 3: Enterprise CI/CD Design</h3>
              <p className="text-gray-700 text-sm mb-3">
                Design a comprehensive CI/CD solution for a large enterprise with strict requirements.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Requirements:</strong> Multi-cloud deployment, 100+ microservices, 
                SOX compliance, zero-downtime deployments, 99.99% availability.
                <br /><br />
                <strong>Deliverables:</strong>
                <ol className="list-decimal list-inside mt-2 space-y-1">
                  <li>High-level architecture diagram and component selection</li>
                  <li>Pipeline template library with reusable components</li>
                  <li>Security and compliance integration strategy</li>
                  <li>Deployment strategy comparison (Blue-Green vs Canary)</li>
                  <li>Monitoring, alerting, and incident response plan</li>
                </ol>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default CICDPage;