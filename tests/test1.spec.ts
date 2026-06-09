import {test, expect } from "@playwright/test";

// test('login test', async ({page}) => {
//   await page.goto('https://vibetestq-osondemand.orangehrm.com/auth/login');
//   await page.getByRole("textbox", {name: "Username"}).fill("testuser");
//   await page.getByRole("textbox",{name:"Password"}).fill("Vibetestq@123#");
//   await page.getByRole("button", {name:"Login"}).click();
//   await expect(page.getByRole("heading",{name:"Dashboard"})).toBeVisible();
// });


test('create user', async({page}) =>{
  await page.goto("https://vibetestq-osondemand.orangehrm.com/auth/login");
  await page.getByRole("textbox", {name: "Username"}).fill("testadmin");
  await page.getByRole("textbox",{name:"Password"}).fill("Vibetestq@123#");
  await page.getByRole("button", {name:"Login"}).click();
  await page.getByRole("link", {name: "PIM"}).click();
  await page.getByRole("button",{name:" Add"}).click();
  await page.getByRole("textbox",{name:"First Name"}).fill("manisha");
  await page.getByRole("textbox", {name:"Last Name"}).fill("b");
  // await expect(page.getByRole("paragraph",{name:""})).toBeEnabled();
  const createLoginDetailsToggle = page.locator('.oxd-switch-input');
  await expect(createLoginDetailsToggle).toBeEnabled();
  await createLoginDetailsToggle.click();
  // await page.pause();
  await page.getByRole("textbox").nth(5).fill("manishab");
  await page.getByRole("textbox").nth(6).fill("Manisha@123");
  await page.getByRole("textbox").nth(7).fill("Manisha@123");
  // await page.pause();
  await page.getByRole("button",{name:"Save"}).click();
  await page.locator(".oxd-userdropdown-name").click();
  await page.getByRole("menuitem", {name:"Logout"}).click();
  await page.getByRole("textbox", {name: "Username"}).fill("manishab");
  await page.getByRole("textbox",{name:"Password"}).fill("Manisha@123");
  await page.getByRole("button", {name:"Login"}).click();
  await expect(page.getByRole("heading",{name:"Dashboard"})).toBeVisible();
  // await page.pause();
});




















// Playwright Selectors
// 1. Role based selector
// 2. Text based selector
// 3. CSS selector
// 4. XPath selector

// getByRole() is a role based selector,
// it is used to select elements based on their role and name.
// It is the most recommended selector as it is more stable and less prone to changes in the UI. It also makes the test more readable and maintainable.

// getbyText() is a text based selector,
// it is used to select elements based on their text content.
// It is less stable than getByRole() as it can be affected by changes in the UI, such as changes in the text content of the element.
// It is also less readable and maintainable than getByRole() as it does not provide any context about the element being selected.
