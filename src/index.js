const { Zoo, Log } = require("./Zoo")

const CONFIG = require('../config.json')


async function main() {
    const game = new Zoo(CONFIG)
    const LOGGER = new Log()

    await game.start()
    LOGGER.hello(game.data.infos.user)
    await game.getMessages()
    await game.checkRecette()
    LOGGER.print(game.data.infos.maj)
    LOGGER.print(game.data.infos.message)
    LOGGER.infos(game.data.infos)
    await game.checkTicket()
    if (game.data.infos.visitor == 3500)
        LOGGER.ok("[+] Ticket price")
    await game.checkStocks()
    for (var key in game.data.stocks) {
        if (game.data.stocks[key].stock < game.data.stocks[key].consumed) {
            LOGGER.ko(key + " stock")
            LOGGER.print(`\t(${game.data.stocks[key].stock.toLocaleString('fr')}/${game.data.stocks[key].consumed.toLocaleString('fr')})\n`)
        }
        else {
            LOGGER.ok(key + " stock")
            LOGGER.print(`\t(${game.data.stocks[key].stock.toLocaleString('fr')}/${game.data.stocks[key].consumed.toLocaleString('fr')})\n`)
        }
    }
    await game.checkSpies()
    if (game.data.spy == false)
        LOGGER.ko('Spy not available')
    else
        LOGGER.ok('Spy used')
    if (game.data.superspy == false)
        LOGGER.ko('Super spy not available')
    else
        LOGGER.ok('Super spy used')
    await game.closeBrowser()
}

main()