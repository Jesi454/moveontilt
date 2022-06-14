def controlObject():
    if input.rotation(Rotation.PITCH) >= 45:
        object2.change(LedSpriteProperty.Y, 1)
    elif input.rotation(Rotation.PITCH) >= -45 and not (input.rotation(Rotation.PITCH) >= 0):
        object2.change(LedSpriteProperty.Y, -1)
    if input.rotation(Rotation.ROLL) >= 45:
        object2.change(LedSpriteProperty.X, 1)
    elif input.rotation(Rotation.ROLL) >= -45 and not (input.rotation(Rotation.ROLL) >= 0):
        object2.change(LedSpriteProperty.X, -1)
    basic.pause(100)
object2: game.LedSprite = None
input.calibrate_compass()
object2 = game.create_sprite(2, 2)

def on_forever():
    controlObject()
basic.forever(on_forever)
