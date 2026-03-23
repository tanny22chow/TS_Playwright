 // Code generated via "Slingshot" 
import { defineConfig, devices } from '@playwright/test';
import os from 'os';
// import  dotenv from 'dotenv';
// import path from 'path';

// const testEnv = process.env.TEST_ENV || 'dev'; // Default to 'development' if not specified
// dotenv.config({ path: path.resolve(`./Environments/.env.${testEnv}`) });

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 0,
  workers: os.cpus().length,
  fullyParallel: true,
  use: {
    headless: true,
    baseURL: 'https://the-internet.herokuapp.com',
  },
  reporter:'html',
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