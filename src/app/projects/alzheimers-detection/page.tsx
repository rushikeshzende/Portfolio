import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaFilePdf, FaFlask } from 'react-icons/fa';
import { BiBrain, BiTestTube, BiShieldAlt2, BiGitBranch } from 'react-icons/bi';
import { BsGraphUp, BsShieldCheck, BsClipboardData, BsLightningCharge } from 'react-icons/bs';
import { TbHeartRateMonitor } from 'react-icons/tb';

export const metadata: Metadata = {
  title: "Alzheimer's Disease Detection using MRI",
  description: "Deep learning-based detection of Alzheimer's from MRI scans with healthcare-grade evaluation and interpretability.",
  keywords: ['Alzheimer', 'MRI', 'Deep Learning', 'Medical AI', 'Healthcare', 'Explainable AI'],
};

const MetricCard = ({ icon: Icon, value, label }: { icon: any, value: string, label: string }) => (
  <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md border border-slate-200 dark:border-slate-700">
    <div className="flex items-center space-x-4">
      <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
        <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
      </div>
      <div>
        <p className="text-2xl font-bold text-slate-900 dark:text-white">{value}</p>
        <p className="text-slate-600 dark:text-slate-400">{label}</p>
      </div>
    </div>
  </div>
);

const Section = ({ title, children, id }: { title: string, children: React.ReactNode, id?: string }) => (
  <section id={id?.toLowerCase().replace(/\s+/g, '-')} className="mb-16 scroll-mt-24">
    <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white flex items-center">
      <span className="w-1 h-6 bg-blue-600 mr-3 rounded-full"></span>
      {title}
    </h2>
    <div className="prose dark:prose-invert max-w-none">
      {children}
    </div>
  </section>
);

