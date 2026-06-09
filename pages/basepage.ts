import {Page} from "@playwright/test";
    
export class BasePage {
    page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    async NavigatetoURL(url:string){
        await this.page.goto(url);
        console.log("navigate to url:"+url);
    }

}
