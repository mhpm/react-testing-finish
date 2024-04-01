import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true, //anable global imsport in test
    setupFiles: 'tests/setup.ts',
  },
});
