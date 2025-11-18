import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Theme = 'dark' | 'light';

interface ThemeStore {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set, get) => ({
      theme: 'dark',
      toggleTheme: () => {
        const currentTheme = get().theme;
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        set({ theme: newTheme });
        
        // Apply theme to document
        if (newTheme === 'light') {
          document.documentElement.classList.add('light');
          document.body.classList.add('light');
        } else {
          document.documentElement.classList.remove('light');
          document.body.classList.remove('light');
        }
      },
      setTheme: (theme: Theme) => {
        set({ theme });
        
        // Apply theme to document
        if (theme === 'light') {
          document.documentElement.classList.add('light');
          document.body.classList.add('light');
        } else {
          document.documentElement.classList.remove('light');
          document.body.classList.remove('light');
        }
      },
    }),
    {
      name: 'theme-storage',
      onRehydrateStorage: () => (state) => {
        // Apply theme on page load
        if (state?.theme === 'light') {
          document.documentElement.classList.add('light');
          document.body.classList.add('light');
        } else {
          document.documentElement.classList.remove('light');
          document.body.classList.remove('light');
        }
      },
    }
  )
);
