import {Page, test as base} from 'playwright/test';
import { BasePage } from '@pages/basepage';
import LoginPage from '@pages/loginpage';
import DashboardPage from '@pages/dashboardpage';
import EmpPage from '@pages/emppage';
import PersonalDetailsPage from '@pages/PersonalDetailsPage';
import PIMPage from '@pages/PIMPage';

export const test = base.extend<{
    basepage:BasePage;
    loginpage:LoginPage;
    dashboardpage:DashboardPage;
    emppage:EmpPage;
    personaldetailspage:PersonalDetailsPage;
    pimpage:PIMPage;
},{wpage:Page} >({ 
    wpage:[async({browser}, use) =>{
      const wcontext = await browser.newContext();
      const wpage = await wcontext.newPage();
      await use(wpage);
    }, {scope:"worker"}],
    basepage:async({wpage}, use) =>{
        const basepage = new BasePage(wpage);
        await use(basepage);
    },
    loginpage:async({wpage}, use) => {
        const loginpage = new LoginPage(wpage);
        await use(loginpage);
    },
    dashboardpage:async({wpage}, use) =>{
        const dashboardPage = new DashboardPage(wpage);
        await use(dashboardPage);
    },
    emppage:async({wpage}, use) =>{
        const emppage = new EmpPage(wpage);
        await use(emppage);
    },
    personaldetailspage:async({wpage}, use) => {
        const personaldetailspage = new PersonalDetailsPage(wpage);
        await use(personaldetailspage);
    },
    pimpage:async({wpage}, use) =>{
        const pimpage = new PIMPage(wpage);
        await use(pimpage);
    }

})