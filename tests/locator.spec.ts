import {test,expect} from "playwright/test"

test("login with locator example", async({page}) =>{
    let username = page.locator('input[name]="username"').describe("username textbox");
    let password = page.locator('input[name="password"').describe("password textbox");
    let submit = page.locator('//button[@type="submit"').describe("submit button");
    await page.goto("https://vibetestq-osondemand.orangehrm.com/auth/login");
    await username.fill("testadmin");

})