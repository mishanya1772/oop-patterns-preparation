const plInstance = new(require('../patterns/singleton'))();

afterAll(async () => {
  const plBrowser = await plInstance.browser;

  return plBrowser.close();
});
