let etat_actuel = 0
let nombre = 0
let etat_passe = 0
basic.forever(function () {
    let etat_passe2 = 0
    etat_actuel = pins.digitalReadPin(DigitalPin.P16)
    if (etat_actuel != etat_passe2) {
        if (etat_actuel == 1) {
            nombre += 1
        }
    }
    etat_passe = etat_actuel
    if (nombre == 1) {
        basic.showString("alarme")
        if (input.buttonIsPressed(Button.A)) {
            nombre += -1
        }
    }
})
