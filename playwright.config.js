const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['list']
  ],
  use: {
    headless: true,
    /* Collect trace when retrying a failed test */
    trace: 'on-first-retry',
    
    /* Take screenshots automatically on failure */
    screenshot: 'only-on-failure',
  },
});