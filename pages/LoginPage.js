import { BasePage } from './BasePage.js';

// LoginPage, BasePage  child class
export class LoginPage extends BasePage {
  constructor(page) {
    super(page); // parent er constructor chalay, tai this.page pawa jay

    // Login form er locator
    this.emailInput = page.locator('#Email');
    this.passwordInput = page.locator('#Password');
    this.loginButton = page.locator('input.login-button');
    this.errorSummary = page.locator('.validation-summary-errors');
  }

  // Login page open
  async goto() {
    await this.open('/login');
  }

  // Email, password  login
  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  // Error box  text
  async getErrorText() {
    return (await this.errorSummary.innerText()).trim();
  }
}