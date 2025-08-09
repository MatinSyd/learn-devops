import React, { useState } from 'react';
import { GitBranch, Code, Users, AlertTriangle } from 'lucide-react';

const GitPage = () => {
  const [activeLevel, setActiveLevel] = useState('beginner');

  const levels = [
    { id: 'beginner', label: 'Beginner', description: 'Git basics' },
    { id: 'intermediate', label: 'Intermediate', description: 'Branching strategies' },
    { id: 'advanced', label: 'Advanced', description: 'Advanced workflows' }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Git & GitHub</h1>
        <p className="text-xl text-gray-600">
          Master version control and collaborative development with Git and GitHub
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
              <GitBranch className="mr-3 text-blue-600" size={24} />
              What is Git?
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Git is a distributed version control system that tracks changes in source code during 
              software development. It allows multiple developers to work on the same project simultaneously 
              and keeps a complete history of all changes.
            </p>

            <h3 className="text-lg font-semibold mb-3">Key Concepts:</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {[
                { term: 'Repository', definition: 'A storage location for your project files and history' },
                { term: 'Commit', definition: 'A snapshot of your project at a specific point in time' },
                { term: 'Branch', definition: 'A parallel version of your repository' },
                { term: 'Merge', definition: 'Combining changes from different branches' },
                { term: 'Clone', definition: 'Creating a local copy of a remote repository' },
                { term: 'Pull', definition: 'Fetching and merging changes from a remote repository' }
              ].map((concept, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900">{concept.term}</h4>
                  <p className="text-gray-700 text-sm mt-1">{concept.definition}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-lg p-6 shadow-sm border">
            <h2 className="text-2xl font-semibold mb-4">Basic Git Commands</h2>
            <p className="text-gray-700 mb-6">
              Here are the essential Git commands every developer should know:
            </p>

            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4 bg-green-50 p-4 rounded-r-lg">
                <h3 className="font-semibold text-green-900 mb-2">Repository Setup</h3>
                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                  <div># Initialize a new Git repository</div>
                  <div>git init</div>
                  <div></div>
                  <div># Clone an existing repository</div>
                  <div>git clone https://github.com/user/repo.git</div>
                </div>
              </div>

              <div className="border-l-4 border-blue-500 pl-4 bg-blue-50 p-4 rounded-r-lg">
                <h3 className="font-semibold text-blue-900 mb-2">Basic Workflow</h3>
                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                  <div># Check repository status</div>
                  <div>git status</div>
                  <div></div>
                  <div># Add files to staging area</div>
                  <div>git add filename.txt</div>
                  <div>git add .  # Add all files</div>
                  <div></div>
                  <div># Commit changes</div>
                  <div>git commit -m "Your commit message"</div>
                  <div></div>
                  <div># Push to remote repository</div>
                  <div>git push origin main</div>
                </div>
              </div>

              <div className="border-l-4 border-purple-500 pl-4 bg-purple-50 p-4 rounded-r-lg">
                <h3 className="font-semibold text-purple-900 mb-2">Viewing History</h3>
                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                  <div># View commit history</div>
                  <div>git log</div>
                  <div>git log --oneline  # Condensed view</div>
                  <div></div>
                  <div># View changes</div>
                  <div>git diff</div>
                  <div>git diff --staged  # View staged changes</div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg p-6 shadow-sm border">
            <h2 className="text-2xl font-semibold mb-4">GitHub Basics</h2>
            <p className="text-gray-700 mb-6">
              GitHub is a web-based platform that hosts Git repositories and provides collaboration features.
            </p>

            <h3 className="text-lg font-semibold mb-3">Key GitHub Features:</h3>
            <div className="space-y-3 mb-6">
              {[
                { feature: 'Pull Requests', description: 'Propose and review changes before merging' },
                { feature: 'Issues', description: 'Track bugs, feature requests, and tasks' },
                { feature: 'Actions', description: 'Automate workflows with CI/CD' },
                { feature: 'Wiki', description: 'Document your project' },
                { feature: 'Releases', description: 'Package and distribute software versions' }
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                  <div>
                    <span className="font-semibold text-gray-900">{item.feature}:</span>
                    <span className="text-gray-700 ml-2">{item.description}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-start">
                <AlertTriangle className="text-yellow-600 mr-2 mt-1" size={16} />
                <div>
                  <h4 className="font-semibold text-yellow-800">Best Practice</h4>
                  <p className="text-yellow-700 text-sm mt-1">
                    Always write clear, descriptive commit messages. Use the imperative mood: 
                    "Add feature" not "Added feature" or "Adding feature".
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg p-6 shadow-sm border">
            <h2 className="text-2xl font-semibold mb-4">Practice Exercise</h2>
            <div className="bg-gray-50 border rounded-lg p-4">
              <h3 className="font-semibold mb-2">Exercise 1: Your First Repository</h3>
              <p className="text-gray-700 text-sm mb-3">
                Create your first Git repository and practice basic commands.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Steps:</strong>
                <ol className="list-decimal list-inside mt-2 space-y-1">
                  <li>Create a new directory and initialize Git</li>
                  <li>Create a README.md file with project description</li>
                  <li>Add and commit the file</li>
                  <li>Create a GitHub repository and push your code</li>
                  <li>Make another change and push again</li>
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
            <h2 className="text-2xl font-semibold mb-4">Git Branching Strategies</h2>
            <p className="text-gray-700 mb-6">
              Effective branching strategies are crucial for team collaboration and maintaining code quality.
            </p>

            <div className="space-y-6">
              <div className="border rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2 text-blue-600">Git Flow</h3>
                <p className="text-gray-700 text-sm mb-3">
                  A branching model designed around project releases with specific branch types.
                </p>
                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-3">
                  <div># Create and switch to feature branch</div>
                  <div>git checkout -b feature/user-authentication</div>
                  <div></div>
                  <div># Work on feature and commit changes</div>
                  <div>git add .</div>
                  <div>git commit -m "Add user login functionality"</div>
                  <div></div>
                  <div># Merge back to develop</div>
                  <div>git checkout develop</div>
                  <div>git merge feature/user-authentication</div>
                  <div>git branch -d feature/user-authentication</div>
                </div>
                <div className="text-sm text-gray-600">
                  <strong>Branch Types:</strong> main, develop, feature/*, release/*, hotfix/*
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2 text-green-600">GitHub Flow</h3>
                <p className="text-gray-700 text-sm mb-3">
                  A simpler workflow focused on continuous deployment.
                </p>
                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-3">
                  <div># Create feature branch from main</div>
                  <div>git checkout main</div>
                  <div>git pull origin main</div>
                  <div>git checkout -b feature/new-feature</div>
                  <div></div>
                  <div># Make changes and create pull request</div>
                  <div>git push origin feature/new-feature</div>
                  <div># Open pull request on GitHub</div>
                </div>
                <div className="text-sm text-gray-600">
                  <strong>Workflow:</strong> Branch → Add commits → Open PR → Deploy → Merge
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg p-6 shadow-sm border">
            <h2 className="text-2xl font-semibold mb-4">Advanced Git Commands</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 text-purple-600">Rebasing</h3>
                <p className="text-gray-700 text-sm mb-2">
                  Reapply commits on top of another base tip for a cleaner history.
                </p>
                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                  <div># Interactive rebase to clean up commits</div>
                  <div>git rebase -i HEAD~3</div>
                  <div></div>
                  <div># Rebase feature branch onto main</div>
                  <div>git checkout feature-branch</div>
                  <div>git rebase main</div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2 text-red-600">Cherry-picking</h3>
                <p className="text-gray-700 text-sm mb-2">
                  Apply specific commits from one branch to another.
                </p>
                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                  <div># Apply specific commit to current branch</div>
                  <div>git cherry-pick commit-hash</div>
                  <div></div>
                  <div># Cherry-pick a range of commits</div>
                  <div>git cherry-pick commit1..commit3</div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2 text-yellow-600">Stashing</h3>
                <p className="text-gray-700 text-sm mb-2">
                  Temporarily store changes without committing them.
                </p>
                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                  <div># Stash current changes</div>
                  <div>git stash</div>
                  <div>git stash push -m "Work in progress"</div>
                  <div></div>
                  <div># List and apply stashes</div>
                  <div>git stash list</div>
                  <div>git stash pop</div>
                  <div>git stash apply stash@{'{0}'}</div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg p-6 shadow-sm border">
            <h2 className="text-2xl font-semibent mb-4">Pull Request Best Practices</h2>
            
            <div className="space-y-4 mb-6">
              {[
                {
                  title: 'Write Clear Titles and Descriptions',
                  description: 'Explain what changes you made and why',
                  example: 'Title: "Add user authentication with JWT tokens"'
                },
                {
                  title: 'Keep PRs Small and Focused',
                  description: 'One feature or bug fix per pull request',
                  example: 'Max 400 lines of code changes when possible'
                },
                {
                  title: 'Link Issues and Use Keywords',
                  description: 'Connect PRs to issues for better tracking',
                  example: 'Description: "Closes #123" or "Fixes #456"'
                },
                {
                  title: 'Request Appropriate Reviewers',
                  description: 'Tag team members who understand the code area',
                  example: 'Request review from code owners or domain experts'
                }
              ].map((practice, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4 bg-blue-50 p-3 rounded-r-lg">
                  <h4 className="font-semibold text-blue-900">{practice.title}</h4>
                  <p className="text-blue-800 text-sm mt-1">{practice.description}</p>
                  <div className="text-xs text-blue-700 mt-2 italic">
                    {practice.example}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-lg p-6 shadow-sm border">
            <h2 className="text-2xl font-semibold mb-4">Practice Exercise</h2>
            <div className="bg-gray-50 border rounded-lg p-4">
              <h3 className="font-semibold mb-2">Exercise 2: Team Collaboration Workflow</h3>
              <p className="text-gray-700 text-sm mb-3">
                Practice a complete team workflow with branching, pull requests, and code reviews.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Scenario:</strong> You're working on a team project with 3 other developers.
                <br /><br />
                <strong>Tasks:</strong>
                <ol className="list-decimal list-inside mt-2 space-y-1">
                  <li>Create a feature branch for adding a contact form</li>
                  <li>Make commits with proper messages</li>
                  <li>Create a pull request with detailed description</li>
                  <li>Handle merge conflicts with main branch</li>
                  <li>Use interactive rebase to clean up commit history</li>
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
            <h2 className="text-2xl font-semibold mb-4">Git Hooks and Automation</h2>
            <p className="text-gray-700 mb-6">
              Git hooks allow you to run custom scripts at important Git events, 
              enabling automation and enforcing team standards.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Pre-commit Hook Example</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Automatically run tests and linting before each commit.
                </p>
                <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
                  <div>#!/bin/sh</div>
                  <div># .git/hooks/pre-commit</div>
                  <div></div>
                  <div>echo "Running pre-commit checks..."</div>
                  <div></div>
                  <div># Run linting</div>
                  <div>npm run lint</div>
                  <div>if [ $? -ne 0 ]; then</div>
                  <div>  echo "Linting failed. Please fix errors before committing."</div>
                  <div>  exit 1</div>
                  <div>fi</div>
                  <div></div>
                  <div># Run tests</div>
                  <div>npm test</div>
                  <div>if [ $? -ne 0 ]; then</div>
                  <div>  echo "Tests failed. Please fix tests before committing."</div>
                  <div>  exit 1</div>
                  <div>fi</div>
                  <div></div>
                  <div>echo "Pre-commit checks passed!"</div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Commit Message Templates</h3>
                <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
                  <div># ~/.gitmessage</div>
                  <div># &lt;type&gt;(&lt;scope&gt;): &lt;subject&gt;</div>
                  <div>#</div>
                  <div># &lt;body&gt;</div>
                  <div>#</div>
                  <div># &lt;footer&gt;</div>
                  <div>#</div>
                  <div># Types: feat, fix, docs, style, refactor, test, chore</div>
                  <div># Example: feat(auth): add JWT token validation</div>
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  Set with: <code className="bg-gray-200 px-2 py-1 rounded">git config commit.template ~/.gitmessage</code>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg p-6 shadow-sm border">
            <h2 className="text-2xl font-semibold mb-4">Advanced Git Workflows</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-purple-600">Monorepo Management</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Managing multiple projects in a single repository with Git subtrees and sparse-checkout.
                </p>
                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                  <div># Add subtree for external dependency</div>
                  <div>git subtree add --prefix=libs/external-lib \</div>
                  <div>  https://github.com/user/external-lib.git main --squash</div>
                  <div></div>
                  <div># Update subtree</div>
                  <div>git subtree pull --prefix=libs/external-lib \</div>
                  <div>  https://github.com/user/external-lib.git main --squash</div>
                  <div></div>
                  <div># Sparse checkout for large repos</div>
                  <div>git config core.sparseCheckout true</div>
                  <div>echo "src/frontend/*" &gt; .git/info/sparse-checkout</div>
                  <div>git read-tree -m -u HEAD</div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-blue-600">Release Management</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Automated release processes with semantic versioning and changelog generation.
                </p>
                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                  <div># Create release branch</div>
                  <div>git checkout -b release/v2.1.0</div>
                  <div></div>
                  <div># Update version and changelog</div>
                  <div>npm version minor</div>
                  <div>conventional-changelog -p angular -i CHANGELOG.md -s</div>
                  <div></div>
                  <div># Tag and push release</div>
                  <div>git add .</div>
                  <div>git commit -m "chore(release): 2.1.0"</div>
                  <div>git tag v2.1.0</div>
                  <div>git push origin release/v2.1.0 --tags</div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg p-6 shadow-sm border">
            <h2 className="text-2xl font-semibold mb-4">Git Performance Optimization</h2>
            
            <div className="space-y-4">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="font-semibold text-yellow-800 mb-2">Large Repository Optimization</h3>
                <div className="text-sm text-yellow-700 space-y-2">
                  <div className="bg-gray-900 text-green-400 p-3 rounded font-mono">
                    <div># Reduce repository size</div>
                    <div>git gc --aggressive --prune=now</div>
                    <div></div>
                    <div># Remove large files from history</div>
                    <div>git filter-branch --tree-filter 'rm -rf large-directory' HEAD</div>
                    <div></div>
                    <div># Use Git LFS for large files</div>
                    <div>git lfs track "*.psd"</div>
                    <div>git add .gitattributes</div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-blue-800 mb-2">Performance Configuration</h3>
                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                  <div># Enable parallel processing</div>
                  <div>git config core.preloadindex true</div>
                  <div>git config core.fscache true</div>
                  <div>git config gc.auto 256</div>
                  <div></div>
                  <div># Optimize for Windows</div>
                  <div>git config core.autocrlf true</div>
                  <div>git config core.filemode false</div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg p-6 shadow-sm border">
            <h2 className="text-2xl font-semibold mb-4">Practice Exercise</h2>
            <div className="bg-gray-50 border rounded-lg p-4">
              <h3 className="font-semibold mb-2">Exercise 3: Enterprise Git Setup</h3>
              <p className="text-gray-700 text-sm mb-3">
                Design and implement a complete Git workflow for an enterprise team.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Requirements:</strong> 20+ developers, multiple environments, 
                compliance requirements, automated testing.
                <br /><br />
                <strong>Deliverables:</strong>
                <ol className="list-decimal list-inside mt-2 space-y-1">
                  <li>Branching strategy documentation</li>
                  <li>Git hooks for automated quality checks</li>
                  <li>Release process with semantic versioning</li>
                  <li>Repository structure and monorepo strategy</li>
                  <li>Training materials for team members</li>
                </ol>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default GitPage;