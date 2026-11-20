import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  // Test gulo ekta ekta kore, file er alphabetical order e cholbe: q1 -> q2 -> q3
  fullyParallel: false,
  workers: 1,
  retries: 0,
  timeout: 90_000,
  expect: { timeout: 15_000 },

  // Protibar run e duita report toiri hoy: Playwright HTML + Allure (raw result)
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['allure-playwright', { resultsDir: 'allure-results' }],
  ],

  use: {
    baseURL: 'https://demowebshop.tricentis.com',
    headless: true,
    viewport: { width: 1366, height: 768 },
    actionTimeout: 20_000,
    navigationTimeout: 60_000,
    screenshot: 'on', // protiti test er screenshot report e attach hoy
    trace: 'retain-on-failure',
    video: 'retain-on-failure',
  },

  projects: [{ name: 'firefox', use: { browserName: 'firefox' } }],
});