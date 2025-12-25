export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  path: string;
}

export const projects: Project[] = [
  {
    id: 'alzheimers-detection',
    title: 'Alzheimer\'s Disease Early Detection',
    description: 'Multi-modal medical imaging analysis for early detection of Alzheimer\'s using deep learning and explainable AI.',
    tags: ['Medical AI', 'Deep Learning', 'Computer Vision', 'Healthcare', 'Explainable AI'],
    path: '/projects/alzheimers-detection'
  },
  {
    id: 'parkinsons-disease-detection',
    title: 'Parkinson\'s Disease Detection',
    description: 'ML-based early detection system for Parkinson\'s disease using voice analysis and clinical data.',
    tags: ['Machine Learning', 'Healthcare', 'Python', 'Medical AI'],
    path: '/projects/parkinsons-disease-detection'
  },
  {
    id: 'smart-farming',
    title: 'Smart Agricultural System',
    description: 'IoT and AI-powered solution for precision agriculture, crop monitoring, and optimization.',
    tags: ['IoT', 'AI', 'Computer Vision', 'Edge Computing', 'Agriculture'],
    path: '/projects/smart-farming'
  },
  {
    id: 'college-chatbot',
    title: 'College Enquiry Chatbot',
    description: 'AI-powered chatbot for handling college admission queries and information using natural language processing.',
    tags: ['NLP', 'Chatbot', 'Python', 'AI/ML'],
    path: '/projects/college-chatbot'
  },
  {
    id: 'flight-fare-prediction',
    title: 'Flight Fare Prediction & Analysis',
    description: 'Machine learning model to predict flight prices with high accuracy and analyze pricing trends.',
    tags: ['Machine Learning', 'Data Science', 'Python', 'Data Analysis'],
    path: '/projects/flight-fare-prediction'
  },
  {
    id: 'voxsense',
    title: 'VoxSense AI',
    description: 'Voice recognition and natural language processing platform for intelligent voice interactions.',
    tags: ['NLP', 'Voice Recognition', 'TensorFlow', 'Python', 'Machine Learning'],
    path: '/projects/voxsense'
  }
];
