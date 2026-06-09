import {test, expect} from 'playwright/test';

test('login test', async ({ page }) => {
    // Navigate to Application
    await page.goto("https://vibetestq-osondemand.orangehrm.com/auth/login");
    await page.getByRole("textbox", { name: "Username" }).fill("testadmin");
    await page.getByRole("textbox", { name: "Password" }).fill("Vibetestq@123#");
    await page.getByRole("button", { name: "Login" }).click();
    // verify login successful
    await expect(page.getByRole("heading", { name: "Dashboard" })).toBeVisible();
    await page.getByRole("link", { name: "PIM" }).click();
    await page.getByRole("button", { name: "Add" }).click();
    await page.getByRole("textbox", { name: "First Name" }).fill("John");
    await page.getByRole("textbox", { name: "Last Name" }).fill("Doe");
    let empId=await page.locator("//label[text()='Employee Id']/../..//input").getAttribute("value");
    await page.getByRole("button", { name: "Save" }).click();
    await expect(page.getByRole("heading", { name: "Personal Details" })).toBeVisible({ timeout: 10000 });
    await page.getByRole("link", { name: "Admin" }).click();
    await page.getByRole("button", { name: "Add" }).click();
    await page.getByText("-- Select --").first().click();
    await page.getByText("ESS").first().click();
    await page.getByRole("textbox",{ name: "Type for hints..." }).fill("john doe");
    await page.getByText("John Doe").nth(1).click();
    await page.getByText("-- Select --").nth(2).click();
    await page.getByText("Enabled").first().click();
    
    await page.locator("//label[normalize-space()='Username']/following::input[1]").fill("johndoe123");
    await page.locator("//label[normalize-space()='Password']/following::input[1]").fill("JohnDoe@123#");
    await page.locator("//label[normalize-space()='Confirm Password']/following::input[1]").fill("JohnDoe@123#"); 
    await page.getByRole("button", { name: "Save" }).click();
    
})