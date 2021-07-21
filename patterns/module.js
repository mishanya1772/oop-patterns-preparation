const wdioBrowser = new (require('./adapter/wdio test'));
const playwrightBrowser = new (require('./adapter/playwright test'));

module.exports = () => {
  const instance = {
    wdio: wdioBrowser,
    playwright: playwrightBrowser
  };

  return instance[`${process.env.conf.trim()}`];
};
