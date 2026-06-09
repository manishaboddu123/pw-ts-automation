import {expect} from 'playwright/test';
import { test } from '../fixtures/basetest';

test("create an employee with POM base class example", async({basepage,loginpage, dashboardpage, emppage, personaldetailspage,pimpage})=>{
    await basepage.NavigatetoURL("https://vibetestq-osondemand.orangehrm.com/auth/login");
    await loginpage.EnterUsername("testadmin");
    await loginpage.EnterPassword("Vibetestq@123#");
    await loginpage.LoginButton();

    await dashboardpage.VerifyDashboardPage();
    await dashboardpage.ClickPIM();

    await pimpage.VerifyPIMHeader();
    await pimpage.ClickAdd();

    await emppage.FillFname("manisha");
    await emppage.FillLname("b");
    await emppage.ClickSave();

    await personaldetailspage.VerifyHeader()

})