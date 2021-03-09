tiles.setTilemap(tilemap`level1 start`)
let p1Name = game.askForString("")
let p1 = sprites.create(assets.image`forestMonkey0`, SpriteKind.Player)
music.setVolume(20)
forever(function () {
    music.playMelody("F G A D E F E D ", 260)
})
