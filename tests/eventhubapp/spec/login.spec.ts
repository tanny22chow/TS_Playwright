import {test} from '../../../src/eventhubapp/fixtures/commonfixture';
import {LandingPage} from '../../../src/eventhubapp/pages/landingpage';
import {EventPage , createNewEventPage} from '../../../src/eventhubapp/pages/eventPage';
import {expect} from '@playwright/test';
test.describe.serial('Login', () => {
    test('Login with valid credentials', async ({loginpage, page}) => {
        await page.goto('/login');
        await loginpage.login('tanmoy1991chowdhury@gmail.com', 'Tanmoy@1991');
        // Add assertions here
        const landingPage = new LandingPage(page);
        await landingPage.clickEventsTab();
        const eventPage = new EventPage(page);
        await eventPage.clickAddNewEvent();
        const createEventPage = new createNewEventPage(page);
        const eventDetails = {
            eventName: 'Music Event',
            category: 'Concert',
            city: 'New York',
            venue: 'Madison Square Garden',
            price: '50',
            eventDate: '2026-10-31T15:22',
            totalseats: '100'
        };
        await createEventPage.createNewEvent(eventDetails);
        await landingPage.clickEventsTab();
        await page.waitForLoadState('networkidle');
        await expect(await eventPage.searchEvent(eventDetails.eventName)).toHaveLength(1);

    });

    test('delete events', async ({loginpage, page}) => {
        const eventDetails = {
            eventName: 'Music Event',
            category: 'Concert',
            city: 'New York',
            venue: 'Madison Square Garden',
            price: '50',
            eventDate: '2026-10-31T15:22',
            totalseats: '100'
        };
        await page.goto('/login');
        await loginpage.login('tanmoy1991chowdhury@gmail.com', 'Tanmoy@1991');
        const landingPage = new LandingPage(page);
        await landingPage.clickEventsTab();
        const eventPage = new EventPage(page);
        await eventPage.clickAddNewEvent();
        const createEventPage = new createNewEventPage(page);
        await createEventPage.deleteEventByName(eventDetails.eventName)
    })

})

