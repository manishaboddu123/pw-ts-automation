import {test,expect} from '@playwright/test';

test("Verify Iframe", async({page})=>{
    await page.goto("https://api.jquery.com/dblclick/");
    let Frameelm = page.frameLocator("div.code-demo iframe");
    await Frameelm.locator("body > div").dblclick();
    await page.waitForTimeout(4000);
})