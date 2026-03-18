// Code generated via "Slingshot" 
import { test, expect, Page } from '@playwright/test';

test('homepage has Playwright in title and get started link linking to the intro page', async ({ browser }) => {
  let page: Page;
  let context = await browser.newContext({
    baseURL: 'https://playwright.dev/'
  })
  page = await context.newPage();
  await page.goto('/');
  await expect(page).toHaveTitle(/Playwright/);

  // AAA accessibility: Ensure the "Get started" link is accessible by role and name
  const getStarted = page.getByRole('link', { name: 'Get started' });
  await expect(getStarted).toBeVisible();
  await getStarted.click();

  // Verify navigation to the intro page
  await expect(page).toHaveURL(/.*intro/);
});