enum ActionKind {
    Walking,
    Idle,
    Jumping
}
function heal (potion0: boolean) {
    if (info.life() < 3) {
        while (true) {
            info.setLife(info.life() + 1)
        }
    }
}
let p1: Sprite = null
scene.centerCameraAt(7, 8)
tiles.setTilemap(tilemap`level1 start`)
let potion = 1
let p1Name = game.askForString("")
tiles.placeOnTile(p1, tiles.getTileLocation(7, 8))
p1 = sprites.create(assets.image`skellyFront`, SpriteKind.Player)
forever(function () {
    scene.cameraFollowSprite(p1)
    controller.moveSprite(p1, 75, 75)
})
