const Data = require('../builder');

class WDIOBrowser {
  constructor() {
    this.user = new Data();
  }

  async goUrl(url) {
    await browser.url(url);
    expect(await browser.getTitle()).toBe('XYZ Bank');
  }

  async clickOn(locator) {
    await (await $(locator)).isDisplayed();
    await (await $(locator)).click();
  }

  async fillNewCustomerData(firstName = 'Test 1', lastName = 'Test 2', postCode = 'Test 3') {
    const userData = await this.user.byCountry().byCity().get();

    await (await $('[placeholder="First Name"]')).setValue(await userData.first_name);
    await (await $('[placeholder="Last Name"]')).setValue(await userData.last_name);
    await (await $('[placeholder="Post Code"]')).setValue(await userData.address.zip_code);
  }

  async getAlertText() {
    return browser.getAlertText();
  }
}

module.exports = WDIOBrowser;
