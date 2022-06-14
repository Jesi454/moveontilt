input.onButtonPressed(Button.A, function () {
    lockX = 1
})
input.onButtonPressed(Button.B, function () {
    lockY = 1
})
function controlObject () {
    if (input.rotation(Rotation.Pitch) >= 45) {
        object2.change(LedSpriteProperty.Y, 1)
    } else if (input.rotation(Rotation.Pitch) >= -45 && !(input.rotation(Rotation.Pitch) >= 0)) {
        object2.change(LedSpriteProperty.Y, -1)
    }
    if (input.rotation(Rotation.Roll) >= 45) {
        object2.change(LedSpriteProperty.X, 1)
    } else if (input.rotation(Rotation.Roll) >= -45 && !(input.rotation(Rotation.Roll) >= 0)) {
        object2.change(LedSpriteProperty.X, -1)
    }
    basic.pause(100)
}
let lockX = 0
let lockY = 0
let object2: game.LedSprite = null
object2 = game.createSprite(2, 2)
lockY = 0
lockX = 0
basic.forever(function () {
    controlObject()
})
