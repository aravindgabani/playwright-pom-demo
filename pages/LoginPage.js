// pages/LoginPage.js
/**
 * Playwright POM Example - LoginPage.js
 * 
 * Page Object Model class for the sample login.html page.
 * 
 * Source & Full Tutorial:
 * https://software-testing-tutorials-automation.com/2025/09/playwright-page-object-model-javascript.html
 */
class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.message = page.locator('#message');
  }

  async goto(url) {
    await this.page.goto(url);
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async getMessage() {
    return this.message.textContent();
  }
}

module.exports = { LoginPage };
