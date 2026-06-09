import { expect } from "@playwright/test"
import { test } from "../fixtures/wbasetest";
import appCredentials from "../test_data/appcredentials.json";

test.describe.configure({mode:'serial'});
test.describe("Orange HRM end to end tests", () =>{
    test("login test", async({basepage,loginpage, dashboardpage, emppage, personaldetailspage,pimpage})=>{
    await basepage.NavigatetoURL("/");
    await loginpage.EnterUsername(appCredentials["vibetestq"].username);
    await loginpage.EnterPassword(appCredentials["vibetestq"].password);
    await loginpage.LoginButton();
    await dashboardpage.VerifyDashboardPage();
    }),
    test("add employee", async({basepage,loginpage, dashboardpage, emppage, personaldetailspage,pimpage})=>{
        await dashboardpage.ClickPIM();

        await pimpage.VerifyPIMHeader();
        await pimpage.ClickAdd();

        await emppage.FillFname("manisha");
        await emppage.FillLname("b");
        await emppage.ClickSave();

        await personaldetailspage.VerifyHeader()
    })
})