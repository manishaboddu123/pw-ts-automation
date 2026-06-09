import { Page } from "@playwright/test";
import { BasePage } from "./basepage";

class EmpPage extends BasePage{
    // page:Page;
    FirstName;
    LastName;
    Savebtn;
    constructor(page:Page){
        super(page);
        // this.page = page;
        this.FirstName = page.locator("//input[@placeholder='First Name']");
        this.LastName = page.locator("//input[@placeholder='Last Name']");
        this.Savebtn = page.locator("//button[normalize-space()='Save']");
    }
    async FillFname(fname:string){
        await this.FirstName.fill(fname);
    }
    async FillLname(lname:string){
        await this.LastName.fill(lname);
    }
    async ClickSave(){
        await this.Savebtn.click();
    }
}
export default EmpPage;