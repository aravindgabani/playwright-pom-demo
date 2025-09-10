/**
 * Playwright POM Example - testData.js
 * 
 * Test data for login.html (valid and invalid users).
 * 
 * Source & Full Tutorial:
 * https://software-testing-tutorials-automation.com/2025/09/playwright-page-object-model-javascript.html
 */
const path = require('path');   // <--- this line is required

module.exports = {
  validUser: {
    username: "admin",
    password: "admin123"
  },
  invalidUser: {
    username: "wrong",
    password: "wrong123"
  },
  urls: {
    baseUrl: `file://${path.resolve(__dirname, 'login.html')}`
  }
};