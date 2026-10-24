import {Page, Locator} from '@playwright/test';

 type updateEventDetails = {
    eventName: string;
    category: string;
    city: string;
    venue: string;
    price: string;
    eventDate: string;
    totalseats: string;
};
 class createNewEventPage {
    private page: Page;
    private titleField : Locator;
    private categoryDropdown: Locator;
    private cityField: Locator;
    private venueField: Locator;
    private priceField: Locator;
    private eventDateField: Locator;
    private eventList:Locator;
    private updateEventBtn: Locator;
    private totalseatsField: Locator;

    constructor(page: Page) {
        this.page = page;
        this.titleField = this.page.locator('#event-title-input');
        this.categoryDropdown = this.page.locator('#category');
        this.cityField = this.page.locator('#city');
        this.venueField = this.page.locator('#venue');
        this.priceField = this.page.getByPlaceholder('0.00');
        this.eventDateField = this.page.locator('//*[@id="event-date-&-time"]');
        this.eventList = this.page.locator('#event-table-row');
        this.updateEventBtn = this.page.getByText('💾 Update Event');
        this.totalseatsField = this.page.locator('#total-seats');
    
    }
     public async createNewEvent(updateEventDetails: updateEventDetails): Promise<void> {
        await this.titleField.fill(updateEventDetails.eventName);
        await this.categoryDropdown.pressSequentially(updateEventDetails.category);
        await this.cityField.fill(updateEventDetails.city);
        await this.venueField.fill(updateEventDetails.venue);
        await this.priceField.fill(updateEventDetails.price);
        await this.totalseatsField.fill(updateEventDetails.totalseats);
        await this.eventDateField.evaluate((element, value) => {
            (element as HTMLInputElement).setAttribute('value', value);
        }, updateEventDetails.eventDate);
        await this.page.locator('#add-event-btn').click();
    }
    public async getEventByname(eventName: string): Promise<Locator> {
        return await this.eventList.filter({ hasText: eventName });
    }
    public async updateEventByName(eventName: string, eventDetails: updateEventDetails): Promise<void> {
        const eventLocator = await this.getEventByname(eventName);
        await eventLocator.locator('#edit-event-btn').click();
        await this.createNewEvent(eventDetails);
        await this.updateEventBtn.click();
        
    }

}
 class EventPage {
    private page: Page;
    private eventSearchField: Locator;
    private categoryDropdown: Locator;
    private citiesDropdown: Locator;
    private addNewEventBtn: Locator;
    private eventCards: Locator;

    constructor(page: Page) {
        this.page = page;
        this.eventSearchField = this.page.getByPlaceholder('Search events, venues…');
        this.categoryDropdown = this.page.locator('#category-dropdown');
        this.citiesDropdown = this.page.locator('#cities-dropdown');
        this.addNewEventBtn = this.page.getByText('Add New Event');
        this.eventCards = this.page.locator('#event-cards');
    }
    public async searchEvent(eventName: string): Promise<Locator[]> {
        await this.eventSearchField.fill(eventName);
        await this.eventSearchField.press('Enter');
        const eventCardElements = await this.page.locator('#event-cards').filter({ hasText: eventName }).all();
        return eventCardElements;
    }  
    public clickAddNewEvent(): void {
        this.addNewEventBtn.click();
    }
    
   
}
export { EventPage, createNewEventPage };