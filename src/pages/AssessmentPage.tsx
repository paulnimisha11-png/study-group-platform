import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Clock, CheckCircle, ChevronRight, MapPin, Calendar, Users } from 'lucide-react';
import { StudyPreferences } from '../types';

const AssessmentPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [preferences, setPreferences] = useState<Partial<StudyPreferences>>({});

  const studyTimeQuestions = [
    { 
      id: 'morning', 
      label: 'Early Morning (6AM - 9AM)', 
      description: 'Fresh mind, quiet environment, peak focus'
    },
    { 
      id: 'afternoon', 
      label: 'Afternoon (12PM - 5PM)', 
      description: 'Post-lunch energy, collaborative atmosphere'
    },
    { 
      id: 'evening', 
      label: 'Evening (6PM - 9PM)', 
      description: 'Winding down, review sessions, relaxed pace'
    },
    { 
      id: 'night', 
      label: 'Late Night (9PM - 12AM)', 
      description: 'Deep focus, night owl productivity'
    }
  ];

  const studyLocationQuestions = [
    { 
      id: 'library', 
      label: 'Library', 
      description: 'Quiet, structured, academic environment'
    },
    { 
      id: 'home', 
      label: 'Home', 
      description: 'Comfortable, convenient, personalized setup'
    },
    { 
      id: 'cafe', 
      label: 'Café', 
      description: 'Ambient noise, social atmosphere, caffeine boost'
    },
    { 
      id: 'dorm', 
      label: 'Dorm/Student Housing', 
      description: 'Close to peers, convenient, collaborative'
    }
  ];

  const handleTimeSelection = (time: 'morning' | 'afternoon' | 'evening' | 'night') => {
    setPreferences(prev => ({ ...prev, preferredStudyTime: time }));
    setTimeout(() => setCurrentStep(1), 300);
  };

  const handleLocationSelection = (place: 'library' | 'dorm' | 'home' | 'cafe') => {
    setPreferences(prev => ({ ...prev, preferredPlace: place }));
    setTimeout(() => setCurrentStep(2), 300);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <Clock className="text-nebula-purple mx-auto mb-4" size={48} />
              <h2 className="text-2xl font-bold mb-3">
                What time of day do you study best?
              </h2>
              <p className="text-space-light">
                Choose when you feel most productive and focused
              </p>
            </div>

            <div className="grid gap-4">
              {studyTimeQuestions.map((time) => (
                <motion.button
                  key={time.id}
                  onClick={() => handleTimeSelection(time.id as any)}
                  className="glass-card p-6 rounded-xl text-left hover:card-glow transition-all duration-300 group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-nebula-purple transition-colors">
                        {time.label}
                      </h3>
                      <p className="text-sm text-space-light">{time.description}</p>
                    </div>
                    <ChevronRight 
                      className="text-space-light group-hover:text-nebula-purple transition-colors mt-1" 
                      size={20} 
                    />
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        );

      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <MapPin className="text-nebula-purple mx-auto mb-4" size={48} />
              <h2 className="text-2xl font-bold mb-3">
                Where do you focus the best?
              </h2>
              <p className="text-space-light">
                Select your ideal study environment for maximum productivity
              </p>
            </div>

            <div className="grid gap-4">
              {studyLocationQuestions.map((location) => (
                <motion.button
                  key={location.id}
                  onClick={() => handleLocationSelection(location.id as any)}
                  className="glass-card p-6 rounded-xl text-left hover:card-glow transition-all duration-300 group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-nebula-purple transition-colors">
                        {location.label}
                      </h3>
                      <p className="text-sm text-space-light">{location.description}</p>
                    </div>
                    <ChevronRight 
                      className="text-space-light group-hover:text-nebula-purple transition-colors mt-1" 
                      size={20} 
                    />
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center space-y-6"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-aurora-green to-nebula-purple rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={40} className="text-white" />
            </div>
            
            <h2 className="text-2xl font-bold mb-4">
              Perfect! We've got your preferences
            </h2>
            
            <div className="glass-card p-6 rounded-xl max-w-md mx-auto">
              <h3 className="font-semibold mb-4">Your Study Profile:</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-center justify-between p-3 bg-space-medium/30 rounded-lg">
                  <div className="flex items-center">
                    <Clock size={18} className="text-nebula-purple mr-2" />
                    <span className="text-sm">Study Time</span>
                  </div>
                  <span className="font-medium text-nebula-purple">
                    {studyTimeQuestions.find(t => t.id === preferences.preferredStudyTime)?.label}
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-space-medium/30 rounded-lg">
                  <div className="flex items-center">
                    <MapPin size={18} className="text-nebula-purple mr-2" />
                    <span className="text-sm">Study Location</span>
                  </div>
                  <span className="font-medium text-nebula-purple">
                    {studyLocationQuestions.find(l => l.id === preferences.preferredPlace)?.label}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-space-light">
                Our AI will now use these preferences to find your perfect study partners
              </p>
              
              <div className="flex gap-4 justify-center">
                <motion.button
                  onClick={() => setCurrentStep(0)}
                  className="px-6 py-3 border border-nebula-purple/30 rounded-lg hover:bg-space-medium/50 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Edit Preferences
                </motion.button>
                
                <motion.button
                  className="btn-galaxy px-8"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Find My Study Group
                </motion.button>
              </div>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-glow mb-4">Smart Study Matching</h1>
            <p className="text-space-light">
              Answer a few questions to find your perfect study partners
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-4">
              {[0, 1, 2].map((step) => (
                <div key={step} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      step <= currentStep
                        ? 'bg-gradient-to-r from-nebula-purple to-aurora-green text-white'
                        : 'bg-space-medium/50 text-space-light'
                    }`}
                  >
                    {step < currentStep ? (
                      <CheckCircle size={20} />
                    ) : (
                      <span className="text-sm font-medium">{step + 1}</span>
                    )}
                  </div>
                  {step < 2 && (
                    <div
                      className={`w-12 h-1 mx-2 transition-all duration-300 ${
                        step < currentStep
                          ? 'bg-gradient-to-r from-nebula-purple to-aurora-green'
                          : 'bg-space-medium/30'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="glass-card p-8 rounded-xl">
            <AnimatePresence mode="wait">
              {renderStepContent()}
            </AnimatePresence>
          </div>

          {/* Quick Links */}
          {currentStep < 2 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-8 text-center"
            >
              <p className="text-space-light mb-4">
                Want to learn more about how our matching works?
              </p>
              <div className="flex justify-center gap-6">
                <a 
                  href="#" 
                  className="text-nebula-purple hover:text-nebula-pink transition-colors underline text-sm"
                >
                  How AI Matching Works
                </a>
                <a 
                  href="#" 
                  className="text-nebula-purple hover:text-nebula-pink transition-colors underline text-sm"
                >
                  Study Tips & Strategies
                </a>
                <a 
                  href="/groups" 
                  className="text-nebula-purple hover:text-nebula-pink transition-colors underline text-sm"
                >
                  Browse Existing Groups
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default AssessmentPage;
