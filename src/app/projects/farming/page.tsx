"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function FarmingPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-8"
          >
            ← Back to Home
          </Link>

          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
            Agricultural Technology
          </h1>

          <div className="prose dark:prose-invert max-w-none">
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
              Smart farming solutions using IoT sensors and AI for precision agriculture and crop optimization.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {['IoT', 'Arduino', 'Python', 'TensorFlow', 'MQTT'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                <ul className="text-slate-600 dark:text-slate-400 space-y-2">
                  <li>• Soil moisture monitoring</li>
                  <li>• Weather prediction</li>
                  <li>• Crop disease detection</li>
                  <li>• Automated irrigation</li>
                </ul>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Project Overview</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                This smart farming project integrates IoT sensors with AI algorithms to monitor
                crop conditions, predict optimal harvesting times, and automate farming processes.
                The system helps farmers increase yield while reducing resource consumption.
              </p>
              <p className="text-slate-600 dark:text-slate-400">
                Real-time data from soil sensors, weather stations, and cameras is processed
                using machine learning models to provide actionable insights for precision agriculture.
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
        </motion.div>
      </div>
    </div>
  );
}
