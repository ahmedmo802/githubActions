const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  // Limit execution strictly to Desktop Chrome
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

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