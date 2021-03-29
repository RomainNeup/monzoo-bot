class Log {

    c1 = "\x1b[30m" //black
    c2 = "\x1b[31m" //red
    c3 = "\x1b[32m" //green
    c4 = "\x1b[33m" //yellow
    c5 = "\x1b[34m" //blue
    c6 = "\x1b[35m" //magenta
    c7 = "\x1b[36m" //cyan
    c8 = "\x1b[37m" //white
    cr = "\x1b[0m" //reset

    constructor() {
        console.clear()
    }

    hello(name) {
        console.log(`Salut ${name} 👋`)
    }

    print(text) {
        console.log(text)
    }

    infos({ money, visitor, life, prestige, earning, employeCost }) {
        console.log('\n')
        console.log(`Visitor:    ${(visitor/3500*100).toFixed(2)}%`)
        console.log(`Money:      ${money.toLocaleString('fr')}`)
        console.log(`Life:       ${life}%`)
        console.log(`Prestige:   ${prestige}%`)
        console.log(`Recette:    ${(earning - employeCost).toLocaleString('fr')}`)
    }

    printInfo(name, value) {
        console.log(`${name} \t${this.c5}${value}${this.cr}`)
    }

    ok(value) {
        console.log(`[${this.c3}OK${this.cr}] ${value}`)
    }

    ko(value) {
        console.log(`[${this.c2}KO${this.cr}] ${value}`)
    }

}

module.exports = Log