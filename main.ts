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
    radio.sendString("4" + "/" + Math.round(input.magneticForce(Dimension.X)) + "/" + Math.round(input.magneticForce(Dimension.Y)) + "/" + Math.round(input.magneticForce(Dimension.Z)) + ";")
    control.waitMicros(20)
})
