 // Code generated via "Slingshot" 
import { test, expect } from '@playwright/test';

test('homepage has Playwright in title and get started link linking to the intro page', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Playwright/);

  // AAA accessibility: Ensure the "Get started" link is accessible by role and name
  const getStarted = page.getByRole('link', { name: 'Get started' });
  await expect(getStarted).toBeVisible();
  await getStarted.click();

  // Verify navigation to the intro page
  await expect(page).toHaveURL(/.*intro/);
});