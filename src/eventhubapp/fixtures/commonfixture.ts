import {test as base, expect, Page, Locator} from '@playwright/test';
import { LoginPage } from '../pages/loginpage';

type TestFixtures = {
    loginpage: LoginPage;
};

export const test = base.extend<TestFixtures>({
    loginpage: async ({ page }, use) => {
        const loginpage = new LoginPage(page);
        await use(loginpage);
    },
});