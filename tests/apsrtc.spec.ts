import {test, expect} from '@playwright/test';

test("Verify apsrtc website", async({page}) =>{
    await page.goto("https://www.apsrtconline.in/oprs-web/");
    await page.locator("input[id='fromPlaceName']").fill("Hyderabad");
    await page.locator("//span[text()='HYDERABAD']").click();
    await page.locator("input[id='toPlaceName']").fill("tirupathi");
    await page.locator("//span[text()='TIRUPATHI']").click();
    // await page.locator("input[id='txtJourneyDate']").fill("31/05/2026");
    // await page.keyboard.press("Escape");
    await page.click("input[id='txtJourneyDate']")
    await page.locator("(//a[text()='30'])[1]").click()
    await page.click("input[id='searchBtn']");
    await expect(page.getByText("Book ticket in advance")).toBeVisible();
    await page.locator("//span[text()='Bus Type']").click();
    await page.locator("//span[normalize-space()='A/C CLASS']").click();
    let ac_services = await page.locator("div.srvceNO:visible").all();
    console.log("AC service buses are:"+ac_services.length);
    for(let i=0;i<ac_services.length;i++){
        let text = (await ac_services[i].innerText()).trim();
        console.log(text);
    }

})




// setTimeout(()=>{
//     debugger;
// },5000);