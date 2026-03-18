import { Locator, Page } from "@playwright/test";

export class LandingPage {
    private page: Page;
    public abTestingLink:Locator;
    public addRemoveElementsLink:Locator;
    public basicAuthLink:Locator    ;
    public brokenImagesLink:Locator;
    public challengingDomLink:Locator;
    public checkboxesLink:Locator;
    public contextMenuLink:Locator
    public digestAuthenticationLink:Locator;
    public disappearingElementsLink:Locator;
    public dragAndDropLink:Locator;
    public dropdownLink:Locator;
    public dynamicContentLink:Locator;
    public dynamicControlsLink:Locator;
    public dynamicLoadingLink:Locator;
    public entryAdLink:Locator;
    public exitIntentLink:Locator;
    public fileDownloadLink:Locator;
    public fileUploadLink:Locator;
    public floatingMenuLink:Locator;
    public forgotPasswordLink:Locator;
    public formAuthenticationLink:Locator;
    public framesLink:Locator;
    public geolocationLink:Locator;
    public horizontalSliderLink:Locator;
    public hoversLink:Locator;
    public infiniteScrollLink:Locator;
    public inputsLink:Locator
    public jqueryUiMenusLink:Locator;
    public javascriptAlertsLink:Locator;
    public javascriptOnloadErrorLink:Locator;
    public keyPressesLink:Locator;
    public largeDeepDomLink:Locator;
    public multipleWindowsLink:Locator;
    public nestedFramesLink:Locator;
    public notificationMessagesLink:Locator;
    public redirectLink:Locator;
    public secureFileDownloadLink:Locator;
    public shadowDomLink:Locator;   
    public shiftingContentLink:Locator;
    public slowResourcesLink:Locator;
    public sortableDataTablesLink:Locator;
    public statusCodesLink:Locator;
    public typosLink:Locator;
    public wysiwygEditorLink:Locator;
    public elementalSeleniumLink:Locator;
    public forkMeOnGitHubLink:Locator;

    constructor(page: Page) {
        this.page = page;
    // Locators for text links
    this. abTestingLink  = this.page.locator('text=A/B Testing');
    this. addRemoveElementsLink = this.page.locator('text=Add/Remove Elements');
    this. basicAuthLink = this.page.locator('text=Basic Auth');
    this. brokenImagesLink = this.page.locator('text=Broken Images');
    this. challengingDomLink = this.page.locator('text=Challenging DOM');
    this. checkboxesLink = this.page.locator('text=Checkboxes');
    this. contextMenuLink = this.page.locator('text=Context Menu');
    this. digestAuthenticationLink = this.page.locator('text=Digest Authentication');
    this. disappearingElementsLink = this.page.locator('text=Disappearing Elements');
    this. dragAndDropLink = this.page.locator('text=Drag and Drop');
    this. dropdownLink = this.page.locator('text=Dropdown');
    this. dynamicContentLink = this.page.locator('text=Dynamic Content');
    this. dynamicControlsLink = this.page.locator('text=Dynamic Controls');
    this. dynamicLoadingLink = this.page.locator('text=Dynamic Loading');
    this. entryAdLink = this.page.locator('text=Entry Ad');
    this. exitIntentLink = this.page.locator('text=Exit Intent');
    this. fileDownloadLink = this.page.locator('text=File Download');
    this. fileUploadLink = this.page.locator('text=File Upload');
    this. floatingMenuLink = this.page.locator('text=Floating Menu');
    this. forgotPasswordLink = this.page.locator('text=Forgot Password');
    this. formAuthenticationLink = this.page.locator('text=Form Authentication');
    this. framesLink = this.page.locator('text=Frames');
    this. geolocationLink = this.page.locator('text=Geolocation');
    this. horizontalSliderLink = this.page.locator('text=Horizontal Slider');
    this. hoversLink = this.page.locator('text=Hovers');
    this. infiniteScrollLink = this.page.locator('text=Infinite Scroll');
    this. inputsLink = this.page.locator('text=Inputs');
    this. jqueryUiMenusLink = this.page.locator('text=JQuery UI Menus');
    this. javascriptAlertsLink = this.page.locator('text=JavaScript Alerts');
    this. javascriptOnloadErrorLink = this.page.locator('text=JavaScript onload event error');
    this. keyPressesLink = this.page.locator('text=Key Presses');
    this. largeDeepDomLink = this.page.locator('text=Large & Deep DOM');
    this. multipleWindowsLink = this.page.locator('text=Multiple Windows');
    this. nestedFramesLink = this.page.locator('text=Nested Frames');
    this. notificationMessagesLink = this.page.locator('text=Notification Messages');
    this. redirectLink = this.page.locator('text=Redirect Link');
    this. secureFileDownloadLink = this.page.locator('text=Secure File Download');
    this. shadowDomLink = this.page.locator('text=Shadow DOM');
    this. shiftingContentLink = this.page.locator('text=Shifting Content');
    this. slowResourcesLink = this.page.locator('text=Slow Resources');
    this. sortableDataTablesLink = this.page.locator('text=Sortable Data Tables');
    this. statusCodesLink = this.page.locator('text=Status Codes');
    this. typosLink = this.page.locator('text=Typos');
    this. wysiwygEditorLink = this.page.locator('text=WYSIWYG Editor');
    this. elementalSeleniumLink = this.page.locator('text=Elemental Selenium');
    this. forkMeOnGitHubLink = this.page.locator('text=Fork me on GitHub');

    }

