const Data = require("./Data")

class Utils extends Data {

    data = {
        infos: {
            user: "",
            money: 0,
            visitor: 0,
            life: 0,
            prestige: 0.0,
            maj: ""
        },
        stocks: {}
    }

    async sendSpy() {
        this.data.spy = await this.clickButton('form[name="superespion"] > div > input[name="Submit"]')
    }

    async sendSuperSpy() {
        this.data.superspy = await this.clickButton('form[name="espion"] > div > input[name="Submit"]')
    }

    async addTicketPrice() {
        await this.goto("bureau2.php?px=plus")
        console.log("Tiket price increased")
    }

    async updateEmployee() {
        await this.goto("animaux.php?bot=1")
        console.log("Employéé updated")
    }

    async getInfos() {
        await this.goto("zonemembre.php")
        this.data.infos = {
            user: await this.getUser(),
            money: await this.getMoney(),
            visitor: await this.getVisitor(),
            life: await this.getLife(),
            prestige: await this.getPrestige(),
            maj: await this.getMaj()
        }
    }

    async getMessages() {
        await this.goto("event.php")
        this.data.infos.message = await this.getReport()
    }

    async getStocks() {
        await this.goto("bureau4.php")
        this.data.stocks = {
            food: {
                stock: await this.getFoodStock(),
                consumed: await this.getFoodConsumed(),
                addElem: "div > input[name=add_stock]"
            },
            souvenir: {
                stock: await this.getSouvenirStock(),
                consumed: await this.getSouvenirConsumed(),
                addElem: "tr > td:nth-child(1) > form > div > table > tbody > tr > td > input[name=nb_stock]"
            },
            snacks: {
                stock: await this.getSnacksStock(),
                consumed: await this.getSnacksConsumed(),
                addElem: "tr > td:nth-child(2) > form > div > table > tbody > tr > td > input[name=nb_stock]"
            },
            drink: {
                stock: await this.getDrinkStock(),
                consumed: await this.getDrinkConsumed(),
                addElem: "tr > td:nth-child(3) > form > div > table > tbody > tr > td > input[name=nb_stock]"
            },
            icecream: {
                stock: await this.getIcecreamStock(),
                consumed: await this.getIcecreamConsumed(),
                addElem: "tr > td:nth-child(4) > form > div > table > tbody > tr > td > input[name=nb_stock]"
            }
        }
    }

    async getRecettes() {
        await this.goto("bureau2.php");
        this.data.infos.earning = await this.getEarning()
    }
    async getCost() {
        await this.goto("bureau.php");
        this.data.infos.employeCost = await this.getEmployeCost()
    }

    async refillStock() {
        for (var key in this.data.stocks) {
            if (this.data.stocks[key].stock < this.data.stocks[key].consumed)
                await this.type(this.data.stocks[key].addElem, (this.data.stocks[key].consumed * 3).toString())
                    .then(() => this.enter())
        }
    }

    async login({ user, pass }) {
        await this.goto("");
        await this.type('input[name=pseudo]', user)
        await this.type('input[name=passe]', pass)
        await this.enter()
    }

}

module.exports = Utils