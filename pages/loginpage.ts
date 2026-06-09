import {Page} from 'playwright/test';
import { BasePage } from './basepage';

class LoginPage extends BasePage {
    // page:Page;
    username;
    password;
    loginbtn;
    constructor(page:Page){
        super(page);
        // this.page = page;
        this.username = page.locator('input[name="username"]').describe("username textbox");
        this.password = page.locator('input[name="password"]').describe("password textbox");
        this.loginbtn = page.locator("//button[@type='submit']").describe("login button");
    }
    async EnterUsername(uname:string){
        await this.username.fill(uname);
    }
    async EnterPassword(pswd:string){
        await this.password.fill(pswd);
    }
    async LoginButton(){
        await this.loginbtn.click();
    }
}

export default LoginPage;