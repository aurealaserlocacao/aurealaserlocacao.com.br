import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://aurealaserlocacao.com.br',
  trailingSlash: 'always',
  integrations: [sitemap()],
  build: { format: 'directory' }
});
