import { test, expect, Page, Locator } from '@playwright/test';
import { LandingPage } from '../PageObjects/LandingPage';


test.describe('Heroku Landing Page', () => {
    let landingPage: LandingPage;
    let page: Page;
    test.beforeEach(async ({ page }) => {
        landingPage = new LandingPage(page);
        await page.goto('/');
    });
    test.use({
            httpCredentials: {
                username: 'admin',
                password: 'admin'
            }
        })

    test('should have the correct title', async ({ page }) => {
        await expect(page).toHaveTitle('The Internet');
    });
    test('should have all the expected links', async ({page}) => {
        await page.waitForLoadState('networkidle');
        await expect(landingPage.abTestingLink).toBeEnabled();
        await landingPage.abTestingLink.click();
        await expect(page).toHaveURL('https://the-internet.herokuapp.com/abtest');
        await page.goBack();
        await expect(landingPage.addRemoveElementsLink).toBeEnabled();
        await landingPage.addRemoveElementsLink.click();
        await expect(page).toHaveURL('https://the-internet.herokuapp.com/add_remove_elements/');
        await page.goBack();    
        await expect(landingPage.challengingDomLink).toBeEnabled();
        await landingPage.challengingDomLink.click();
        await expect(page).toHaveURL('https://the-internet.herokuapp.com/challenging_dom');
        await page.goBack();
        await expect(landingPage.checkboxesLink).toBeEnabled();
        await landingPage.checkboxesLink.click();
        await expect(page).toHaveURL('https://the-internet.herokuapp.com/checkboxes');
        await page.goBack();
        await expect(landingPage.contextMenuLink).toBeEnabled();
        await landingPage.contextMenuLink.click();
        await expect(page).toHaveURL('https://the-internet.herokuapp.com/context_menu');
        await page.goBack();
        await expect(landingPage.digestAuthenticationLink).toBeEnabled();
        await expect(landingPage.disappearingElementsLink).toBeEnabled();
        await landingPage.disappearingElementsLink.click();
        await expect(page).toHaveURL('https://the-internet.herokuapp.com/disappearing_elements');
        await page.goBack();
        await expect(landingPage.dragAndDropLink).toBeEnabled();
        await landingPage.dragAndDropLink.click();
        await expect(page).toHaveURL('https://the-internet.herokuapp.com/drag_and_drop');
        await page.goBack();
        await expect(landingPage.dropdownLink).toBeEnabled();
        await landingPage.dropdownLink.click();
        await expect(page).toHaveURL('https://the-internet.herokuapp.com/dropdown');
        await page.goBack();
        await expect(landingPage.dynamicContentLink).toBeEnabled();
        await landingPage.dynamicContentLink.click();
        await expect(page).toHaveURL('https://the-internet.herokuapp.com/dynamic_content');
        await page.goBack();
        await expect(landingPage.dynamicControlsLink).toBeEnabled();
        await landingPage.dynamicControlsLink.click();
        await expect(page).toHaveURL('https://the-internet.herokuapp.com/dynamic_controls');
        await page.goBack();
        await expect(landingPage.dynamicLoadingLink).toBeEnabled();
        await landingPage.dynamicLoadingLink.click();
        await expect(page).toHaveURL('https://the-internet.herokuapp.com/dynamic_loading');
        await page.goBack();
        await expect(landingPage.entryAdLink).toBeEnabled();
        await landingPage.entryAdLink.click();
        await expect(page).toHaveURL('https://the-internet.herokuapp.com/entry_ad');
        await page.goBack();

        await expect(landingPage.brokenImagesLink).toBeEnabled();
        await landingPage.brokenImagesLink.click();
        await expect(page).toHaveURL('https://the-internet.herokuapp.com/broken_images');
        await page.goBack();

        await expect(landingPage.challengingDomLink).toBeEnabled();
        await landingPage.challengingDomLink.click();
        await expect(page).toHaveURL('https://the-internet.herokuapp.com/challenging_dom');
        await page.goBack();
        await expect(landingPage.checkboxesLink).toBeEnabled();
        await landingPage.checkboxesLink.click();
        await expect(page).toHaveURL('https://the-internet.herokuapp.com/checkboxes');
        await page.goBack();
        await expect(landingPage.contextMenuLink).toBeEnabled();
        await landingPage.contextMenuLink.click();
        await expect(page).toHaveURL('https://the-internet.herokuapp.com/context_menu');
        await page.goBack();
        await expect(landingPage.digestAuthenticationLink).toBeEnabled();
        await expect(landingPage.disappearingElementsLink).toBeEnabled();
        await landingPage.disappearingElementsLink.click();
        await expect(page).toHaveURL('https://the-internet.herokuapp.com/disappearing_elements');
        await page.goBack();
        await expect(landingPage.dragAndDropLink).toBeEnabled();
        await landingPage.dragAndDropLink.click();
        await expect(page).toHaveURL('https://the-internet.herokuapp.com/drag_and_drop');
        await page.goBack();
        await expect(landingPage.dropdownLink).toBeEnabled();
        await landingPage.dropdownLink.click();
        await expect(page).toHaveURL('https://the-internet.herokuapp.com/dropdown');
        await page.goBack();
        await expect(landingPage.dynamicContentLink).toBeEnabled();
        await landingPage.dynamicContentLink.click();
        await expect(page).toHaveURL('https://the-internet.herokuapp.com/dynamic_content');
        await page.goBack();
        await expect(landingPage.dynamicControlsLink).toBeEnabled();
        await landingPage.dynamicControlsLink.click();
        await expect(page).toHaveURL('https://the-internet.herokuapp.com/dynamic_controls');
        await page.goBack();
        await expect(landingPage.dynamicLoadingLink).toBeEnabled();
        await landingPage.dynamicLoadingLink.click();
        await expect(page).toHaveURL('https://the-internet.herokuapp.com/dynamic_loading');
        await page.goBack();
        await expect(landingPage.entryAdLink).toBeEnabled();
        await landingPage.entryAdLink.click();
        await expect(page).toHaveURL('https://the-internet.herokuapp.com/entry_ad');
        await page.goBack();
        // Add assertions for other links as needed
    });
    
    test('check auth links', async ({ page }) => {
        await landingPage.clickBasicAuthLink();
        await expect(page).toHaveURL('https://the-internet.herokuapp.com/basic_auth');
        await expect(page.locator('p')).toHaveText('Congratulations! You must have the proper credentials.');
        await page.goBack();
    
    })
    test('check broken images', async ({ page }) => {
        await landingPage.clickBrokenImagesLink();
        await expect(page).toHaveURL('https://the-internet.herokuapp.com/broken_images');
        await page.waitForLoadState('networkidle');

        const images : Locator[] = await page.locator('div > div >img').all();
        const srcvalues = await Promise.all(images.map(img => img.getAttribute('src')));
        const invalid=[];
        for (const src of srcvalues) {
            const baseUrl= await page.evaluate(() => window.location.origin);
            const resp=await page.request.get(baseUrl +'/'+ src);
            if (resp.status() !== 200) {
                invalid.push(src);
            }
            }
            expect(invalid.length).toBe(2);

        }
    );
})
