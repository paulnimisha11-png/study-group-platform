import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LogIn, Mail, Lock, UserPlus } from 'lucide-react';

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        className="glass-card p-8 rounded-2xl max-w-md w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-glow mb-2">Welcome Back</h1>
          <p className="text-space-light">Sign in to your galaxy account</p>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-space-light" size={20} />
              <input
                type="email"
                className="galaxy-input w-full pl-10"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-space-light" size={20} />
              <input
                type="password"
                className="galaxy-input w-full pl-10"
                placeholder="••••••••"
              />
            </div>
          </div>

          <motion.button
            type="submit"
            className="btn-galaxy w-full"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <LogIn size={20} className="inline mr-2" />
            Sign In
          </motion.button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-space-light">
            Don't have an account?{' '}
            <Link to="/register" className="text-nebula-purple hover:text-nebula-pink transition-colors">
              Sign up
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