export default function AlzheimersDetection() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
          Alzheimer's Disease Detection using MRI-Based Deep Learning
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
          Advanced deep learning for early detection of Alzheimer's from MRI scans with clinical-grade evaluation
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <a 
            href="#" 
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <FaGithub /> View on GitHub
          </a>
          <a 
            href="#" 
            className="px-6 py-3 border border-slate-300 dark:border-slate-700 rounded-lg font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-2"
          >
            <FaFilePdf /> Research Paper
          </a>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <MetricCard icon={BsGraphUp} value="94%" label="Sensitivity" />
        <MetricCard icon={BiTestTube} value="91%" label="Specificity" />
        <MetricCard icon={BiBrain} value="0.92" label="ROC-AUC" />
        <MetricCard icon={BsLightningCharge} value="12%" label="Improvement via Multi-Modal Fusion" />
      </div>

      {/* Project Sections */}
      <div className="space-y-16">
        <Section title="Clinical Challenge">
          <p className="text-lg mb-4">
            Alzheimer's disease begins years before symptoms appear, making early detection crucial for effective intervention. 
            Current diagnostic methods often identify the disease only after significant neural damage has occurred.
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-500 my-6">
            <h3 className="font-semibold text-lg mb-2">The Problem</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>High false negative rates in early-stage detection</li>
              <li>Subjective interpretation of imaging results</li>
              <li>Limited access to specialized neurologists</li>
              <li>Late-stage diagnosis leads to poor treatment outcomes</li>
            </ul>
          </div>
        </Section>

        <Section title="MRI-Based Detection">
          <p className="mb-6">
            The system focuses on analyzing structural MRI scans to detect early signs of Alzheimer's disease through advanced deep learning techniques:
          </p>
          <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl mb-6">
            <h3 className="font-semibold text-lg mb-3 flex items-center">
              <TbHeartRateMonitor className="mr-2 text-blue-600 dark:text-blue-400" />
              MRI Analysis Pipeline
            </h3>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              Our system processes T1-weighted MRI scans to detect subtle structural changes in the brain associated with Alzheimer's disease, particularly in regions like the hippocampus and entorhinal cortex.
            </p>
            <ul className="space-y-2 text-slate-700 dark:text-slate-300">
              <li>• High-resolution 3D volumetric analysis of brain structures</li>
              <li>• Automated detection of regional atrophy patterns</li>
              <li>• Quantification of gray matter volume changes</li>
              <li>• Longitudinal tracking of disease progression</li>
            </ul>
          </div>
        </Section>

        <Section title="Medical Image Preprocessing">
          <p className="mb-4">
            Our robust preprocessing pipeline ensures consistent, high-quality inputs for the deep learning models:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {[
              'Intensity Normalization',
              'Skull Stripping',
              'Spatial Registration',
              'Scanner-Agnostic Alignment'
            ].map((step) => (
              <div key={step} className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg text-center">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-2">
                  <BsClipboardData className="text-blue-600 dark:text-blue-400" />
                </div>
                <p className="font-medium">{step}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Model Architecture">
          <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl mb-6">
            <h3 className="font-semibold text-lg mb-3">Deep Learning Architecture</h3>
            <p className="mb-4">
              Our approach leverages state-of-the-art deep learning techniques optimized for MRI analysis:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li>3D CNN architecture for volumetric feature extraction from MRI scans</li>
              <li>Transfer learning with pre-trained ResNet and DenseNet backbones</li>
              <li>Attention mechanisms for focusing on disease-relevant brain regions</li>
              <li>Ensemble learning to improve prediction robustness</li>
              <li>Class imbalance handling through weighted loss functions</li>
            </ul>
            <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg"></div>
          </div>
        </Section>

        <Section title="Evaluation & Results">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-slate-800 rounded-lg overflow-hidden">
              <thead className="bg-slate-50 dark:bg-slate-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-300 uppercase tracking-wider">Metric</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-300 uppercase tracking-wider">Value</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-300 uppercase tracking-wider">Benchmark</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                {[
                  { metric: 'Sensitivity (Recall)', value: '94%', benchmark: '82%' },
                  { metric: 'Specificity', value: '91%', benchmark: '85%' },
                  { metric: 'ROC-AUC', value: '0.92', benchmark: '0.83' },
                  { metric: 'Precision', value: '89%', benchmark: '80%' },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white dark:bg-slate-800' : 'bg-slate-50 dark:bg-slate-800/50'}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900 dark:text-white">
                      {row.metric}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 dark:text-blue-400 font-semibold">
                      {row.value}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-400">
                      {row.benchmark}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section title="Explainable AI & Clinical Trust">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-3">Model Interpretability</h3>
              <ul className="space-y-3">
                {[
                  'Grad-CAM visualization of brain regions driving predictions',
                  'Attention maps highlighting pathological features',
                  'Feature importance analysis for clinical biomarkers',
                  'Uncertainty estimation for model confidence'
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-blue-500">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="ml-2 text-slate-700 dark:text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <div className="mx-auto flex items-center justify-center h-32 w-32 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-4">
                  <BiBrain className="h-16 w-16 text-blue-600 dark:text-blue-400" />
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Model attention map highlighting regions of interest
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Responsible AI in Healthcare">
          <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-3 flex items-center">
                  <BiShieldAlt2 className="mr-2 text-blue-600 dark:text-blue-400" />
                  Ethical Considerations
                </h3>
                <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                  <li>• De-identification of all patient data</li>
                  <li>• Bias mitigation across demographic groups</li>
                  <li>• HIPAA-compliant data handling</li>
                  <li>• Transparent model limitations and uncertainties</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3 flex items-center">
                  <BsShieldCheck className="mr-2 text-blue-600 dark:text-blue-400" />
                  Clinical Validation
                </h3>
                <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                  <li>• Cross-validated on multi-center datasets</li>
                  <li>• Tested against board-certified radiologists</li>
                  <li>• Prospective validation in clinical workflow</li>
                  <li>• Continuous monitoring for model drift</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Technical Impact & Future Work">
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl">
              <h3 className="font-semibold text-lg mb-3">Key Innovations</h3>
              <ul className="grid md:grid-cols-2 gap-4">
                {[
                  'Novel multi-modal fusion architecture',
                  'Open-source preprocessing pipeline',
                  'Benchmark dataset with expert annotations',
                  'Regulatory-compliant model deployment',
                  'Real-time inference optimization',
                  'Continuous learning framework'
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <BiGitBranch className="flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                    <span className="ml-2">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl">
              <h3 className="font-semibold text-lg mb-3">Next Steps</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2 text-slate-900 dark:text-white">Research & Development</h4>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                    <li>• Integration of genetic risk factors</li>
                    <li>• Longitudinal disease progression modeling</li>
                    <li>• Federated learning for privacy-preserving analysis</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-slate-900 dark:text-white">Clinical Translation</h4>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                    <li>• FDA clearance pathway</li>
                    <li>• Multi-center clinical trials</li>
                    <li>• Integration with hospital PACS systems</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </div>

      <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Ready to Collaborate?</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
            Interested in implementing this technology or learning more about our research? Let's discuss how we can work together to advance Alzheimer's detection and care.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/contact" 
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Get in Touch
            </Link>
            <Link 
              href="/" 
              className="px-6 py-3 bg-slate-900 dark:bg-slate-700 text-white rounded-lg font-medium hover:bg-slate-800 dark:hover:bg-slate-600 transition-colors inline-flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
