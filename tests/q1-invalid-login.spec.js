import {test, expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage.js';
import {invalidCredentials} from '../utils/testData.js';

test.describe('Q1 - Invalid Login', () => {
  test('error message is shown and user is not logged in', async ({page }) => {
    const loginPage = new LoginPage(page);

    await test.step(' Open login page', async () => {
      await loginPage.goto();
      await expect(loginPage.loginButton).toBeVisible();
    });

    await test.step('Login with invalid email/password', async () => {
      await loginPage.login(invalidCredentials.email, invalidCredentials.password);
    });
// verify 
    await test.step('Verify error message', async () => {
      await expect(loginPage.errorSummary).toBeVisible();
      const errorText = await loginPage.getErrorText();
      expect(errorText).toContain('Login was unsuccessful. Please correct the errors and try again.');
      expect(errorText).toContain('No customer account found');
      await loginPage.attachScreenshot('Q1 - invalid login error');
    });

    await test.step('Verify user is NOT logged in', async () => {
      await expect(loginPage.logoutLink).toHaveCount(0); // Log out link nai
      await expect(loginPage.loginLink).toBeVisible(); // Log in link ache
    });
  });
});