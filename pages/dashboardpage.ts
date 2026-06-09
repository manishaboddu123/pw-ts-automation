import {Page,expect} from 'playwright/test';
import LoginPage from './loginpage';

class DashboardPage extends LoginPage {
    // page:Page;
    DashboardHeader;
    PIMLink;
    constructor(page:Page){
        super(page);
        // this.page = page;
        this.DashboardHeader = page.locator("//h6[text()='Dashboard']");
        this.PIMLink = page.locator("//a[normalize-space()='PIM']");
    }
    async VerifyDashboardPage(){
        await expect(this.DashboardHeader).toBeVisible();
    }
    async ClickPIM(){
        await this.PIMLink.click();
    }
}
export default DashboardPage;