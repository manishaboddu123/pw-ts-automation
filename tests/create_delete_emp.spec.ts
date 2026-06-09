import { test, expect } from '@playwright/test';

test('Create and Delete Employee using Xpath and CSS', async ({ page }) => {
    await page.goto("https://vibetestq-osondemand.orangehrm.com/auth/login");

    await page.fill('input[name="username"]', 'testadmin');
    await page.locator('input[name="password"]').fill('Vibetestq@123#');
    await page.locator("//button[@type='submit']").click();

    await expect(page.locator("//h6[text()='Dashboard']")).toBeVisible();

    await page.locator("//a[normalize-space()='PIM']").click();
    await page.locator("//button[normalize-space()='Add']").click();
    await page.locator("//input[@placeholder='First Name']").fill("manisha");
    await page.locator("//input[@placeholder='Last Name']").fill("b");

    let empid= await page.locator("//label[text()='Employee Id']/../..//input").inputValue();
    console.log("Employee Id is "+empid);
    await page.locator("//button[normalize-space()='Save']").click();

    await expect(page.locator("//h6[text()='Personal Details']")).toBeVisible({timeout: 10000});
    await page.locator("//a[normalize-space()='Employee List']").click();

    await page.locator("//label[text()='Employee Id']/../..//input").fill(empid);
    await page.locator(" //button[normalize-space()='Search']").click();
    let emp_xpath =`//div[text()='${empid}']/../..//i[contains(@class, 'oxd-checkbox-input-icon')]`
    await page.locator(emp_xpath).click();

    await page.locator("//button[normalize-space()='Delete Selected']").click();
    await page.locator(" //button[normalize-space()='Yes, Delete']").click();

    await page.locator("//label[text()='Employee Id']/../..//input").fill(empid);
    await page.locator(" //button[normalize-space()='Search']").click();
    await expect(page.locator("//span[normalize-space()='No Records Found']")).toBeVisible();
    
})
