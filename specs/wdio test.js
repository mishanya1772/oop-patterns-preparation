const expect = require('chai').expect;

describe('Add', () => {
  it('new customer', async () => {
    await browser.url(`https://www.globalsqa.com/angularJs-protractor/BankingProject`);

    await (await $('button[ng-click="manager()"]')).click();
    await (await $('button[ng-click="addCust()"]')).click();

    await (await $('[placeholder="First Name"]')).setValue('Test 1');
    await (await $('[placeholder="Last Name"]')).setValue('Test 2');
    await (await $('[placeholder="Post Code"]')).setValue('Test 3');

    await (await $('button[type="submit"]')).click();

    expect(await browser.getAlertText()).contain('Customer added successfully with customer');
  });
});
