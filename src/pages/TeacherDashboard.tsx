import React from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, Target, BarChart3 } from 'lucide-react';

const TeacherDashboard: React.FC = () => {
  return (
    <div className="p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-glow mb-8">Teacher Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="glass-card p-6 rounded-xl">
            <Users className="text-nebula-purple mb-3" size={24} />
            <h3 className="text-2xl font-bold mb-1">45</h3>
            <p className="text-space-light">Total Students</p>
          </div>
          
          <div className="glass-card p-6 rounded-xl">
            <BookOpen className="text-nebula-pink mb-3" size={24} />
            <h3 className="text-2xl font-bold mb-1">12</h3>
            <p className="text-space-light">Active Groups</p>
          </div>
          
          <div className="glass-card p-6 rounded-xl">
            <Target className="text-cosmic-blue mb-3" size={24} />
            <h3 className="text-2xl font-bold mb-1">8</h3>
            <p className="text-space-light">Pending Requests</p>
          </div>
          
          <div className="glass-card p-6 rounded-xl">
            <BarChart3 className="text-aurora-green mb-3" size={24} />
            <h3 className="text-2xl font-bold mb-1">92%</h3>
            <p className="text-space-light">Success Rate</p>
          </div>
        </div>

        <div className="glass-card p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">Group Management</h2>
          <p className="text-space-light">Create and manage study groups for your students here.</p>
        </div>
      </motion.div>
    </div>
  );
};

export default TeacherDashboard;
