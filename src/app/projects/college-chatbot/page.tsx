import React from 'react';
import Link from 'next/link';

export default function CollegeChatbot() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-8">
        <Link href="/" className="text-blue-600 hover:underline inline-flex items-center">
          ← Back to Home
        </Link>
      </div>
      
      <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
        Smart College Enquiry Chatbot
      </h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-8">
          An intelligent chatbot system designed to handle college-related inquiries, providing instant responses to common questions about admissions, courses, and campus life.
        </p>
        
        <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">
            Project Highlights
          </h2>
          <ul className="list-disc pl-6 text-slate-700 dark:text-slate-300 space-y-2">
            <li>Developed a TensorFlow-powered multi-intent classifier</li>
            <li>Implemented dynamic keyword mapping for improved query understanding</li>
            <li>Created a fallback correction system for handling unrecognized queries</li>
            <li>Integrated with Django for seamless web application functionality</li>
            <li>Implemented session memory for context-aware conversations</li>
            <li>Developed database-driven automated Q&A workflows</li>
          </ul>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-4">
            Technical Implementation
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium text-slate-800 dark:text-slate-200 mb-2">System Architecture</h3>
              <p className="text-slate-700 dark:text-slate-300">
                The chatbot uses a combination of natural language processing techniques to understand and respond to user queries.
                The system processes incoming messages, classifies their intent, and generates appropriate responses using a
                combination of pattern matching and machine learning.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-medium text-slate-800 dark:text-slate-200 mb-2">Key Components</h3>
              <ul className="list-disc pl-6 text-slate-700 dark:text-slate-300 space-y-2">
                <li>Natural Language Understanding (NLU) module for intent classification</li>
                <li>Dynamic keyword mapping for query understanding</li>
                <li>Fallback mechanism for handling out-of-scope queries</li>
                <li>Session management for context-aware conversations</li>
                <li>Admin interface for managing knowledge base and responses</li>
                <li>Analytics dashboard for monitoring chatbot performance</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg border border-indigo-100 dark:border-indigo-800/50 mb-8">
          <h3 className="text-xl font-semibold text-indigo-800 dark:text-indigo-300 mb-3">Technologies Used</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-200 rounded-full text-sm font-medium">Python</span>
            <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-200 rounded-full text-sm font-medium">TensorFlow</span>
            <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-200 rounded-full text-sm font-medium">Django</span>
            <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-200 rounded-full text-sm font-medium">NLTK</span>
            <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-200 rounded-full text-sm font-medium">PostgreSQL</span>
            <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-200 rounded-full text-sm font-medium">JavaScript</span>
          </div>
        </div>
        
        <div className="bg-teal-50 dark:bg-teal-900/10 p-6 rounded-lg border border-teal-100 dark:border-teal-800/50">
          <h3 className="text-xl font-semibold text-teal-800 dark:text-teal-200 mb-3">Impact & Results</h3>
          <ul className="list-disc pl-6 text-slate-700 dark:text-slate-300 space-y-2">
            <li>Reduced administrative workload by handling routine inquiries automatically</li>
            <li>Provided 24/7 support to prospective and current students</li>
            <li>Improved response time for common questions</li>
            <li>Gathered valuable insights from user interactions to improve services</li>
            <li>Enhanced user experience with instant, accurate responses</li>
          </ul>
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
