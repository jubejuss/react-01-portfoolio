import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import styleX from "vite-plugin-stylex";

// Kontrolli, kas käivitamine toimub tootmiskeskkonnas
const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  plugins: [react(), styleX()],
  base: isProduction ? '/react-01-portfoolio/' : '/',
});