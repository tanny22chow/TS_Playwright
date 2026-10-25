import {test as base, expect, Page, Locator, APIRequestContext ,request} from '@playwright/test';
import { LoginPage } from '../pages/loginpage';
import {EventPage, updateEventDetails} from "../pages/eventPage";
import process  from "process";
import {LandingPage} from "../pages/landingpage";

const eventdata: updateEventDetails[]= JSON.parse(JSON.stringify(require('../../..//tests/resources/eventdata.json')));

type TestFixtures = {
    loginpage: LoginPage;
    eventdata: updateEventDetails[];
    movetoCreateEventPage: void;
};
type ApiTestFixtures={
    basectx: APIRequestContext
}

export const test = base.extend<TestFixtures>({
    loginpage: async ({ page }, use) => {
        const loginpage = new LoginPage(page);
        await use(loginpage);
    },
    eventdata: async({page},use)=>{
        await use(eventdata);
    },
    movetoCreateEventPage : async ({page,loginpage},use)=>{
        await page.goto(process.env.BASE_URL + "login");
        await loginpage.login("tanmoy1991chowdhury@gmail.com","Tanmoy@1991");
        const landingPage = new LandingPage(page);
        await landingPage.clickEventsTab();
        const eventPage = new EventPage(page);
        await eventPage.clickAddNewEvent();
        await use();
    }
})

export const apitest=base.extend<ApiTestFixtures>({
    basectx: async ({},use)=>{
        const ctx= await request.newContext({
            baseURL: process.env.API_BASE_URL,
            extraHTTPHeaders:{
                'contentType': 'application/json',
                'accept': 'application/json',
                'x-api-key':'ba753a9d-a155-477f-b813-31453b28f2ff'
            }
        });
        await use(ctx);
    }
})
