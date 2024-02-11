const { test, expect } = require('@playwright/test');
const { PlaywrightDevPage } = require('./PlaywrightDevPage');
const { chromium } = require('playwright');  

// Test1: Check if clicking on the "retrain.ai" logo redirects to the home page
test('Clicking on the "retrain.ai" logo redirect to the home page', async ({ page }) => {
  await page.goto('https://www.retrain.ai/industries/');
  await page.waitForTimeout(4000);
  page.click('a.logo img[src="https://www.retrain.ai/wp-content/uploads/2022/04/retrain_logo.png"]:nth-of-type(1)'),
  await page.waitForTimeout(4000);
  const url = page.url();
  expect(url).toBe('https://www.retrain.ai/');
});

// test2: Checks that the desired title exists.
test('Title shown as desired', async ({ page }) => {
    await page.goto("https://www.retrain.ai/");
    await page.waitForTimeout(10000);
    const h1Element = page.locator('[class="text-white heading-1 headinglight"]');
    await expect(h1Element).toContainText("Skills-based AI to hire and retain the right people.");
});

// test3: Checks that an error message appears when the inputs are empty.
test('error noFiiling messege', async ({ page }) => {
    await page.goto("https://www.retrain.ai/contact");
    await page.waitForSelector('text=GET IN TOUCH');
    await page.locator('text=GET IN TOUCH').click();

    const errorMessege = page.getByText('There was a problem with your submission. Please review the fields below.' , { exact: true })
    expect(errorMessege).toBeVisible();
    await page.waitForTimeout(10000);
});
// test4: Tester switching options in the (Authors) dropdown selector.
test('Authors dropdown', async ({ page }) => {
    await page.goto("https://www.retrain.ai/resources/");
    const dropdownElement = page.locator('select[name="_sf_author[]"]');
    await dropdownElement.isVisible();
    await page.waitForTimeout(5000);
    await dropdownElement.selectOption({value: "ayala-allon"});
    await page.waitForTimeout(3000);
    await dropdownElement.selectOption({value: "avi"});
    await page.waitForTimeout(3000);
    
});
 
// Test5: Check if the "Login" button exists 
test('Footer should have a "Login" button', async ({ page }) => {
    await page.goto('https://www.retrain.ai');
    const loginButton = page.locator('.buttons-holder >> text="Login"');
    await expect(loginButton).toBeVisible();
  });

// Test6: Check if the "Contact" button exists 
test('Footer should have a "Contact" button', async ({ page }) => {
  await page.goto('https://www.retrain.ai');
  await page.waitForTimeout(4000);
  const contactButton = page.locator('text="CONTACT"');
  await expect(contactButton).toBeVisible();
});

// Test7: Check if the "Get a Demo" button exists 
test('Footer should have a "Get a Demo" button', async ({ page }) => {
  await page.goto('https://www.retrain.ai');
  await page.waitForTimeout(4000);
  const getDemoButton = page.locator('text="GET A DEMO"');
  await expect(getDemoButton).toBeVisible();
});
