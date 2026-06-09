import {test,expect} from "playwright/test";
import  fs from 'fs';

test("file input example", async({page}) => {
    await page.goto("https://vibetestq-osondemand.orangehrm.com/auth/login");
    await page.locator("input[placeholder='Username']").fill("testadmin");
    await page.locator("input[placeholder='Password']").fill("Vibetestq@123#");
    await page.locator("//button[@type='submit']").click();
    await expect(page.locator("//h6[text()='Dashboard']")).toBeVisible();
    await page.locator("//a[normalize-space()='PIM']").click();
    await page.locator("//button[normalize-space()='Add']").click();
    await page.getByPlaceholder("First Name").fill("test");
    await page.getByPlaceholder("Last Name").fill("user");
    await page.locator("//label[text()='Employee Id']/../..//input").inputValue();
    await page.locator("//button[normalize-space()='Save']").click();
    await expect(page.locator("//h6[normalize-space()='Personal Details']")).toBeVisible();
    await page.locator("//button[normalize-space()='Add']").click();
    await page.locator("input.oxd-file-input").setInputFiles("test_data/sample.txt");
    await page.waitForTimeout(10000);
    await page.click("div.orangehrm-attachment button[type='submit']");
    await page.waitForTimeout(5000);
    let download_file = page.waitForEvent('download');

    await page.click("i.bi-download");
    let download = await download_file;
    await download.saveAs('downloads/' + download.suggestedFilename());

    fs.exists("downloads/" + download.suggestedFilename(), (exists: boolean) => {
        if (exists) {
                console.log("file is existed with name:"+download.suggestedFilename());
        } else{
            console.log("file is not existed"+download.suggestedFilename());
        } 
    })
})