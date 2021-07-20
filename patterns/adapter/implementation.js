const playwrightBrowser = new (require('./playwright test'))();
const wdioBrowser = new (require('./wdio test'))();

module.exports = new class{
  constructor(browserInstance) {
    this.browserInstance = browserInstance;
  }

  async open(url) {
    return this.browserInstance.goUrl(url);
  }

  async clickOn(locator) {
    return this.browserInstance.clickOn(locator);
  }

  async getAlertText() {
    return this.browserInstance.getAlertText();
  }

  async fillNewCustomerData() {
    return this.browserInstance.fillNewCustomerData();
  }
}(playwrightBrowser);
