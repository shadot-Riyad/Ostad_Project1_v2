import { BasePage } from './BasePage.js';

// ProductPage: product details, quantity, add to cart
export class ProductPage extends BasePage {
  constructor(page) {
      super(page);
    this.productName = page.locator('.product-name h1');
    this.quantityInput = page.locator('.product-essential input.qty-input');
     this.addToCartButton = page.locator('.product-essential input.add-to-cart-button');
      this.successNotification = page.locator('#bar-notification .content');
  }

  // fill() 
  async setQuantity( qty) {
    await this.quantityInput.fill(String(qty));
  }

  // Add to cart click 
  async addToCart() {
    await this.addToCartButton.click();
    await this.successNotification.waitFor();
  }

  async getProductName() {
    return (await this.productName.innerText()).trim();
  }
}