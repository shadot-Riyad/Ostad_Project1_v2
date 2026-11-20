
//importing  
import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/RegisterPage.js';
import { LoginPage } from '../pages/LoginPage.js';
import { CategoryPage } from '../pages/CategoryPage.js';
import { ProductPage } from '../pages/ProductPage.js';
import { CartPage } from '../pages/CartPage.js';
import { generateUser, products } from '../utils/testData.js';

test.describe('Q2 - Register + Add Product to Cart', () => {
  test('register, login, add product and verify cart', async ({ page }) => {
    const user = generateUser();
    const quantity = 2;

    // Protita page er object 
    const registerPage = new RegisterPage(page);
    const loginPage = new LoginPage(page);
    const categoryPage = new CategoryPage(page);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);

    await test.step('Register a new customer', async () => {
      await registerPage.goto();
      await registerPage.register(user);
      await expect(registerPage.resultMessage).toContainText('Your registration completed');
      await registerPage.attachScreenshot('Q2 - registration completed');
      await registerPage.clickContinue();
    });

    // Register then logingin
    await test.step('Logout and login with the new customer', async () => {
      await registerPage.logout();
      await loginPage.clickLoginLink();
      await loginPage.login(user.email, user.password);
      await expect(loginPage.accountLink).toHaveText(user.email);
      await loginPage.attachScreenshot('Q2 - logged in');
    });

    await test.step('Open category and select product', async () => {
      await categoryPage.openCategory(products.category);
      await expect(categoryPage.pageTitle).toContainText(products.category);
      await categoryPage.openProduct(products.name);
      await expect(productPage.productName).toHaveText(products.name);
    });

    await test.step('Set quantity and add to cart', async () => {
      await productPage.setQuantity(quantity);
      await productPage.addToCart();
      await productPage.attachScreenshot('Q2 - product added notification');
    });

    await test.step('Verify product and quantity in cart', async () => {
      await productPage.openCart();
      await expect(cartPage.cartRows).toHaveCount(1);
      expect(await cartPage.getProductNames()).toEqual([products.name]);
      expect(await cartPage.getQuantityOfFirstItem()).toBe(quantity);
      await cartPage.attachScreenshot('Q2 - cart verified');
    });
  });
});