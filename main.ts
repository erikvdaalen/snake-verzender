radio.setGroup(103)
basic.forever(function () {
    radio.sendValue("x", pins.analogReadPin(AnalogPin.P0))
    radio.sendValue("y", pins.analogReadPin(AnalogPin.P0))
})
