import {test,expect} from 'playwright/test'

test("verify alerts", async({page}) =>{
    await page.goto("https://www.apsrtconline.in/oprs-web/");

    // await page.pause();
    // await page.waitForTimeout(5000);

    // page.on('dialog', async(popup)=>{
    //     await popup.accept();
    // });

    // page.once('dialog', async(alert)=> {
    //     console.log("alert type:"+alert.type());
    //     if(alert.message().includes("Please select start place.")){
    //         console.log("alert with message:"+alert.message());
    //         await alert.accept();
    //     }else{
    //         console.log("alert failed with msg:"+alert.message());
    //     }
    // });

    // await page.waitForTimeout(1000);
    // await page.click("input[id='searchBtn']");

    // await page.locator("input[id='fromPlaceName']").fill("hyderabad");


    page.on('dialog', async (dialog) => {
        if (dialog.type() === 'alert') {
            if(dialog.message().includes("Please select start place.")){
                console.log("alert with msessge:"+dialog.message());
            }
            await dialog.accept();
        } else if(dialog.type() === 'confirm') {
            if(dialog.message().includes("Please select start place.")){
                console.log("confirm alert with msessge:"+dialog.message());
            }
            await dialog.accept();               
            // await dialog.dismiss();
        } else if (dialog.type() === 'prompt') {
            if(dialog.message().includes("Please select start place.")){
                console.log("prompt alert with msessge:"+dialog.message());
            }
            await dialog.accept('my answer');    
            // await dialog.dismiss();           
        }
    });
    await page.click("input[id='searchBtn']");

    // await page.locator("input[id='fromPlaceName']").fill("hyderabad");

});