let nombre = 0
let etat_actuel = 0
let etat_passe = 0
input.onButtonPressed(Button.A, function () {
    nombre += -1
    basic.clearScreen()
})
basic.forever(function () {
    let etat_passe2 = 0
    etat_actuel = pins.digitalReadPin(DigitalPin.P2)
    if (etat_actuel != etat_passe2) {
        if (etat_actuel == 1) {
            nombre += 1
        }
    }
    etat_passe = etat_actuel
    if (1 < nombre) {
        nombre = 1
    }
    if (nombre == 1) {
        basic.showString("alarme")
    }
})
