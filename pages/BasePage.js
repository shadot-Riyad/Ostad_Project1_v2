import { test} from '@playwright/test';

// BasePage = parent class.

export class BasePage {
  constructor(page ) {
    this.page = page; // browser  page  save 

    // Header er locator 
    this.loginLink = page.locator('a.ico-login');
    this.logoutLink = page.locator('a.ico-logout');
    // Q2 (NOTUN)
    this.registerLink = page.locator('a.ico-register');
    this.accountLink = page.locator('.header-links a.account');
    this.cartLink = page.getByRole('link', { name: /Shopping cart/ }).first();

    // [Q3 te add ]:
  }

  // Kono path e jawa 
  async open(path = '/') {
    await this.page.goto(path);
  }

  // Q2 (NOTUN)
  async clickLoginLink() {
    await this.loginLink.click();
  }

  async clickRegisterLink() {
    await this.registerLink.click();
  }

  async logout() {
    await this.logoutLink.click();
  }

  async openCart() {
    await this.cartLink.click();
  }

  // Top menu theke category te jawa 
  async openCategory(name) {
    await this.page.locator('.top-menu a:visible', { hasText: name }).first().click();
  }

  // [Q3 te add hobe]:

  //  Allure + HTML report e attach kore
  async attachScreenshot(name) {
    const body = await this.page.screenshot({ fullPage: true });
    await test.info().attach(name, { body, contentType: 'image/png' });
  }
}
