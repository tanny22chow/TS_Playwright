import {test} from '../../../src/eventhubapp/fixtures/commonfixture';
import {LandingPage} from '../../../src/eventhubapp/pages/landingpage';
import {EventPage , createNewEventPage} from '../../../src/eventhubapp/pages/eventPage';
import {expect} from '@playwright/test';

test('Login with valid credentials', async ({ loginpage ,page}) => {
    await page.goto('/login');
    await loginpage.login('tanmoy1991chowdhury@gmail.com', 'Tanmoy@1991');
    // Add assertions here
    const landingPage =  new LandingPage(page);
    await landingPage.clickEventsTab();
    const eventPage = new EventPage(page);
    await eventPage.clickAddNewEvent();
    const createEventPage =new createNewEventPage(page);
    const eventDetails = {
        eventName: 'Music Event',
        category: 'Concert',
        city: 'New York',
        venue: 'Madison Square Garden',
        price: '50',
        eventDate: '2027-12-25T10:10',
        totalseats: '100'
    };
    await createEventPage.createNewEvent(eventDetails);
    await landingPage.clickEventsTab();
    await eventPage.searchEvent(eventDetails.eventName);
   // await expect(eventPage.searchEvent(eventDetails.eventName)).toHaveLength(1);
})

