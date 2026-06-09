import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  timeout: 300000, // 5 minutes
  expect: {
    timeout: 10000, // 10 seconds
  },
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  // workers: 4,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [['html', { outputFolder: 'my-report' }],
  ["allure-playwright"]
],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    headless: false,
    // Base URL of the Application 
    baseURL: 'https://vibetestq-osondemand.orangehrm.com/',
    // baseURL: 'https://opensource-demo.orangehrmlive.com/',
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    actionTimeout: 10000,
    navigationTimeout: 60000,

  },

  /* Configure projects for major browsers */
  projects: [
    {
      //https://playwright.dev/docs/test-projects#configure-projects-for-multiple-environments
      name: 'vibetestq',
      use: {
        baseURL: 'https://vibetestq-osondemand.orangehrm.com/',
        ...devices['Desktop Chrome'],
        
      },
      // grep: "@ind", // to run tests with @ind tag
      // testMatch: 'POMTestSerialMode.spec.ts'
      // testMatch: 'POMWithDDT.spec.ts'
    },
    {
      // https://playwright.dev/docs/test-projects#configure-projects-for-multiple-environments
      name: 'opensource',
      use: {
        baseURL: 'https://opensource-demo.orangehrmlive.com/',
        ...devices['Desktop Chrome']
      },
    }
  ],
});