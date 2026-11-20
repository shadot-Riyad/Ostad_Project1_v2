import { test } from '@playwright/test';

// BasePage =  parent class.

export class BasePage {
  constructor(page) {
    this.page = page; // browser er page ekhane save 

    // Header er locator (shob page e ekoi)
    this.loginLink = page.locator('a.ico-login');
    this.logoutLink = page.locator('a.ico-logout');

    // [Q2 te add hobe]:
    // [Q3 te add hobe]: 
  }

  //  path e jawa 
  async open(path = '/') {
    await this.page.goto(path);
  }

  // [Q2 te add hobe]: 
  // [Q3 te add hobe]: 

  // Full page screenshot nie Allure + HTML report e attach kore
  async attachScreenshot(name) {
    const body = await this.page.screenshot({ fullPage: true });
    await test.info().attach(name, { body, contentType: 'image/png' });
  }
}
