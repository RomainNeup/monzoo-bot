const puppeteer = require('puppeteer');
const CONFIG = require('../../config.json');

class Browser {
    browser

    createBrowser() {
        return puppeteer.launch(CONFIG.browserConfig)
            .then(a => this.browser = a)
    }

    closeBrowser() {
        return this.browser.close()
    }

}

module.exports = Browser