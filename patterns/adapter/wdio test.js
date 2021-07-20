class WDIOBrowser {
  async goUrl(url = `https://www.globalsqa.com/angularJs-protractor/BankingProject`) {
    await browser.url(url);
    expect(await browser.getTitle()).toBe('XYZ Bank');
  }

  async clickOn(locator) {
    await (await $(locator)).isDisplayed();
    await (await $(locator)).click();
  }

  async fillNewCustomerData(firstName = 'Test 1', lastName = 'Test 2', postCode = 'Test 3') {
    await (await $('[placeholder="First Name"]')).setValue(firstName);
    await (await $('[placeholder="Last Name"]')).setValue(lastName);
    await (await $('[placeholder="Post Code"]')).setValue(postCode);
  }

  async getAlertText() {
    return browser.getAlertText();
  }
}

module.exports = WDIOBrowser;
