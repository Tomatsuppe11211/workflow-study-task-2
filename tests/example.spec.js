// @ts-check
import { test, expect } from '@playwright/test';


test('Checking the content of the paragraph in the about page', async ({ page }) => {
  await page.goto('/about.html')
  const text = await page.locator('p')
  await expect(text).toContainText('Welcome to News Portal')
}) //test pass 


test('checking if correct error message is displayed when article ID is not provided', async ({ page }) => {
  await page.goto('/article.html')
  const text = await page.getByText('No article ID provided').getAttribute('class')
  await expect(text).toEqual('text-center text-red-500')
}) //test pass


test('Checking if correct error message is displayed when article ID do not excist', async ({ page }) => {
  await page.goto('/article.html?id=101')
  const text = await page.getByText('Article not found.').getAttribute('class')
  await expect(text).toEqual('text-center text-red-500')
}) //test pass


test('Checking if i can add a favourite article and display it in favourite articles page', async({ page }) => {
  //adding favourite
  await page.goto('/index.html')
  const favArticleButton = await page.getByRole('link', {name: 'New Technology Breakthrough'}).getByRole('button')
  await favArticleButton.click()
  
  await page.goto('favourites.html')
  const displayFavArticle = await page.getByRole('link', {name: 'New Technology Breakthrough'})
  await expect(displayFavArticle).toBeVisible()
  await expect(displayFavArticle).toContainText('New Technology Breakthrough')
}) //test pass



test('Testing a filled in contact form', async ({ page }) => {
  await page.goto('/contact.html')

  await page.getByRole('textbox', { name: 'Your Name' }).fill('Eric')
  await page.getByRole('textbox', { name: 'Your Email' }).fill('EricMan@example.com')
  await page.getByRole('textbox', { name: 'subject' }).fill('Test')
  await page.getByRole('textbox', { name: 'Your Message' }).fill('Ello')
  await page.getByRole('button', { name: 'send' }).click()

  const message = page.getByRole('alert')
  await expect(message).toContainText('Thank you') 
}) //test pass


test('Submitting an empty form', async({ page }) => {
  await page.goto('/contact.html')

  // Disable browser HTML5 validation
  await page.$eval('#contact-form', form =>
    form.setAttribute('novalidate', 'true')
  );

  await page.getByRole('button', { name: 'send' }).click()
  const message = page.getByRole('alert')
  await expect(message).toContainText('Please') 
}) //test success




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
