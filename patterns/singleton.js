const { chromium } = require('playwright');

class PlaywrightSession {
  constructor() {
    if (PlaywrightSession._instance) {
      return PlaywrightSession._instance;
    }
    this.browser = chromium.launch({
      args: ['--start-maximized'],
      headless: false
    });
    this.tab = this.browser.then(e => e.newPage());

    PlaywrightSession._instance = this;
  }
}

module.exports = PlaywrightSession;
