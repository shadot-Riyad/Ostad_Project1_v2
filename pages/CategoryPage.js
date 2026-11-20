import { BasePage } from './BasePage.js';

// CategoryPage: category er product list
export class CategoryPage extends BasePage {
  constructor( page) {
    super(page);
    this.pageTitle = page.locator('.page-title h1');
    this.productTitles = page.locator('.product-item .product-title a');
  }

  // search producsts
  async openProduct(productName) {
    await this.productTitles.filter({ hasText: productName }).first().click();
  }
}