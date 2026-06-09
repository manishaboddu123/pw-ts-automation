import {test,expect} from '@playwright/test'

test("shadow dom", async ({page})=>{

    await page.goto("https://vibetestq.com/testweb/sandbox/");
    await page.click("text=Drag, Drop & Shadow");
    await page.fill("input#shadow-txt","Hello Shadow DOM");
    await page.pause();
    let shadowText = await page.locator("input#shadow-txt").inputValue();
    console.log("Text in shadow dom is "+shadowText);

})