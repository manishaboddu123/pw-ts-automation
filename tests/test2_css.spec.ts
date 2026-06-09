import {test, expect} from "@playwright/test";

test('login user with css', async({page}) =>{
  await page.goto("https://vibetestq-osondemand.orangehrm.com/auth/login");
  await page.locator('input[placeholder="Username"]').fill("testadmin");
  await page.fill('input[placeholder="Password"]', "Vibetestq@123#");
  await page.click("button[type='submit']");
  await expect(page.locator("h6")).toHaveText("Dashboard");
})