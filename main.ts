input.onButtonPressed(Button.A, function () {
    input.calibrateCompass()
    basic.showLeds(`
        # . . # .
        # . . # .
        # # # # .
        # . . # .
        # . . # .
        `)
})
radio.setGroup(99)
basic.showLeds(`
    # . . # .
    # . . # .
    # # # # .
    # . . # .
    # . . # .
    `)
basic.forever(function () {
    radio.sendString("3" + "/" + input.acceleration(Dimension.X) + "/" + input.acceleration(Dimension.Y) + "/" + input.acceleration(Dimension.Z) + ";")
    control.waitMicros(20)
    radio.sendString("4" + "/" + input.magneticForce(Dimension.X) + "/" + input.magneticForce(Dimension.Y) + "/" + input.magneticForce(Dimension.Z) + ";")
    control.waitMicros(20)
})
