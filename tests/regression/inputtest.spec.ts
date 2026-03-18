import { test, expect, Page, BrowserContext } from "@playwright/test";

test.describe('Input Test', () => {

    let page: Page;
    let context: BrowserContext;

    test.beforeAll(async ({ browser }) => {
        context = await browser.newContext({
            baseURL: 'https://letcode.in/',
            viewport: { width: 1280, height: 720 },
        });
        page = await context.newPage();
    });

    test('Input Test', async () => {
        await page.goto('/test');
        expect(await page.title()).toBe('Workspace | LetCode with Koushik');
        await context.close();
    });
    test.afterAll(async () => {
        await context.close();
    })


})