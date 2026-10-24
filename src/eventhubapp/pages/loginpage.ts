import { Page , Locator} from "@playwright/test";
export class LoginPage {
    private page: Page;
    private emailInput: Locator;
    private passwordInput: Locator;
    private loginButton: Locator;
    private registerButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailInput = this.page.locator('#email');
        this.passwordInput = this.page.locator('#password');
        this.loginButton = this.page.locator('#login-btn');
        this.registerButton = this.page.getByText('Register');
    }
     
    public async login(email: string, password: string): Promise<void> {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    public async clickRegister(): Promise<void> {
        await this.registerButton.click();
    }
}