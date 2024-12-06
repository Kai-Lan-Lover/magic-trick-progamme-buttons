input.onButtonPressed(Button.A, function () {
    if (isSwitched) {
        basic.showString("B")
    } else {
        basic.showString("A")
    }
})
input.onButtonPressed(Button.B, function () {
    if (isSwitched) {
        basic.showString("A")
    } else {
        basic.showString("B")
    }
})
let force = 0
let isSwitched = false
isSwitched = false
basic.forever(function () {
    force = Math.abs(input.magneticForce(Dimension.Strength))
    isSwitched = force > 100
})