    // Click methods for each locator
    async clickAbTestingLink() {
        await this.abTestingLink.click();
    }

    async clickAddRemoveElementsLink() {
        await this.addRemoveElementsLink.click();
    }

    async clickBasicAuthLink() {
        await this.basicAuthLink.click();
    }

    async clickBrokenImagesLink() {
        await this.brokenImagesLink.click();
    }

    async clickChallengingDomLink() {
        await this.challengingDomLink.click();
    }

    async clickCheckboxesLink() {
        await this.checkboxesLink.click();
    }

    async clickContextMenuLink() {
        await this.contextMenuLink.click();
    }

    async clickDigestAuthenticationLink() {
        await this.digestAuthenticationLink.click();
    }

    async clickDisappearingElementsLink() {
        await this.disappearingElementsLink.click();
    }

    async clickDragAndDropLink() {
        await this.dragAndDropLink.click();
    }

    async clickDropdownLink() {
        await this.dropdownLink.click();
    }

    async clickDynamicContentLink() {
        await this.dynamicContentLink.click();
    }

    async clickDynamicControlsLink() {
        await this.dynamicControlsLink.click();
    }

    async clickDynamicLoadingLink() {
        await this.dynamicLoadingLink.click();
    }

    async clickEntryAdLink() {
        await this.entryAdLink.click();
    }

    async clickExitIntentLink() {
        await this.exitIntentLink.click();
    }

    async clickFileDownloadLink() {
        await this.fileDownloadLink.click();
    }

    async clickFileUploadLink() {
        await this.fileUploadLink.click();
    }

    async clickFloatingMenuLink() {
        await this.floatingMenuLink.click();
    }

    async clickForgotPasswordLink() {
        await this.forgotPasswordLink.click();
    }

    async clickFormAuthenticationLink() {
        await this.formAuthenticationLink.click();
    }

    async clickFramesLink() {
        await this.framesLink.click();
    }

    async clickGeolocationLink() {
        await this.geolocationLink.click();
    }

    async clickHorizontalSliderLink() {
        await this.horizontalSliderLink.click();
    }

    async clickHoversLink() {
        await this.hoversLink.click();
    }

    async clickInfiniteScrollLink() {
        await this.infiniteScrollLink.click();
    }

    async clickInputsLink() {
        await this.inputsLink.click();
    }

    async clickJqueryUiMenusLink() {
        await this.jqueryUiMenusLink.click();
    }

    async clickJavascriptAlertsLink() {
        await this.javascriptAlertsLink.click();
    }

    async clickJavascriptOnloadErrorLink() {
        await this.javascriptOnloadErrorLink.click();
    }

    async clickKeyPressesLink() {
        await this.keyPressesLink.click();
    }

    async clickLargeDeepDomLink() {
        await this.largeDeepDomLink.click();
    }

    async clickMultipleWindowsLink() {
        await this.multipleWindowsLink.click();
    }

    async clickNestedFramesLink() {
        await this.nestedFramesLink.click();
    }

    async clickNotificationMessagesLink() {
        await this.notificationMessagesLink.click();
    }

    async clickRedirectLink() {
        await this.redirectLink.click();
    }

    async clickSecureFileDownloadLink() {
        await this.secureFileDownloadLink.click();
    }

    async clickShadowDomLink() {
        await this.shadowDomLink.click();
    }

    async clickShiftingContentLink() {
        await this.shiftingContentLink.click();
    }

    async clickSlowResourcesLink() {
        await this.slowResourcesLink.click();
    }

    async clickSortableDataTablesLink() {
        await this.sortableDataTablesLink.click();
    }

    async clickStatusCodesLink() {
        await this.statusCodesLink.click();
    }

    async clickTyposLink() {
        await this.typosLink.click();
    }

    async clickWysiwygEditorLink() {
        await this.wysiwygEditorLink.click();
    }

    async clickElementalSeleniumLink() {
        await this.elementalSeleniumLink.click();
    }

    async clickForkMeOnGitHubLink() {
        await this.forkMeOnGitHubLink.click();
    }

}


