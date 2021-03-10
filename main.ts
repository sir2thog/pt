enum ActionKind {
    Walking,
    Idle,
    Jumping
}
tiles.setTilemap(tilemap`level1 start`)
let p1Name = game.askForString("")
let p1 = sprites.create(assets.image`forestMonkey0`, SpriteKind.Player)
tiles.placeOnTile(p1, tiles.getTileLocation(7, 8))
music.setVolume(20)
forever(function () {
    controller.moveSprite(p1)
    scene.cameraFollowSprite(p1)
    music.playMelody("F G A D E F E D ", 260)
})
