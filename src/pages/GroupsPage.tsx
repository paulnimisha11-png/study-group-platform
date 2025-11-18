import React from 'react';
import { motion } from 'framer-motion';
import { Users, Plus, Search, Filter } from 'lucide-react';

const GroupsPage: React.FC = () => {
  return (
    <div className="p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-glow">Study Groups</h1>
          
          <motion.button
            className="btn-galaxy"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Plus size={20} className="inline mr-2" />
            New Group
          </motion.button>
        </div>

        <div className="flex gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-space-light" size={20} />
            <input
              type="text"
              placeholder="Search groups..."
              className="galaxy-input w-full pl-10"
            />
          </div>
          
          <motion.button
            className="glass-card px-4 py-2 flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Filter size={20} className="mr-2" />
            Filters
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((group) => (
            <motion.div
              key={group}
              className="glass-card p-6 rounded-xl hover-card"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center mb-4">
                <Users className="text-nebula-purple mr-3" size={24} />
                <h3 className="text-lg font-semibold">Study Group {group}</h3>
              </div>
              
              <p className="text-space-light mb-4">
                A collaborative study group focused on advanced topics and peer learning.
              </p>
              
              <div className="flex justify-between items-center text-sm">
                <span className="badge-galaxy">4 members</span>
                <span className="text-space-light">Active</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default GroupsPage;
