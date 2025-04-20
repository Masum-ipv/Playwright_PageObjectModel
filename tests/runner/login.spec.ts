import { test, expect } from "@playwright/test";
import LoginPage from "../../pages/login";

test("Login test with valid credentials", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await page.pause();
  await loginPage.goToLoginPage();
  await loginPage.login(process.env.USER_NAME, process.env.PASSWORD);
  await expect(page.getByText("Products")).toBeVisible();
});
