import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Stars } from 'lucide-react';
import { useThemeStore } from '../store/themeStore';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-3 rounded-full glass-card hover:scale-110 transition-transform duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
      title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="relative w-6 h-6 flex items-center justify-center">
        {/* Sun Icon for Light Mode */}
        <motion.div
          initial={false}
          animate={{
            rotate: theme === 'light' ? 0 : 180,
            scale: theme === 'light' ? 1 : 0,
            opacity: theme === 'light' ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="absolute"
        >
          <Sun 
            size={24} 
            className="text-star-yellow drop-shadow-glow" 
          />
        </motion.div>

        {/* Moon Icon for Dark Mode */}
        <motion.div
          initial={false}
          animate={{
            rotate: theme === 'dark' ? 0 : -180,
            scale: theme === 'dark' ? 1 : 0,
            opacity: theme === 'dark' ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="absolute"
        >
          <Moon 
            size={24} 
            className="text-nebula-purple drop-shadow-glow" 
          />
        </motion.div>

        {/* Stars decoration */}
        {theme === 'dark' && (
          <motion.div
            className="absolute -inset-2 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Stars 
              size={12} 
              className="absolute top-0 right-0 text-star-light animate-twinkle" 
            />
            <Stars 
              size={8} 
              className="absolute bottom-0 left-0 text-star-yellow animate-twinkle" 
              style={{ animationDelay: '1s' }}
            />
          </motion.div>
        )}
      </div>

      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          boxShadow: theme === 'dark' 
            ? '0 0 20px rgba(139, 92, 246, 0.3), 0 0 40px rgba(139, 92, 246, 0.1)'
            : '0 0 20px rgba(251, 191, 36, 0.3), 0 0 40px rgba(251, 191, 36, 0.1)',
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
};

export default ThemeToggle;
