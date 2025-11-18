import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GraduationCap, Users, BookOpen, LogIn, UserPlus } from 'lucide-react';
import { BaseComponentProps } from '../types';

interface HeaderProps extends BaseComponentProps {
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children, className = '' }) => {
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', href: '/', icon: GraduationCap },
    { name: 'Login', href: '/login', icon: LogIn },
    { name: 'Register', href: '/register', icon: UserPlus },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className={`glass-card border-b border-space-light/20 sticky top-0 z-50 ${className}`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <GraduationCap 
                size={32} 
                className="text-nebula-purple group-hover:text-nebula-pink transition-colors duration-300" 
              />
              <motion.div
                className="absolute -inset-1 bg-nebula-purple/20 rounded-full blur-md"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
            <div>
              <h1 className="text-xl font-bold text-glow">StudyGroup Galaxy</h1>
              <p className="text-xs text-space-light">Connect & Learn Together</p>
            </div>
          </Link>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`nav-link flex items-center space-x-2 ${
                    isActive(item.href) ? 'active text-white' : ''
                  }`}
                >
                  <Icon size={18} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Right side - Theme Toggle and Actions */}
          <div className="flex items-center space-x-4">
            {children}
            
            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 rounded-lg glass-card"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-center space-y-1">
                <motion.div
                  className="h-0.5 bg-white rounded-full"
                  animate={{ width: '100%' }}
                />
                <motion.div
                  className="h-0.5 bg-white rounded-full"
                  animate={{ width: '100%' }}
                />
                <motion.div
                  className="h-0.5 bg-white rounded-full"
                  animate={{ width: '100%' }}
                />
              </div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className="md:hidden mt-4 pt-4 border-t border-space-light/20"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
        >
          <div className="flex flex-col space-y-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`nav-link flex items-center space-x-2 py-2 ${
                    isActive(item.href) ? 'active text-white' : ''
                  }`}
                >
                  <Icon size={18} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
        </motion.div>
      </nav>
    </header>
  );
};

export default Header;
