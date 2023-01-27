let clock = 1
let NOON = 8
basic.forever(function () {
    if (clock >= NOON) {
        game.addScore(1)
        basic.pause(200)
        clock = 0
    } else {
        basic.pause(100)
        clock += 1
    }
})
