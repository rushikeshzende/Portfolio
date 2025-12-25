import React from 'react';
import Link from 'next/link';

export default function ParkinsonsDiseaseDetection() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-8">
        <Link href="/" className="text-blue-600 hover:underline inline-flex items-center">
          ← Back to Home
        </Link>
      </div>
      
      <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
        Parkinson's Disease Detection
      </h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-8">
          A hybrid ML/DL pipeline analyzing spiral and wave drawings to detect early signs of Parkinson's disease through neuromotor degradation analysis.
        </p>
        
        <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">
            Project Highlights
          </h2>
          <ul className="list-disc pl-6 text-slate-700 dark:text-slate-300 space-y-2">
            <li>Developed a hybrid ML/DL pipeline for early Parkinson's detection</li>
            <li>Analyzed spiral and wave drawings to detect neuromotor degradation</li>
            <li>Implemented custom CNN feature extraction combined with SVM classification</li>
            <li>Utilized LIME (Local Interpretable Model-Agnostic Explanations) for model interpretability</li>
            <li>Achieved improved detection accuracy through the hybrid approach</li>
          </ul>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-4">
            Technical Implementation
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium text-slate-800 dark:text-slate-200 mb-2">Approach</h3>
              <p className="text-slate-700 dark:text-slate-300">
                The project combines the strengths of deep learning for feature extraction and traditional machine learning for classification.
                The CNN extracts relevant features from the drawings, which are then used by the SVM for classification, resulting in a robust
                and interpretable model for early Parkinson's detection.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-medium text-slate-800 dark:text-slate-200 mb-2">Key Components</h3>
              <ul className="list-disc pl-6 text-slate-700 dark:text-slate-300 space-y-2">
                <li>Data collection and preprocessing of spiral and wave drawings</li>
                <li>Custom CNN architecture for feature extraction</li>
                <li>SVM classifier with optimized hyperparameters</li>
                <li>LIME implementation for model interpretability</li>
                <li>Performance evaluation and validation</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-100 dark:border-green-800/50">
          <h3 className="text-xl font-semibold text-green-800 dark:text-green-300 mb-3">Technologies Used</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">Python</span>
            <span className="px-3 py-1 bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">TensorFlow</span>
            <span className="px-3 py-1 bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">scikit-learn</span>
            <span className="px-3 py-1 bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">OpenCV</span>
            <span className="px-3 py-1 bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">LIME</span>
            <span className="px-3 py-1 bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">NumPy</span>
            <span className="px-3 py-1 bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">Pandas</span>
          </div>
        </div>
        
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
