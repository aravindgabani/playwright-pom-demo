# Playwright Page Object Model (POM) Example

[![View Tutorial](https://img.shields.io/badge/View%20Tutorial-Playwright%20POM-blue?style=for-the-badge&logo=readme)](https://software-testing-tutorials-automation.com/2025/09/playwright-page-object-model-javascript.html)
[![Playwright](https://img.shields.io/badge/Powered%20By-Playwright-green?style=for-the-badge&logo=playwright)](https://playwright.dev/)

This project demonstrates how to implement the **Page Object Model (POM)** in Playwright using a sample offline login page (`login.html`).  
It is designed for beginners who want to learn structured test automation with Playwright.

📖 Full step-by-step tutorial:  
👉 [Playwright Page Object Model (JavaScript)](https://software-testing-tutorials-automation.com/2025/09/playwright-page-object-model-javascript.html)


---

## 📂 Project Structure

```bash
project-root/
├─ pages/
│  └─ LoginPage.js       # Page Object Model for login page
├─ tests/
│  └─ login.spec.js      # Test file for valid/invalid login
├─ utilities/
│  ├─ testData.js        # Test data (valid + invalid users)
│  └─ login.html         # Sample offline login page
├─ playwright.config.js  # Playwright configuration
```

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/playwright-pom-demo.git
   cd playwright-pom-demo

2. Install dependencies:
   npm install
3. Run tests:
   npx playwright test

## Features

- **Page Object Model (POM)** for better test structure
- **Offline demo login page (login.html)** so tests don’t depend on external websites
- **Valid and Invalid login scenarios** using testData.js

## Related Tutorial
This project is explained in detail here: [Playwright Page Object Model (JavaScript)](https://software-testing-tutorials-automation.com/2025/09/playwright-page-object-model-javascript.html). 
Visit the article for explanation, code walkthrough, and step-by-step guide.

## License
This project is open-source and free to use for learning purposes.




















