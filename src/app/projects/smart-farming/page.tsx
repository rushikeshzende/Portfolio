import React from 'react';
import Link from 'next/link';

export default function SmartFarming() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-8">
        <Link href="/" className="text-blue-600 hover:underline inline-flex items-center">
          ← Back to Home
        </Link>
      </div>
      
      <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
        Smart Farming - Real-Time Leaf Disease Detection
      </h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-8">
          A deep learning-based solution for real-time detection of plant diseases from leaf images, helping farmers identify and address crop health issues early.
        </p>
        
        <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">
            Project Highlights
          </h2>
          <ul className="list-disc pl-6 text-slate-700 dark:text-slate-300 space-y-2">
            <li>Developed a CNN-based classifier for multi-class plant disease recognition</li>
            <li>Focused on major crop categories to assist farmers in early disease detection</li>
            <li>Deployed via Flask for easy access and usability in the field</li>
            <li>Enabled instant diagnosis through image uploads</li>
            <li>Improved crop yield and reduced pesticide use through early detection</li>
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
                The system consists of a deep learning model trained on a diverse dataset of plant leaf images,
                integrated with a user-friendly web interface that allows farmers to upload images and receive
                instant disease predictions and treatment recommendations.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-medium text-slate-800 dark:text-slate-200 mb-2">Key Features</h3>
              <ul className="list-disc pl-6 text-slate-700 dark:text-slate-300 space-y-2">
                <li>Real-time image processing and disease classification</li>
                <li>Support for multiple crop types and their common diseases</li>
                <li>Mobile-responsive web interface for field use</li>
                <li>Detailed disease information and treatment recommendations</li>
                <li>User authentication for tracking and history</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border border-purple-100 dark:border-purple-800/50 mb-8">
          <h3 className="text-xl font-semibold text-purple-800 dark:text-purple-300 mb-3">Technologies Used</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">Python</span>
            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">TensorFlow</span>
            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">Flask</span>
            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">OpenCV</span>
            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">HTML/CSS/JavaScript</span>
            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">SQLite</span>
          </div>
        </div>
        
        <div className="bg-yellow-50 dark:bg-yellow-900/10 p-6 rounded-lg border border-yellow-100 dark:border-yellow-800/50">
          <h3 className="text-xl font-semibold text-yellow-800 dark:text-yellow-200 mb-3">Impact & Results</h3>
          <ul className="list-disc pl-6 text-slate-700 dark:text-slate-300 space-y-2">
            <li>Enabled early detection of plant diseases, reducing crop losses</li>
            <li>Reduced unnecessary pesticide use through targeted treatment</li>
            <li>Improved crop yield and quality for farmers</li>
            <li>Provided educational resources about plant diseases and treatments</li>
            <li>Demonstrated the practical application of AI in agriculture</li>
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
