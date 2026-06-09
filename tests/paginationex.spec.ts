import { test, expect } from '@playwright/test';


test('Employee list using pagination ', async ({ page }) => {
    await page.goto("https://vibetestq-osondemand.orangehrm.com/auth/login");
    await page.fill('input[name="username"]', 'testadmin');
    await page.locator('input[name="password"]').fill('Vibetestq@123#');
    await page.locator("//button[@type='submit']").click();
    await expect(page.locator("//h6[text()='Dashboard']")).toBeVisible();
    await page.locator("//a[normalize-space()='PIM']").click();
    await page.locator("//a[normalize-space()='Employee List']").click();
    // let ispaginationvisible = await page.locator("i.bi-chevron-right").isVisible();
    // let ispaginationvisible;
    // do {
    //     await page.locator("div[role='row'] div[role='cell']").nth(1).allInnerTexts().then((names) => {
    //         console.log(names);
    //     });
    //     ispaginationvisible = await page.locator("i.bi-chevron-right").isVisible();
    //     if(ispaginationvisible){
    //         await page.locator("i.bi-chevron-right").click();

    //     }
    //  } while (ispaginationvisible);
    let isPaginationVisible;
     while (isPaginationVisible) {
        await expect(page.locator("div.oxd-table-cell:nth-of-type(2)").first()).toBeVisible({ timeout: 10000 });
        let allElms = await page.locator("div.oxd-table-cell:nth-of-type(2)").all();
        console.log("Number of records in current page " + allElms.length);
        for (let i = 0; i < allElms.length; i++) {
            let text = await allElms[i].innerText();
            console.log(text);
        }

        isPaginationVisible = await page.locator("i.bi-chevron-right").isVisible();
        console.log("Is pagination visible " + isPaginationVisible);
        if (isPaginationVisible) {
            await page.locator("i.bi-chevron-right").click();
        }
    }
})