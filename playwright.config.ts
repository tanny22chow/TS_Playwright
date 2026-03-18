 // Code generated via "Slingshot" 
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 0,
  use: {
    headless: true,
    baseURL: 'https://the-internet.herokuapp.com'
  },
  reporter:'html',
  projects: [
    {
      name: 'Chrome',
      use: { ...devices['Desktop Chrome'] },
    }
  ],
});