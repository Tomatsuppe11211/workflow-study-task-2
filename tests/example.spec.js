// @ts-check
import { test, expect } from '@playwright/test';
import path from 'path';


test('Checking the content of the paragraph in the about page', async ({ page }) => {
  await page.goto('/about.html')
  const text = await page.locator('p')
  await expect(text).toContainText('Welcome to News Portal')
}) //test pass 





//Standard
/*
test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
*/
