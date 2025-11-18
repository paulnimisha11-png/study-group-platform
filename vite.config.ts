<<<<<<< HEAD
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
=======
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
>>>>>>> b5351fd600bfec00c87b9341f96383d5cc4e3a64

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
})
=======
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
>>>>>>> b5351fd600bfec00c87b9341f96383d5cc4e3a64
