const Browser = require("./Browser");

class Page extends Browser {
    page

    createPage() {
        return this.createBrowser()
            .then(() => this.browser.newPage())
            .then(a => this.page = a)
    }

    getInt(elem) {
        return this.getInnerText(elem)
            .then(a => parseInt(a))
    }

    getFloat(elem) {
        return this.getInnerText(elem)
            .then(a => parseFloat(a))
    }

    getInnerText(elem) {
        return this.page.$(elem)
            .then(() => this.page.$eval(elem, el => el.innerText))
            .catch(() => false)
    }

    getStyleWidth(elem) {
        return this.page.$(elem)
            .then(() => this.page.$eval(elem, el => parseInt(el.style.width)))
            .catch(() => false)
    }

    goto(dest) {
        return this.page.goto("https://monzoo.net/" + dest)
    }

    type(elem, value) {
        return this.page.$(elem)
            .then(() => this.page.$eval(elem, e => e.value = ""))
            .then(() => this.page.type(elem, value))
            .catch(() => false)
    }

    enter() {
        return this.page.keyboard.press('Enter')
            .then(() => this.page.waitForNavigation())
    }

    clickButton(elem) {
        return this.page.$(elem)
            .then(() => this.page.$eval(elem, el => el.click()))
            .then(() => this.page.waitForNavigation())
            .catch(() => false)
    }

}

module.exports = Page