import { test, expect } from "@playwright/test";
import LoginPage from "../../pages/login";

test("Login test with valid credentials", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goToLoginPage();
  await loginPage.login("standard_user", "secret_sauce");
  await expect(page.getByText("Products")).toBeVisible();
});
