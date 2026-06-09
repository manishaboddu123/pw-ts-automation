import {Page,expect} from 'playwright/test'
import { BasePage } from './basepage';

class PIMPage extends BasePage{
    // page:Page;
    PIMHeader;
    Addbtn;
    constructor(page:Page){
        super(page)
        this.page = page;
        this.PIMHeader = page.locator("//h6[text()='PIM']");
        this.Addbtn = page.locator("//button[normalize-space()='Add']");
    }
    async VerifyPIMHeader(){
        await expect(this.PIMHeader).toBeVisible();
    }
    async ClickAdd(){
        await this.Addbtn.click();
    }
}
export default PIMPage ;