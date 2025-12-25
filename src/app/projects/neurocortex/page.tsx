import React from 'react';
import Link from 'next/link';

export default function NeurocortexProject() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-8">
        <Link href="/" className="text-blue-600 hover:underline inline-flex items-center">
          ← Back to Home
        </Link>
      </div>
      
      <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
        NeuroCortex-Lab - AI Orchestration Engine
      </h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-8">
          A modular, on-device multi-model inference engine enabling dynamic routing, offline reasoning, and multi-agent coordination for AI workflows.
        </p>
        
        <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">
            Project Highlights
          </h2>
          <ul className="list-disc pl-6 text-slate-700 dark:text-slate-300 space-y-2">
            <li>Engineered a modular, on-device multi-model inference engine</li>
            <li>Enabled dynamic routing between different AI models</li>
            <li>Implemented offline reasoning capabilities</li>
            <li>Designed multi-agent coordination system</li>
            <li>Created intent-detection logic for optimal model selection</li>
            <li>Optimized for reasoning, coding, writing, and research workflows</li>
          </ul>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-4">
            Technical Details
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium text-slate-800 dark:text-slate-200 mb-2">Architecture</h3>
              <p className="text-slate-700 dark:text-slate-300">
                The system features a modular architecture that allows for easy integration of new models and workflows. 
                The dynamic routing system intelligently selects the most appropriate model based on the input type and 
                required processing, ensuring optimal performance and accuracy.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-medium text-slate-800 dark:text-slate-200 mb-2">Key Features</h3>
              <ul className="list-disc pl-6 text-slate-700 dark:text-slate-300 space-y-2">
                <li>On-device processing for enhanced privacy and reduced latency</li>
                <li>Seamless model switching based on task requirements</li>
                <li>Multi-agent system for complex problem-solving</li>
                <li>Custom intent detection for workflow optimization</li>
                <li>Support for various AI/ML models and frameworks</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-100 dark:border-blue-800/50">
          <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-3">Technologies Used</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">Python</span>
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">TensorFlow</span>
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">PyTorch</span>
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">ONNX Runtime</span>
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">Docker</span>
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">Kubernetes</span>
          </div>
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
