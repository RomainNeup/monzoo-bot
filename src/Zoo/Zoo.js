const Utils = require('./Utils')

class Zoo extends Utils {
    CONFIG

    constructor(CONFIG) {
        super()
        this.CONFIG = CONFIG
    }

    start() {
        return this.createPage()
            .then(() => this.login(this.CONFIG.login))
            .then(() => this.getInfos())
            .then(() => this.getMessages())
            .then(() => this.updateEmployee())
    }

    checkTicket() {
        if (this.data.infos.visitor == 3500)
            return this.addTicketPrice()
    }

    checkStocks() {
        return this.getStocks()
            .then(() => this.refillStock())
    }

    checkRecette() {
        return this.getRecettes()
            .then(() => this.getCost())
    }

    checkSpies() {
        return this.sendSpy()
            .then(() => this.sendSuperSpy())
    }

}

module.exports = Zoo