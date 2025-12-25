import React from 'react';
import Link from 'next/link';

export default function CustomMLModels() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-8">
        <Link href="/" className="text-blue-600 hover:underline inline-flex items-center">
          ← Back to Home
        </Link>
      </div>
      
      <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
        Custom ML/DL Model Development
      </h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-8">
          A collection of custom machine learning and deep learning models built from scratch, demonstrating expertise in model architecture design, training, and deployment.
        </p>
        
        <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">
            Core Competencies
          </h2>
          <ul className="list-disc pl-6 text-slate-700 dark:text-slate-300 space-y-2">
            <li>Training custom ML/DL models from scratch for various tasks</li>
            <li>Implementing low-level training loops and optimization techniques</li>
            <li>Designing and implementing custom neural network architectures</li>
            <li>Developing data augmentation pipelines for improved model generalization</li>
            <li>Creating robust evaluation frameworks for model assessment</li>
            <li>Deploying models in production environments</li>
          </ul>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-4">
            Project Showcase
          </h2>
          
          <div className="space-y-8">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
                Custom CNN Architectures
              </h3>
              <p className="text-slate-700 dark:text-slate-300 mb-3">
                Developed various CNN architectures for computer vision tasks including image classification, object detection, and segmentation.
              </p>
              <ul className="list-disc pl-6 text-slate-700 dark:text-slate-300 space-y-1 text-sm">
                <li>Custom ResNet and DenseNet variants for specialized image recognition</li>
                <li>Lightweight architectures for edge device deployment</li>
                <li>Attention mechanisms for improved feature extraction</li>
                <li>Transfer learning frameworks for domain adaptation</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
                NLP Models
              </h3>
              <p className="text-slate-700 dark:text-slate-300 mb-3">
                Built and trained models for various natural language processing tasks.
              </p>
              <ul className="list-disc pl-6 text-slate-700 dark:text-slate-300 space-y-1 text-sm">
                <li>Custom transformer architectures for text classification</li>
                <li>Sequence-to-sequence models for machine translation</li>
                <li>Named entity recognition systems</li>
                <li>Sentiment analysis models with attention mechanisms</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
                Time Series Forecasting
              </h3>
              <p className="text-slate-700 dark:text-slate-300 mb-3">
                Developed models for predicting temporal patterns in various domains.
              </p>
              <ul className="list-disc pl-6 text-slate-700 dark:text-slate-300 space-y-1 text-sm">
                <li>LSTM and GRU-based sequence models</li>
                <li>Temporal Convolutional Networks (TCN)</li>
                <li>Attention mechanisms for long-range dependencies</li>
                <li>Multivariate time series forecasting</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-lg border border-emerald-100 dark:border-emerald-800/50 mb-8">
          <h3 className="text-xl font-semibold text-emerald-800 dark:text-emerald-300 mb-3">Technical Skills</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-200 rounded-full text-sm font-medium">Python</span>
            <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-200 rounded-full text-sm font-medium">PyTorch</span>
            <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-200 rounded-full text-sm font-medium">TensorFlow</span>
            <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-200 rounded-full text-sm font-medium">scikit-learn</span>
            <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-200 rounded-full text-sm font-medium">NumPy</span>
            <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-200 rounded-full text-sm font-medium">Pandas</span>
            <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-200 rounded-full text-sm font-medium">OpenCV</span>
            <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-200 rounded-full text-sm font-medium">Transformers</span>
          </div>
        </div>
        
        <div className="bg-sky-50 dark:bg-sky-900/10 p-6 rounded-lg border border-sky-100 dark:border-sky-800/50">
          <h3 className="text-xl font-semibold text-sky-800 dark:text-sky-300 mb-3">Methodologies & Best Practices</h3>
          <ul className="list-disc pl-6 text-slate-700 dark:text-slate-300 space-y-2">
            <li>End-to-end machine learning pipeline development</li>
            <li>Model optimization and hyperparameter tuning</li>
            <li>Experiment tracking and model versioning</li>
            <li>Model interpretability and explainability techniques</li>
            <li>Model deployment and serving</li>
            <li>Performance optimization for production environments</li>
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
