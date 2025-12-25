import React from 'react';
import Link from 'next/link';

export default function FlightFarePrediction() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-8">
        <Link href="/" className="text-blue-600 hover:underline inline-flex items-center">
          ← Back to Home
        </Link>
      </div>
      
      <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
        Predictive Analytics: Dynamic Flight Fare Prediction
      </h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-8">
          A machine learning-based solution for predicting flight fares using various features like route, seasonality, and demand patterns.
        </p>
        
        <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">
            Project Highlights
          </h2>
          <ul className="list-disc pl-6 text-slate-700 dark:text-slate-300 space-y-2">
            <li>Developed forecasting models using XGBoost and Random Forest algorithms</li>
            <li>Engineered comprehensive features including route, season, and demand indicators</li>
            <li>Designed complete pre-processing pipelines for data cleaning and preparation</li>
            <li>Implemented outlier detection and removal techniques</li>
            <li>Created feature encoding systems for categorical variables</li>
          </ul>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-4">
            Technical Implementation
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium text-slate-800 dark:text-slate-200 mb-2">Data Pipeline</h3>
              <p className="text-slate-700 dark:text-slate-300">
                The project involved building a robust data pipeline that ingests raw flight data, processes it through various
                cleaning and transformation steps, and prepares it for model training. The pipeline includes handling missing values,
                feature engineering, and normalization to ensure high-quality input for the prediction models.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-medium text-slate-800 dark:text-slate-200 mb-2">Model Development</h3>
              <ul className="list-disc pl-6 text-slate-700 dark:text-slate-300 space-y-2">
                <li>Implemented and compared multiple regression models including XGBoost and Random Forest</li>
                <li>Performed hyperparameter tuning to optimize model performance</li>
                <li>Developed custom evaluation metrics specific to flight fare prediction</li>
                <li>Created ensemble methods to combine predictions from multiple models</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-medium text-slate-800 dark:text-slate-200 mb-2">Feature Engineering</h3>
              <p className="text-slate-700 dark:text-slate-300">
                The system incorporates various sophisticated features including:
              </p>
              <ul className="list-disc pl-6 text-slate-700 dark:text-slate-300 space-y-2 mt-2">
                <li>Temporal features (day of week, month, season, holidays)</li>
                <li>Route-specific features (distance, popularity, competition)</li>
                <li>Demand indicators (booking patterns, historical load factors)</li>
                <li>Market conditions and events</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-rose-50 dark:bg-rose-900/20 p-6 rounded-lg border border-rose-100 dark:border-rose-800/50 mb-8">
          <h3 className="text-xl font-semibold text-rose-800 dark:text-rose-300 mb-3">Technologies Used</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-rose-100 dark:bg-rose-900/50 text-rose-800 dark:text-rose-200 rounded-full text-sm font-medium">Python</span>
            <span className="px-3 py-1 bg-rose-100 dark:bg-rose-900/50 text-rose-800 dark:text-rose-200 rounded-full text-sm font-medium">XGBoost</span>
            <span className="px-3 py-1 bg-rose-100 dark:bg-rose-900/50 text-rose-800 dark:text-rose-200 rounded-full text-sm font-medium">scikit-learn</span>
            <span className="px-3 py-1 bg-rose-100 dark:bg-rose-900/50 text-rose-800 dark:text-rose-200 rounded-full text-sm font-medium">Pandas</span>
            <span className="px-3 py-1 bg-rose-100 dark:bg-rose-900/50 text-rose-800 dark:text-rose-200 rounded-full text-sm font-medium">NumPy</span>
            <span className="px-3 py-1 bg-rose-100 dark:bg-rose-900/50 text-rose-800 dark:text-rose-200 rounded-full text-sm font-medium">Matplotlib</span>
            <span className="px-3 py-1 bg-rose-100 dark:bg-rose-900/50 text-rose-800 dark:text-rose-200 rounded-full text-sm font-medium">Seaborn</span>
          </div>
        </div>
        
        <div className="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-lg border border-amber-100 dark:border-amber-800/50">
          <h3 className="text-xl font-semibold text-amber-800 dark:text-amber-200 mb-3">Impact & Results</h3>
          <ul className="list-disc pl-6 text-slate-700 dark:text-slate-300 space-y-2">
            <li>Developed models that accurately predict flight fares with high precision</li>
            <li>Enabled dynamic pricing strategies based on predictive analytics</li>
            <li>Provided valuable insights into factors affecting flight prices</li>
            <li>Created a foundation for future enhancements like real-time price monitoring</li>
            <li>Demonstrated the power of machine learning in travel industry applications</li>
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
