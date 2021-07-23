const Browser = require('../singleton');
const Data = require('../builder');

class PlaywrightTest {
  constructor() {
    this.alertDialog = null;
    this.page = null;
    this.user = new Data();
  }

  async goUrl(url) {
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

  async fillNewCustomerData() {
    const userData = await this.user.random().get();

    await this.page.fill('[placeholder="First Name"]', await userData.first_name);
    await this.page.fill('[placeholder="Last Name"]', await userData.last_name);
    await this.page.fill('[placeholder="Post Code"]', await userData.address.zip_code);
  }

  async getAlertText() {
    return this.alertDialog;
  }
}

module.exports = PlaywrightTest;
