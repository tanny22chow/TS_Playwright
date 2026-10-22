import { Page } from "@playwright/test";

export class AlertPage {
    private  page:Page;
    constructor(page : Page) {
        this.page = page;
    }
    async getJSAlertButton() {
        return await this.page.locator('button:has-text("Click for JS Alert")');
    }
    async getJSConfirmButton() {
        return await this.page.locator('button:has-text("Click for JS Confirm")');      
    }
    async getJSPromptButton() {
        return await this.page.locator('button:has-text("Click for JS Prompt")');      
    }
    async getResultText() {
        return await this.page.locator('#result');  
    }
}