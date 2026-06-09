import { expect } from "@playwright/test"
import { test } from "../fixtures/basetest";
// import appCredentials from "../test_data/appcredentials.json";
// import EmpData from "../test_data/empdata.json";
import * as data from "../test_data/index";

test.describe("login with base and DDT", () => {
    test.beforeEach(async ({ page, basepage, loginpage, dashboardpage}) => {
        page.on("requestfinished", async(request) => {
            const response = await request.response();
            if (response){
                console.log("request url:", request.url());
                console.log("request method:", request.method());
                console.log("response status:", response.status());
                console.log("response body:", JSON.stringify(await response));
            }
        });
        await basepage.NavigatetoURL("/");
        await loginpage.EnterUsername(data["vibetestq"].username);
        await loginpage.EnterPassword(data["vibetestq"].password);
        await loginpage.LoginButton();
        await dashboardpage.VerifyDashboardPage();
    });

    data.empData.forEach((emp) => {
        test(` create Employee - ${emp.firstName} ${emp.lastName}`,async({page, dashboardpage, pimpage, emppage, personaldetailspage})=> {
        await dashboardpage.ClickPIM();
        await pimpage.VerifyPIMHeader();
        await pimpage.ClickAdd();

        await emppage.FillFname(emp.firstName);
        await emppage.FillLname(emp.lastName);
        await emppage.ClickSave();

            // await personaldetailspage.VerifyHeader()
        })
    })
});