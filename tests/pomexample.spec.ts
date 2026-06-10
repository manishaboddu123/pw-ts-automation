import {test, expect } from "@playwright/test";
import LoginPage from '@pages/loginpage';
import DashBoardPage from '@pages/dashboardpage';
import PIMPage from "@pages/PIMPage";
import EmpPage from "@pages/emppage";
import PersonalDetailsPage from "@pages/PersonalDetailsPage";

test('POM Example', async ({page}) => {
    await page.goto('https://vibetestq-osondemand.orangehrm.com/auth/login');
    //login page
    let loginpage = new LoginPage(page);
    await loginpage.EnterUsername("testadmin");
    await loginpage.EnterPassword("Vibetestq@123#");
    await loginpage.LoginButton();
    //Dashboard page
    let dashboardpage = new DashBoardPage(page);
    await dashboardpage.VerifyDashboardPage();
    await dashboardpage.ClickPIM();
    //PIM page
    let Pimpage = new PIMPage(page);
    await Pimpage.VerifyPIMHeader();
    await Pimpage.ClickAdd();
    //Emp page
    let emppage = new EmpPage(page);
    await emppage.FillFname("David");
    await emppage.FillLname("Smith");
    await emppage.ClickSave();
    //personaldetails page
    let personaldetailspage = new PersonalDetailsPage(page);
    await personaldetailspage.VerifyHeader();
})