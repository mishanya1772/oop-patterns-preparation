const Browser = require('../singleton');

class PlaywrightTest {
  constructor() {
    this.alertDialog = null;
    this.page = null;
  }

  async goUrl(url = `https://www.globalsqa.com/angularJs-protractor/BankingProject`) {
    this.page = await new Browser().tab;
    this.page.on('dialog', async (dialog) => {
      this.alertDialog = await dialog.message();
      await dialog.accept();
    });

    await this.page.goto(url);
    expect(await this.page.title()).toBe('XYZ Bank');
  }

  async clickOn(locator) {
    return this.page.click(locator);
  }

  async fillNewCustomerData(firstName = 'Test 1', lastName = 'Test 2', postCode = 'Test 3') {
    await this.page.fill('[placeholder="First Name"]', 'Test 1');
    await this.page.fill('[placeholder="Last Name"]', 'Test 1');
    await this.page.fill('[placeholder="Post Code"]', 'Test 1');
  }

  async getAlertText() {
    return this.alertDialog;
  }
}

module.exports = PlaywrightTest;
