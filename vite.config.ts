import reactRefresh from '@vitejs/plugin-react-refresh';
import { UserConfig } from 'vite';
import ssr from 'vite-plugin-ssr';

const config: UserConfig = {
  plugins: [ reactRefresh(), ssr() ],
};

export default config;
