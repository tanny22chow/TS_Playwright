import { Page, Locator } from '@playwright/test';

export class LandingPage {
    private page: Page;
    private browseEventsBtn: Locator;
    private myBookingsBtn: Locator;
    private exploreAllEventsBtn: Locator;
    private eventsTab: Locator;
    private bookingsTab: Locator;


    constructor(page: Page) {
        this.page = page;
        this.browseEventsBtn = this.page.getByText('Browse Events');
        this.myBookingsBtn = this.page.getByText('My Bookings');
        this.exploreAllEventsBtn = this.page.getByText('Explore All Events');
        this.eventsTab = this.page.locator('#nav-events');
        this.bookingsTab = this.page.locator('#nav-bookings');
    }
    public async clickBrowseEvents(): Promise<void> {
        await this.browseEventsBtn.click();
    }
    public async clickMyBookings(): Promise<void> {
        await this.myBookingsBtn.click();
    }
    public async clickExploreAllEvents(): Promise<void> {
        await this.exploreAllEventsBtn.click();
    }
    public async clickEventsTab(): Promise<void> {
        await this.eventsTab.click();
    }
    public async clickBookingsTab(): Promise<void> {
        await this.bookingsTab.click();
    }
    public async findEventByName(eventName: string): Promise<boolean> {
        const eventLocator = await this.page.locator('#event-card').filter({ hasText: eventName });
        return  eventLocator.isVisible();
    }
}