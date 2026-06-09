import {test,expect} from '@playwright/test';

test("Verify Itabs", async({page})=>{
    await page.goto("https://vibetestq-osondemand.orangehrm.com/auth/login");
    await page.locator("//a[normalize-space()='OrangeHRM, Inc']").click();
    await page.context().waitForEvent("page");

    let all_pages = page.context().pages();
    console.log("pages opened are:"+all_pages.length)

    for(let i=0;i<all_pages.length;i++){
        let title = await all_pages[i].title();
        console.log("page title is:"+title);
    }
    let new_page = all_pages[1];
    await new_page.getByPlaceholder("Your email address").fill("manisha@gmail.com");
    new_page.close();
});
    