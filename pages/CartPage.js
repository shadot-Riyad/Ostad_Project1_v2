import { BasePage} from './BasePage.js';

// CartPage: cart  product/quantity check
export class CartPage extends BasePage {
  constructor(page ) {
     super(page);
    this.cartRows = page.locator('table.cart tbody tr.cart-item-row');
    this.productNames = page.locator('table.cart td.product a.product-name');
     this.quantityInputs = page.locator('table.cart input.qty-input');

    // [Q3 te add hobe]: 
  }

  // Cart er shob product 
  async getProductNames() {
    return (await this.productNames.allInnerTexts()).map((t) => t.trim());
  }

  // item quantity 
  async getQuantityOfFirstItem() {
    return Number(await this.quantityInputs.first().inputValue());
  }

  // [Q3 te add hobe]: 
}
