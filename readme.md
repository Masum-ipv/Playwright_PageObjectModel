# 🚀 Playwright Login Test with Page Object Model (POM)

This project demonstrates end-to-end testing of the [SauceDemo](https://www.saucedemo.com/v1/) login functionality using **Playwright**, **TypeScript**, and the **Page Object Model (POM)** design pattern.

---

## 🧱 Project Structure

The project is structured as follows:

```bash
.
├── pages
│   └── login.ts
├── tests
│   └── runner
│       └── login.spec.ts
├── package.json
├── playwright.config.ts
└── README.md
```

---

## 📦 Tech Stack

- [Playwright](https://playwright.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- Page Object Model (POM) design pattern

---

## 📄 What is Page Object Model (POM)?

POM is a design pattern that creates an object repository for web UI elements. It helps make your test code more readable, reusable, and maintainable by separating page structure from test logic.

In this project:

- All selectors and actions for the login page are in `LoginPage.ts`.
- Tests interact with the `LoginPage` class, not directly with locators.

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/playwright-login-pom.git
cd playwright-login-pom
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Tests

```bash
npx playwright test
```

### 4. View Test Results

```bash
npx playwright show-report
```
