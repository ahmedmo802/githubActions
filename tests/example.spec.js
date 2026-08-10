const { test, expect } = require('@playwright/test');

test('basic demo test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  // Check the page title contains "Playwright"
  await expect(page).toHaveTitle(/Playwright/);
});