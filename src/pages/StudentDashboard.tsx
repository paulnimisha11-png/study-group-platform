import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Calendar, TrendingUp } from 'lucide-react';

const StudentDashboard: React.FC = () => {
  return (
    <div className="p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-glow mb-8">Student Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="glass-card p-6 rounded-xl">
            <Users className="text-nebula-purple mb-3" size={24} />
            <h3 className="text-2xl font-bold mb-1">3</h3>
            <p className="text-space-light">Active Groups</p>
          </div>
          
          <div className="glass-card p-6 rounded-xl">
            <BookOpen className="text-nebula-pink mb-3" size={24} />
            <h3 className="text-2xl font-bold mb-1">12</h3>
            <p className="text-space-light">Study Sessions</p>
          </div>
          
          <div className="glass-card p-6 rounded-xl">
            <Calendar className="text-cosmic-blue mb-3" size={24} />
            <h3 className="text-2xl font-bold mb-1">5</h3>
            <p className="text-space-light">This Week</p>
          </div>
          
          <div className="glass-card p-6 rounded-xl">
            <TrendingUp className="text-aurora-green mb-3" size={24} />
            <h3 className="text-2xl font-bold mb-1">85%</h3>
            <p className="text-space-light">Progress</p>
          </div>
        </div>

        <div className="glass-card p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <p className="text-space-light">Your recent study group activities will appear here.</p>
        </div>
      </motion.div>
    </div>
  );
};

export default StudentDashboard;
