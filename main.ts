control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    music.playMelody("C D E F G A B C5 ", 120)
})
soundExpression.happy.play()
basic.showString("")
soundExpression.giggle.play()
basic.showString("")
let myImage = images.createBigImage(`
    . . . . . . . . . .
    . # # # . . # # # .
    . # . # . . # . # .
    . # # # . . # # # .
    # . . . # . # . # .
    `)
while (true) {
    while (input.buttonIsPressed(Button.A)) {
    	
    }
    myImage.showImage(0, 400)
    myImage.showImage(5, 400)
}
basic.forever(function () {
	
})
