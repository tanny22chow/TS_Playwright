import { test, expect } from '@playwright/test';

test('example using browser context', async ({ browser }) => {
  // create a new context with custom options
  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 },
    userAgent: 'my-custom-agent/1.0'
  });

  // open a page inside the context
  const page = await context.newPage();
  await page.goto('/test');
  await expect(page.locator('h1')).toHaveText('Ready to be a Pro Engineer?');
  context.close()
});