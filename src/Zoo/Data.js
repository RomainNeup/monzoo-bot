const { Page } = require("../Chromium");

class Data extends Page {

    getReport() {
        return this.getInnerText('div > div[style*="background-color:#634425"')
            .then(a => a.split('\n')[1])
    }

    getUser() {
        return this.getInnerText("tr > td > div > div > div:nth-child(1)")
    }

    getMoney() {
        return this.getInt("tr > td > div > div > div:nth-child(2)")
    }

    getVisitor() {
        return this.getInt("tr > td > div > div > div:nth-child(3)")
    }

    getLife() {
        return this.getStyleWidth("tr > td > div > div > div > div")
    }

    getPrestige() {
        return this.getFloat("tr > td > div > div > a > div")
    }

    getMaj() {
        return this.getInnerText("tr > td > div > div:nth-child(7) > a")
    }

    getFoodStock() {
        return this.getInt('td > form > div > div > strong')
    }

    getFoodConsumed() {
        return this.getInt('tbody > tr > td > div.Style1 > strong')
            .then(a => Math.abs(a))
    }

    getSouvenirStock() {
        return this.getInt('tr > td:nth-child(1) > form > div > strong')
    }

    getSouvenirConsumed() {
        return this.getInt('tr:nth-child(3) > td:nth-child(1) > div')
            .then(a => Math.abs(a))
    }

    getSnacksStock() {
        return this.getInt('tr > td:nth-child(2) > form > div > strong')
    }

    getSnacksConsumed() {
        return this.getInt('tr:nth-child(3) > td:nth-child(2) > div')
            .then(a => Math.abs(a))
    }

    getDrinkStock() {
        return this.getInt('tr > td:nth-child(3) > form > div > strong')
    }

    getDrinkConsumed() {
        return this.getInt('tr:nth-child(3) > td:nth-child(3) > div')
            .then(a => Math.abs(a))
    }

    getIcecreamStock() {
        return this.getInt('tr > td:nth-child(4) > form > div > strong')
    }

    getIcecreamConsumed() {
        return this.getInt('tr:nth-child(3) > td:nth-child(4) > div')
            .then(a => Math.abs(a))
    }

    getEmployeCost() {
        return this.getInnerText('tr > td > div.Style3 > strong')
            .then(a => parseInt(a.replace(/\- (\d+)/gm, "$1")))
    }

    getEarning() {
        return this.getInnerText('tr > td > div.Style1 > strong')
            .then(a => parseInt(a.replace(/\+ (\d+) Zoo'z/gm, "$1")))
    }
}

module.exports = Data