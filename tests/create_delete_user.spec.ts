import {test, expect } from "@playwright/test";

test('create user', async({page}) =>{
    await page.goto("https://vibetestq-osondemand.orangehrm.com/auth/login");
    await page.getByRole("textbox", {name: "Username"}).fill("testadmin");
    await page.getByRole("textbox",{name:"Password"}).fill("Vibetestq@123#");
    await page.getByRole("button", {name:"Login"}).click();
    await page.getByRole("link", {name: "PIM"}).click();
    await page.getByRole("button",{name:" Add"}).click();
    await page.getByRole("textbox",{name:"First Name"}).fill("test");
    await page.getByRole("textbox", {name:"Last Name"}).fill("user1");
    let Emp_id = await page.locator("//label[text()='Employee Id']/../..//input").inputValue();
    console.log(Emp_id);

    // await page.getByRole("button",{name:"Save"}).click();
//div[normalize-space()=0122]/../..//i[@class="oxd-icon bi-check oxd-checkbox-input-icon"]    //delete user

    // await page.getByRole("link", {name:"Employee List"}).click();
    // await page.fill("//label[text()='Employee Id']/../..//input", Emp_id);
    // await page.getByRole("button", {name:"Search"}).click();
    // await page.locator(`//div[@role='row']//div[text()='${Emp_id}']`).click();
    // await page.pause();
});
  
