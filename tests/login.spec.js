/**
 * Playwright POM Example - login.spec.js
 * 
 * This test demonstrates how to implement Page Object Model (POM) in Playwright
 * with a sample login page (login.html).
 * 
 * Source & Full Tutorial:
 * https://software-testing-tutorials-automation.com/2025/09/playwright-page-object-model-javascript.html
 */
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const testData = require('../utilities/testData');

test.describe('Login Tests using POM', () => {
  test('Login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // Navigate to local HTML file
    await loginPage.goto(testData.urls.baseUrl);

    // Use valid credentials
    await loginPage.login(testData.validUser.username, testData.validUser.password);

    // Assertion
    const message = await loginPage.getMessage();
    await expect(message).toContain('Welcome to Dashboard');
  });

  test('Login with invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto(testData.urls.baseUrl);

    await loginPage.login(testData.invalidUser.username, testData.invalidUser.password);

    // Assertion
    const message = await loginPage.getMessage();
    await expect(message).toContain('Invalid credentials');
  });
});