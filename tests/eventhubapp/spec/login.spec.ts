import {test} from '../../../src/eventhubapp/fixtures/commonfixture';
import {LandingPage} from '../../../src/eventhubapp/pages/landingpage';
import {EventPage , createNewEventPage} from '../../../src/eventhubapp/pages/eventPage';
import {expect} from '@playwright/test';
test.describe('Login', () => {
    test.describe.serial('Event management app login', async () => {
        test('Login with valid credentials', async ({loginpage, page,eventdata,movetoCreateEventPage}) => {
            const createEventPage = new createNewEventPage(page);
            await createEventPage.createNewEvent(eventdata[0]);
            const landingPage = new LandingPage(page);
            await landingPage.clickEventsTab();
            const eventPage = new EventPage(page);
            await page.waitForLoadState('networkidle');
            await expect(await eventPage.searchEvent(eventdata[0].eventName)).toHaveLength(1);

        });
        test('delete events', async ({loginpage, page,eventdata,movetoCreateEventPage}) => {
            const createEventPage = new createNewEventPage(page);
            await createEventPage.deleteEventByName(eventdata[0].eventName)
        });
    })
    test.describe.serial('data driven event manage',async ()=>{
        test('create events', async ({eventdata ,movetoCreateEventPage,page})=>{
            const createEventPage = new createNewEventPage(page);
            for(let i=1; i<eventdata.length; i++){
                const ev = eventdata[i];
                await createEventPage.createNewEvent(ev);
                await page.waitForLoadState('networkidle');
            }
            const landingPage = new LandingPage(page);
            await landingPage.clickEventsTab();
            await page.waitForLoadState('networkidle');
            const eventPage = new EventPage(page);
            for(let i=1; i<eventdata.length; i++){
                await expect(await eventPage.searchEvent(eventdata[i].eventName)).toHaveLength(1);
            }

        })
        test('delete events', async ({eventdata ,movetoCreateEventPage,page})=>{
            const createEventPage = new createNewEventPage(page);
            for(let i=1; i<eventdata.length; i++){
                const ev = eventdata[i];
                await createEventPage.deleteEventByName(ev.eventName);
                await page.waitForLoadState('networkidle');
            }
            const landingPage = new LandingPage(page);
            await landingPage.clickEventsTab();
            await page.waitForLoadState('networkidle');
            const eventPage = new EventPage(page);
            for(let i=1; i<eventdata.length; i++){
                await expect(await eventPage.searchEvent(eventdata[i].eventName)).toHaveLength(0);
            }

        })
    })



})

