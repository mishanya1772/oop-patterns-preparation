const { chromium } = require('playwright');
const expect = require('chai').expect;

describe('Add', () => {
  it('new customer', async () => {
    let alertDialog;
    const browser = await chromium.launch({
      args: ['--start-maximized'],
      headless: false
    });
    let page = await browser.newPage();

    page.on('dialog', async (dialog) => {
      alertDialog = await dialog.message();
      await dialog.accept();
    });


    await page.goto(`https://www.globalsqa.com/angularJs-protractor/BankingProject`);

    await page.click('button[ng-click="manager()"]');
    await page.click('button[ng-click="addCust()"]');

    await page.fill('[placeholder="First Name"]', 'Test 1');
    await page.fill('[placeholder="Last Name"]', 'Test 2');
    await page.fill('[placeholder="Post Code"]', 'Test 3');

    await page.click('button[type="submit"]');

    expect(alertDialog).contain('Customer added successfully with customer');
    await browser.close();
  });
});
