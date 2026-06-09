import {Page,expect} from 'playwright/test';
import { BasePage } from './basepage';

class PersonalDetailsPage extends BasePage{
    // page:Page;
    Personal_details_header;
    constructor(page:Page){
        super(page);
        // this.page = page;
        this.Personal_details_header = page.locator("//h6[text()='Personal Details']");
    }
    async  VerifyHeader(){
        await expect(this.Personal_details_header).toBeVisible();
    }
}
export default PersonalDetailsPage;