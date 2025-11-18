import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Users, 
  Brain, 
  Target, 
  Star, 
  Rocket, 
  BookOpen,
  Lightbulb,
  Award
} from 'lucide-react';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Smart Matching',
      description: 'AI-powered personality and learning style analysis for perfect study partnerships',
      color: 'from-nebula-purple to-nebula-pink'
    },
    {
      icon: Users,
      title: 'Dynamic Groups',
      description: 'Flexible grouping system that adapts to different learning objectives and preferences',
      color: 'from-nebula-pink to-cosmic-blue'
    },
    {
      icon: Target,
      title: 'Teacher Control',
      description: 'Comprehensive dashboard for educators to create and manage optimal study groups',
      color: 'from-cosmic-blue to-aurora-green'
    },
    {
      icon: Star,
      title: 'Personalized Learning',
      description: 'Tailored study experiences based on individual preferences and learning styles',
      color: 'from-aurora-green to-star-yellow'
    }
  ];

  const stats = [
    { number: '95%', label: 'Group Success Rate', icon: Award },
    { number: '3x', label: 'Faster Learning', icon: Rocket },
    { number: '500+', label: 'Active Students', icon: Users },
    { number: '50+', label: 'Partner Schools', icon: BookOpen },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-nebula-purple/20 via-transparent to-nebula-pink/20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-nebula-purple via-nebula-pink to-cosmic-blue bg-clip-text text-transparent">
                  Study Groups in
                </span>
                <br />
                <span className="text-glow">Galaxy Scale</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-space-light mb-8 max-w-2xl mx-auto">
                Transform your learning experience with AI-powered study group matching. 
                Connect with compatible peers and reach your academic goals together.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/register">
                  <motion.button
                    className="btn-galaxy text-lg px-8 py-4"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Start Your Journey</span>
                  </motion.button>
                </Link>
                
                <Link to="/login">
                  <motion.button
                    className="glass-card px-8 py-4 text-lg font-semibold hover:shadow-glow transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Sign In
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Floating Elements */}
          <motion.div
            className="absolute top-20 left-10 text-star-yellow animate-float"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            <Star size={32} />
          </motion.div>
          
          <motion.div
            className="absolute bottom-20 right-10 text-nebula-purple animate-float"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          >
            <Lightbulb size={28} />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-space-medium/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="glass-card p-6 rounded-xl hover-card">
                    <Icon size={32} className="mx-auto mb-3 text-nebula-purple" />
                    <div className="text-3xl font-bold text-glow mb-1">{stat.number}</div>
                    <div className="text-sm text-space-light">{stat.label}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-nebula-purple to-nebula-pink bg-clip-text text-transparent">
                Features That
              </span>
              <br />
              <span className="text-glow">Elevate Learning</span>
            </h2>
            <p className="text-xl text-space-light max-w-2xl mx-auto">
              Discover tools designed to create the perfect study environment for every student
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="glass-card p-8 rounded-xl hover-card group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} p-1 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-full h-full bg-space-dark rounded-lg flex items-center justify-center">
                      <Icon size={24} className="text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {feature.title}
                  </h3>
                  
                  <p className="text-space-light leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-nebula-purple/30 to-nebula-pink/30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your
              <span className="text-glow"> Study Experience?</span>
            </h2>
            
            <p className="text-xl text-space-light mb-8">
              Join thousands of students who are already learning more effectively with smart study groups.
            </p>
            
            <Link to="/register">
              <motion.button
                className="btn-galaxy text-lg px-10 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Get Started Free</span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
