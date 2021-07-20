const { chromium } = require('playwright');
let browser;
let page;

class PlaywrightTest {
  constructor() {
    this.alertDialog = null;
  }

  async goUrl(url = `https://www.globalsqa.com/angularJs-protractor/BankingProject`) {
    browser = await chromium.launch({
      args: ['--start-maximized'],
      headless: false
    });
    page = await browser.newPage();

    await page.goto(url);
    expect(await page.title()).toBe('XYZ Bank');

    page.on('dialog', async (dialog) => {
      this.alertDialog = await dialog.message();
      await dialog.accept();
    });
  }

  async clickOn(locator) {
    return page.click(locator);
  }

  async fillNewCustomerData(firstName = 'Test 1', lastName = 'Test 2', postCode = 'Test 3') {
    await page.fill('[placeholder="First Name"]', 'Test 1');
    await page.fill('[placeholder="Last Name"]', 'Test 1');
    await page.fill('[placeholder="Post Code"]', 'Test 1');
  }

  async getAlertText() {
    await browser.close();
    return this.alertDialog;
  }
}

module.exports = PlaywrightTest;
