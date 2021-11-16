etat_actuel = 0
etat_passe = 0
nombre = 0

def on_forever():
    global etat_actuel, nombre, etat_passe
    etat_actuel = pins.digital_read_pin(DigitalPin.P16)
    if etat_actuel != etat_passe:
        if etat_actuel == 1:
            nombre += 1
    
basic.forever(on_forever)
