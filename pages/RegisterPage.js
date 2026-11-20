import { BasePage } from './BasePage.js';

// RegisterPage, BasePage  child class
export class RegisterPage extends BasePage {
  constructor(page) {
    super(page);

    // Register form er locator 
    this.genderMale = page.locator('#gender-male');
    this.firstName = page.locator('#FirstName');
    this.lastName = page.locator('#LastName');
    this.email = page.locator('#Email');
    this.password = page.locator('#Password');
    this.confirmPassword = page.locator('#ConfirmPassword');
    this.registerButton = page.locator('#register-button');
    this.resultMessage = page.locator('.result');
    this.continueButton = page.locator('input.register-continue-button');
  }

  async goto() {
    await this.open('/register');
  }

  // user object nie pura form fill 
  async register(user) {
    await this.genderMale.check();
    await this.firstName.fill(user.firstName);
    await this.lastName.fill(user.lastName);
    await this.email.fill(user.email);
    await this.password.fill(user.password);
    await this.confirmPassword.fill(user.password);
    await this.registerButton.click();
  }

  async clickContinue() {
    await this.continueButton.click();
  }
}