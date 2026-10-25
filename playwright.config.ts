import {defineConfig, devices} from '@playwright/test';
import os from 'os';
import dotenv from 'dotenv';
import path from 'path';
import process from "process";
import reportingLabs from './reporting-labs.config';

// const testEnv = process.env.TEST_ENV || 'dev'; // Default to 'development' if not specified
dotenv.config({path: path.resolve(__dirname, '.env')});

export default defineConfig({
    testDir: './tests/eventhubapp/spec',
    timeout: 130000,
    workers: 4,
    fullyParallel: true,
    use: {
        headless: true,
        // baseURL: 'https://the-internet.herokuapp.com',
        baseURL: process.env.BASE_URL,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'retain-on-failure',
        launchOptions: {
            slowMo: 100 // delays each action by 1000ms (1 second)
        }
    },
    reporter: [
        ['dot'],
         ['@testdino/playwright', {token: process.env.TESTDINO_TOKEN}]
        //['reporting-labs', reportingLabs]
    ],
    projects: [
        {
            name: 'Chrome',
            use: {...devices['Desktop Chrome']},
        },
        {
            name: 'Edge',
            use: {...devices['Desktop Edge']},
        },
        {
          name: 'API',
          use: {
            trace:'on-first-retry'
          },
        }
    ],
});