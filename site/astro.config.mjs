// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://renegade.clubstack.studio',
  base: '/',
  trailingSlash: 'always',
  build: {
    assets: '_assets',
  },
});
