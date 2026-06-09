import { expect } from "@playwright/test"
import { test } from "../fixtures/basetest";
import appCredentials from "../test_data/appcredentials.json";


test.describe("test with base and data", () => {
    test("create an employee with POM base class example", async({basepage,loginpage, dashboardpage, emppage, personaldetailspage,pimpage})=>{
    await basepage.NavigatetoURL("/");
    await loginpage.EnterUsername(appCredentials["vibetestq"].username);
    await loginpage.EnterPassword(appCredentials["vibetestq"].password);
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
    
    test('Create an emloyee with base and data - Open Source', async ({ basepage,loginpage }) => {
        await basepage.NavigatetoURL("/");
        await loginpage.EnterUsername(appCredentials["opensource"].username)
        await loginpage.EnterPassword(appCredentials["opensource"].password);
        await loginpage.LoginButton();
    });

});

