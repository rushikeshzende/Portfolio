import React from 'react';
import Link from 'next/link';

export default function ParkiScan() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-sm font-medium text-blue-700 dark:text-blue-300 mb-6">
          <span className="mr-2">🚀</span> Medical AI Project
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            ParkiScan
          </h1>
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
            <a
              href="https://github.com/rushikeshzende/ParkiScan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium rounded-lg transition-colors duration-200 dark:bg-white/10 dark:hover:bg-white/20"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.58.688.482C19.14 20.19 22 16.44 22 12.017 22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              View on GitHub
            </a>
            <span className="text-sm text-slate-500 dark:text-slate-400">
              Open Source Project
            </span>
          </div>
        </div>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Revolutionizing early Parkinson's detection through advanced AI analysis of <span className="font-medium text-slate-800 dark:text-slate-200">speech patterns</span> and <span className="font-medium text-slate-800 dark:text-slate-200">movement signatures</span>—before visible symptoms appear.
        </p>
      </div>

      {/* Overview Section */}
      <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-8 mb-16 shadow-lg border border-slate-100 dark:border-slate-700/50">
        <div className="flex items-center mb-8">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 mr-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            The Future of Neurological Screening
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              <span className="font-medium text-slate-900 dark:text-white">ParkiScan represents a paradigm shift</span> in neurological health monitoring. By leveraging subtle changes in speech patterns, fine motor control, and movement dynamics, our system identifies biomarkers of Parkinson's disease <span className="font-medium text-blue-600 dark:text-blue-400">years before traditional diagnosis</span> becomes possible.
            </p>
            <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              Unlike conventional methods that rely on visible symptoms, our AI-driven approach detects <span className="font-medium text-purple-600 dark:text-purple-400">micro-changes in neurological function</span> that are imperceptible to the human eye but reveal critical insights into early disease progression.
            </p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
            <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-3 flex items-center">
              <span className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-300 mr-2 text-sm">1</span>
              How It Works
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span className="text-slate-700 dark:text-slate-300">Voice analysis for <span className="font-medium">speech pattern</span> changes</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span className="text-slate-700 dark:text-slate-300">Motion tracking for <span className="font-medium">micro-movements</span> analysis</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">•</span>
                <span className="text-slate-700 dark:text-slate-300">AI-powered <span className="font-medium">predictive modeling</span></span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 mr-2">•</span>
                <span className="text-slate-700 dark:text-slate-300">Comprehensive <span className="font-medium">risk assessment</span> dashboard</span>
              </li>
            </ul>
          </div>
        </div>

      {/* Problem Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 md:p-12 mb-16">
        <div className="absolute -right-10 -top-10 w-64 h-64 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        <div className="absolute -left-10 -bottom-10 w-64 h-64 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        
        <div className="relative z-10">
          <div className="flex items-center mb-8">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm text-blue-600 dark:text-blue-300 mr-4 border border-blue-200 dark:border-blue-800">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              The Diagnostic Gap in Parkinson's Care
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-3">Current Challenges</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span className="text-slate-700 dark:text-slate-300">Diagnosis typically occurs <span className="font-medium">5-10 years</span> after disease onset</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span className="text-slate-700 dark:text-slate-300">Reliance on subjective <span className="font-medium">clinical assessments</span></span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span className="text-slate-700 dark:text-slate-300">Limited access to <span className="font-medium">specialist care</span> in rural areas</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-3">Our Solution</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span className="text-slate-700 dark:text-slate-300">Non-invasive, <span className="font-medium">at-home screening</span> capabilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span className="text-slate-700 dark:text-slate-300">Objective, <span className="font-medium">data-driven assessments</span></span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span className="text-slate-700 dark:text-slate-300">Scalable for <span className="font-medium">population-level screening</span></span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl border border-white/30">
            <p className="text-center text-slate-700 dark:text-slate-300 italic">
              "By the time Parkinson's is typically diagnosed, approximately <span className="font-semibold text-blue-600 dark:text-blue-400">60-80% of dopamine-producing cells</span> are already lost. Early detection could transform treatment outcomes."
            </p>
          </div>
        </div>
      </div>

      {/* Differentiators Section */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent inline-block">
            Why ParkiScan Stands Out
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-3 max-w-2xl mx-auto">
            Our approach combines cutting-edge technology with clinical insights to create a truly unique solution
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: (
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              ),
              title: "Non-Invasive Data Collection",
              description: "Uses voice recordings and simple movement tasks that can be performed at home without specialized equipment."
            },
            {
              icon: (
                <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              ),
              title: "Early-Stage Detection",
              "description": "Identifies subtle biomarkers years before visible symptoms appear, enabling earlier intervention."
            },
            {
              icon: (
                <svg className="w-8 h-8 text-pink-600 dark:text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              ),
              title: "Hybrid AI Approach",
              description: "Combines the interpretability of classical machine learning with the power of deep learning for optimal performance."
            },
            {
              icon: (
                <svg className="w-8 h-8 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              ),
              title: "Modular Architecture",
              description: "Designed as an extensible platform that can incorporate new data sources and algorithms as they become available."
            },
            {
              icon: (
                <svg className="w-8 h-8 text-cyan-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              ),
              title: "Clinical Validation",
              description: "Developed in collaboration with neurologists and validated against gold-standard clinical assessments."
            },
            {
              icon: (
                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              ),
              title: "Privacy-First",
              description: "Implements state-of-the-art security measures to protect sensitive health data with end-to-end encryption."
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-opacity-10 mb-4" style={{ backgroundColor: `${feature.icon.props.className.includes('text-blue') ? 'rgba(37, 99, 235, 0.1)' : feature.icon.props.className.includes('text-purple') ? 'rgba(147, 51, 234, 0.1)' : feature.icon.props.className.includes('text-pink') ? 'rgba(219, 39, 119, 0.1)' : feature.icon.props.className.includes('text-indigo') ? 'rgba(79, 70, 229, 0.1)' : feature.icon.props.className.includes('text-cyan') ? 'rgba(8, 145, 178, 0.1)' : 'rgba(5, 150, 105, 0.1)'}` }}>
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-slate-600 dark:text-slate-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Impact & Vision Section */}
      <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-900 dark:to-slate-800 text-white rounded-2xl p-8 md:p-12 mb-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(0deg,white,transparent)]"></div>
        <div className="relative z-10">
          <div className="flex items-center mb-8">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm text-white mr-4 border border-white/20">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Our Vision for the Future
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-slate-200 mb-6 leading-relaxed">
                ParkiScan represents more than just a diagnostic tool—it's a fundamental shift in how we approach neurological health. Our vision is to create a future where Parkinson's disease can be detected and managed before it significantly impacts quality of life.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-500 text-white text-sm font-medium">1</div>
                  </div>
                  <p className="ml-3 text-slate-200">
                    <span className="font-medium text-white">Early Intervention:</span> Enable treatment to begin when it can be most effective, potentially slowing or preventing disease progression.
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-purple-500 text-white text-sm font-medium">2</div>
                  </div>
                  <p className="ml-3 text-slate-200">
                    <span className="font-medium text-white">Democratized Access:</span> Make neurological health screening accessible to everyone, regardless of location or socioeconomic status.
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-pink-500 text-white text-sm font-medium">3</div>
                  </div>
                  <p className="ml-3 text-slate-200">
                    <span className="font-medium text-white">Research Acceleration:</span> Provide researchers with valuable longitudinal data to better understand Parkinson's progression and develop new treatments.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <h3 className="font-semibold text-lg text-white mb-4 flex items-center">
                <svg className="w-5 h-5 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                The Bigger Picture
              </h3>
              <p className="text-slate-300 mb-4">
                Beyond early detection, ParkiScan is building the infrastructure for a new era of preventive neurology. By establishing baseline neurological health metrics, we're creating the foundation for:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-slate-300">Personalized <span className="text-white font-medium">risk assessment</span> models</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span className="text-slate-300">Objective <span className="text-white font-medium">treatment monitoring</span> tools</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">•</span>
                  <span className="text-slate-300">Data-driven <span className="text-white font-medium">therapeutic development</span></span>
                </li>
              </ul>
              
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-sm text-slate-400">
                  "Our goal isn't just to detect Parkinson's earlier, but to fundamentally change the trajectory of how we understand and manage neurological health."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Implementation */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
          Technical Implementation
        </h2>
        
        <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-lg border border-slate-200 dark:border-slate-700 mb-8">
          <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-4">Project Stack</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              { name: 'Python 3.8', purpose: 'Core programming' },
              { name: 'TensorFlow 2.x', purpose: 'Deep learning models' },
              { name: 'scikit-learn', purpose: 'Traditional ML' },
              { name: 'OpenCV', purpose: 'Image processing' },
              { name: 'Pillow', purpose: 'Image manipulation' },
              { name: 'Flask', purpose: 'Web interface' },
            ].map((tech, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="font-medium text-slate-900 dark:text-white">{tech.name}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">{tech.purpose}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-3">Data Collection</h3>
            <ul className="list-disc pl-6 space-y-2 text-slate-700 dark:text-slate-300">
              <li>Handwriting samples (spiral and wave patterns) from public datasets</li>
              <li>Basic demographic and clinical metadata</li>
              <li>Total dataset: ~800 samples (80% training, 20% testing)</li>
              <li>Data augmentation techniques applied to increase sample diversity</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-3">Model Architecture</h3>
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
              <h4 className="font-medium text-slate-900 dark:text-white mb-2">Handwriting Analysis Pipeline</h4>
              <ul className="list-disc pl-6 space-y-1 text-slate-700 dark:text-slate-300 text-sm">
                <li>Preprocessing: Image enhancement, noise reduction, normalization</li>
                <li>Feature extraction: Writing pressure, stroke width, tremor patterns</li>
                <li>Model: Custom CNN with spatial attention</li>
                <li>Validation: Stratified 5-fold cross-validation</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-3">Performance</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">82.4%</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Accuracy</div>
                <div className="text-xs text-slate-500 dark:text-slate-500 mt-1">(5-fold CV)</div>
              </div>
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">0.81</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">AUC-ROC</div>
                <div className="text-xs text-slate-500 dark:text-slate-500 mt-1">(Test set)</div>
              </div>
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">0.79</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">F1 Score</div>
                <div className="text-xs text-slate-500 dark:text-slate-500 mt-1">(Balanced classes)</div>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400 p-4 rounded-r">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-amber-800 dark:text-amber-200">Current Limitations</h3>
                <div className="mt-2 text-sm text-amber-700 dark:text-amber-300">
                  <p>This is a research prototype with several limitations:</p>
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>Limited to specific handwriting patterns (spirals and waves)</li>
                    <li>Not yet validated in clinical settings</li>
                    <li>Performance may vary with different writing instruments and surfaces</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-700 dark:to-indigo-800 rounded-2xl p-8 md:p-12 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Join the Future of Neurological Health</h2>
          <p className="text-blue-100 dark:text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
            Be part of the movement to transform Parkinson's care through early detection and intervention.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#contact" 
              className="px-8 py-3 bg-white text-blue-700 font-medium rounded-lg hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Our Team
            </a>
            <a 
              href="#demo" 
              className="px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors duration-200 flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Request a Demo
            </a>
          </div>
          <p className="text-blue-200 dark:text-blue-300 text-sm mt-6">
            For research partnerships, clinical trials, or investment inquiries
          </p>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <span className="text-slate-900 dark:text-white font-bold text-xl mr-2">ParkiScan</span>
            <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-2 py-0.5 rounded-full">v1.0.0</span>
          </div>
          <div className="flex space-x-6">
            <a href="#privacy" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#research" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
              Research
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800 text-center text-slate-500 dark:text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} ParkiScan. All rights reserved.</p>
          <p className="mt-2">This tool is intended for research use only and is not a diagnostic device.</p>
        </div>
      </footer>
        
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
          <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-4">Impact</h3>
          <p className="text-slate-700 dark:text-slate-300">
            This project demonstrates the potential of combining deep learning and traditional machine learning techniques
            for medical diagnosis. The hybrid approach not only improves detection accuracy but also provides interpretable
            results that can assist healthcare professionals in early diagnosis and intervention for Parkinson's disease.
          </p>
        </div>

        {/* Footer Navigation */}
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-slate-900 dark:bg-slate-700 text-white rounded-lg hover:bg-slate-800 dark:hover:bg-slate-600 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Explore more projects from the home page
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
