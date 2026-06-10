import {test as base} from 'playwright/test';
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
}>({
    basepage:async({page}, use) =>{
        const basepage = new BasePage(page);
        await use(basepage);
    },
    loginpage:async({page}, use) => {
        const loginpage = new LoginPage(page);
        await use(loginpage);
    },
    dashboardpage:async({page}, use) =>{
        const dashboardPage = new DashboardPage(page);
        await use(dashboardPage);
    },
    emppage:async({page}, use) =>{
        const emppage = new EmpPage(page);
        await use(emppage);
    },
    personaldetailspage:async({page}, use) => {
        const personaldetailspage = new PersonalDetailsPage(page);
        await use(personaldetailspage);
    },
    pimpage:async({page}, use) =>{
        const pimpage = new PIMPage(page);
        await use(pimpage);
    }
});