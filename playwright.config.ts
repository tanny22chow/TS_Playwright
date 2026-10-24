 // Code generated via "Slingshot" 
import { defineConfig, devices } from '@playwright/test';
import os from 'os';
import  dotenv from 'dotenv';
import path from 'path';

// const testEnv = process.env.TEST_ENV || 'dev'; // Default to 'development' if not specified
 dotenv.config({ path: path.resolve(__dirname, '.env') });

export default defineConfig({
  testDir: './tests/eventhubapp/spec',
  timeout: 30000,
  retries: 0,
  workers: os.cpus().length,
  fullyParallel: true,
  use: {
    headless: true,
   // baseURL: 'https://the-internet.herokuapp.com',
   baseURL: process.env.BASE_URL
  },
  reporter: [
   ['dot'],
   ['@testdino/playwright', { token: process.env.TESTDINO_TOKEN}]
 ],
  projects: [
    {
      name: 'Chrome',
      use: { ...devices['Desktop Chrome'] },
    },
    // {
    //   name: 'QA',
    //   use: { ...devices['Desktop Chrome'] ,
    //     baseURL: process.env.BASE_URL
    //   },
    // }
  ],
});