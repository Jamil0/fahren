input.onPinPressed(TouchPin.P0, function () {
    motors.dualMotorPower(Motor.A, 100)
    music.playMelody("C5 B A G F E D C ", 120)
})
input.onButtonPressed(Button.A, function () {
    motors.dualMotorPower(Motor.B, -50)
})
input.onButtonPressed(Button.AB, function () {
    motors.motorCommand(MotorCommand.Break)
})
basic.forever(function () {
	
})
