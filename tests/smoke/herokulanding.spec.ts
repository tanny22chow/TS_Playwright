import { test, expect, Page, Locator } from '@playwright/test';
import { LandingPage } from '../PageObjects/LandingPage';
import { AlertPage } from '../PageObjects/AlertPage';


test.describe('Heroku Landing Page', () => {
    let landingPage: LandingPage;
    let alertPage: AlertPage;
    let page: Page;
    test.beforeEach(async ({ page }) => {
        landingPage = new LandingPage(page);
        alertPage = new AlertPage(page);
        await page.goto('/');
    });
    test.use({
            httpCredentials: {
                username: 'admin',
                password: 'admin'
            },
            permissions: ['geolocation'],
             geolocation: { longitude: 12.492507, latitude: 41.889938 },
        })

    test('should have the correct title', async ({ page }) => {
        await expect(page).toHaveTitle('The Internet');
    });
    test.skip('should have all the expected links', async ({page}) => {
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

        })
    test('Alert handling', async ({ page}) => {
        page.on('dialog', async dialog => {
            if(dialog.message().match('I am a JS Alert')) {
                await dialog.accept();
            } else if (dialog.message().match('I am a JS Confirm')) {
                await dialog.dismiss();
            } else if (dialog.message().match('I am a JS Prompt')) {
                    await dialog.accept();
            }
        });
        await landingPage.clickJavascriptAlertsLink();
        await page.waitForLoadState('networkidle');
        const alertbtn=await alertPage.getJSAlertButton();
        await alertbtn.click();
        const resultText=await alertPage.getResultText();
        await expect(resultText).toHaveText('You successfully clicked an alert');
        const confirmbtn=await alertPage.getJSConfirmButton();
        await confirmbtn.click();
        await expect(resultText).toHaveText('You clicked: Cancel');
        const promptbtn=await alertPage.getJSPromptButton();
        await promptbtn.click();
        await expect(resultText).toHaveText('You entered: Playwright');
    })
    test('key press check',async ({ page }) => {
        await landingPage.clickKeyPressesLink();        
        await page.waitForLoadState('networkidle');
        await page.locator('#target').click();
        await page.keyboard.press('Backspace');
        const resultText=await page.locator('#result');
        await expect(resultText).toHaveText('You entered: BACK_SPACE');
    }) 
    test('New window check', async ({ page }) => {
        await landingPage.clickMultipleWindowsLink();
        await page.waitForLoadState('networkidle');
        const newpagePromise=page.waitForEvent('popup');
        await page.locator('a:has-text("Click Here")').click();
        const newpage=await newpagePromise;
        await newpage.waitForLoadState('networkidle');
        await newpage.bringToFront();
        await expect(newpage).toHaveURL('https://the-internet.herokuapp.com/windows/new');
        await expect(newpage.locator('h3')).toHaveText('New Window');
        
    })
    test('iFrame check', async ({ page }) => {
        await landingPage.clickNestedFramesLink();
        await page.waitForLoadState('networkidle');
        const topframe= page.frameLocator('frame[name="frame-top"]');
        const middleframe=topframe.frameLocator('frame[name="frame-middle"]');
        const middleText=await middleframe.locator('#content').textContent();
        expect(middleText).toContain('MIDDLE');
        const leftframe=topframe.frameLocator('frame[name="frame-left"]');
        const leftText=await leftframe.locator('body').textContent();
        expect(leftText).toContain('LEFT');
        const rightframe=topframe.frameLocator('frame[name="frame-right"]');
        const rightText=await rightframe.locator('body').textContent();
        expect(rightText).toContain('RIGHT');
        const bottomframe= page.frameLocator('frame[name="frame-bottom"]');
        const bottomText=await bottomframe.locator('body').textContent();
        expect(bottomText).toContain('BOTTOM');

    })
    test('geolocation check', async ({ page }) => {
        await landingPage.clickGeolocationLink();
        await page.waitForLoadState('networkidle');
        await page.locator('button:has-text("Where am I?")').click();
        const resultText=await page.locator('#demo');
        await expect(resultText).toContainText('Latitude');
        await expect(resultText).toContainText('Longitude');
    })
    test('slider test', async ({ page }) => {
        await landingPage.clickHorizontalSliderLink();
        await page.waitForLoadState('networkidle');
        await page.evaluate(() => {
            const slider = document.querySelector('input[type="range"]') as HTMLInputElement;
            slider.value = '4';
            slider.dispatchEvent(new Event('change'));
        })
        expect(await page.locator('#range').textContent()).toBe('4');
    })
    test('Mouse hover check', async ({ page }) => {
        await landingPage.clickHoversLink();
        await page.waitForLoadState('networkidle');     
        const figure1=page.locator('.figure').nth(0);
        await figure1.hover();
        await expect(figure1.locator('h5')).toHaveText('name: user1');
        const figure2=page.locator('.figure').nth(1);
        await figure2.hover();
        await expect(figure2.locator('h5')).toHaveText('name: user2');
        const figure3=page.locator('.figure').nth(2);
        await figure3.hover();
        await expect(figure3.locator('h5')).toHaveText('name: user3');
    })
    test('infinite scroll check', async ({ page }) => {
        await landingPage.clickInfiniteScrollLink();
        await page.waitForLoadState('networkidle');     
        const initialParagraphs=await page.locator('.jscroll-added').count();
        await page.evaluate(() => {
            window.scrollBy(0, document.body.scrollHeight);
        });
        await page.waitForLoadState('networkidle');
        const newParagraphs=await page.locator('.jscroll-added').count();
        expect(newParagraphs).toBeGreaterThan(initialParagraphs);
        })
    
    test('jquery menu check', async ({ page }) => {
        await landingPage.clickJqueryUiMenusLink();
        await page.waitForLoadState('networkidle');
        await page.getByText('Enabled').click();
        await page.getByText('Downloads').click();
        await page.getByText('PDF').click();
        await page.getByText('Enabled').click();
        await page.getByText('Back to JQuery UI').click();
        await expect(page).toHaveURL('https://the-internet.herokuapp.com/jqueryui');

    })
    test('File upload check', async ({ page }) => {
        await landingPage.clickFileUploadLink();
        await page.waitForLoadState('networkidle');
        const filePath = './tests/testdata/file.txt';
        await page.locator('#file-upload').setInputFiles([filePath]);
        await page.locator('#file-submit').click();
        const uploadedFileName = await page.locator('#uploaded-files').textContent();
        expect(uploadedFileName).toContain('file.txt');
    })
    test('File download check', async ({ page, context }) => {
        await landingPage.clickFileDownloadLink();
        await page.waitForLoadState('networkidle');
        const [download] = await Promise.all([
            page.waitForEvent('download'),
            page.locator('a:has-text("testfile.txt")').click()
        ]);
        const path = await download.path();
        expect(path).not.toBeNull();
    })

    test('drag and drop check', async ({ page }) => {
        await landingPage.clickDragAndDropLink();
        await page.waitForLoadState('networkidle');
        const source = page.locator('#column-a');
        const target = page.locator('#column-b');
        const sourceTextBefore = await source.textContent();
        const targetTextBefore = await target.textContent();
        await source.dragTo(target);
        const sourceTextAfter = await source.textContent();
        const targetTextAfter = await target.textContent();
        expect(sourceTextAfter).toContain(targetTextBefore);
        expect(targetTextAfter).toContain(sourceTextBefore);
    })

    test('Manual drag and drop check', async ({ page }) => {
        await landingPage.clickDragAndDropLink();
        await page.waitForLoadState('networkidle');
        const source = page.locator('#column-a');
        await source.hover();
        await page.mouse.down();
        const target = page.locator('#column-b');
        await target.hover();
        await page.mouse.up();
        expect(source.textContent()).toContain('B');
        expect(target.textContent()).toContain('A');
       
    })
    test('Scrolling check', async ({ page }) => {
        await page.getByText('Elemental Selenium').scrollIntoViewIfNeeded();
        await expect(page.getByText('Elemental Selenium')).toBeInViewport();
        const newpagePromise=page.waitForEvent('popup');
        await page.getByText('Elemental Selenium').click();
        const elementalPage=await newpagePromise;
        await elementalPage.waitForLoadState('networkidle');
        await expect(elementalPage).toHaveURL('http://elementalselenium.com/');
    })
    test('Secure file download check', async ({ page, context }) => {
        await landingPage.clickSecureFileDownloadLink();
        await page.waitForLoadState('networkidle');
        test.use({
            httpCredentials: {
                username: 'admin',
                password: 'admin'
            }
        })
        let  downloadpath='';
        page.on('download', async (download) => {
            downloadpath = await download.path();
        })
        await page.locator('a:has-text("testfile.txt")').click();
        expect(downloadpath).not.toBeNull();
    })
    test('shadow dom check', async ({ page }) => {
        await landingPage.clickShadowDomLink();
        await page.waitForLoadState('networkidle');
        expect(await page.getByRole('listitem').filter({ hasText: 'In a list' })).toBeVisible();
    })

})
