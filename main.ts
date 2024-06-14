namespace SpriteKind {
    export const FLAG = SpriteKind.create()
    export const VOID = SpriteKind.create()
    export const SPIKE = SpriteKind.create()
    export const FLAG2 = SpriteKind.create()
    export const j2 = SpriteKind.create()
    export const Sun = SpriteKind.create()
    export const CP = SpriteKind.create()
    export const Yellow = SpriteKind.create()
    export const Yellow2 = SpriteKind.create()
    export const Yellow3 = SpriteKind.create()
    export const Yellow4 = SpriteKind.create()
    export const Yellow5 = SpriteKind.create()
    export const Yellow6 = SpriteKind.create()
    export const Flag3 = SpriteKind.create()
    export const RED = SpriteKind.create()
    export const Blue = SpriteKind.create()
    export const HP = SpriteKind.create()
    export const Yellow7 = SpriteKind.create()
    export const Yellow8 = SpriteKind.create()
    export const Yellow9 = SpriteKind.create()
    export const Yellow10 = SpriteKind.create()
    export const YEllow11 = SpriteKind.create()
    export const Yellow12 = SpriteKind.create()
    export const Yellow13 = SpriteKind.create()
    export const Yellow14 = SpriteKind.create()
    export const Yellow15 = SpriteKind.create()
    export const Yellow16 = SpriteKind.create()
    export const Yellow17 = SpriteKind.create()
    export const Yellow18 = SpriteKind.create()
    export const YEllow19 = SpriteKind.create()
    export const Yellow20 = SpriteKind.create()
    export const Yellow21 = SpriteKind.create()
    export const Yellow22 = SpriteKind.create()
    export const Yellow23 = SpriteKind.create()
    export const Yellow24 = SpriteKind.create()
    export const YEllow25 = SpriteKind.create()
    export const Yellow26 = SpriteKind.create()
    export const Yellow27 = SpriteKind.create()
    export const Yellow28 = SpriteKind.create()
    export const Y1 = SpriteKind.create()
    export const Y2 = SpriteKind.create()
    export const Y3 = SpriteKind.create()
    export const Y4 = SpriteKind.create()
    export const CHUBBYWRINKLE = SpriteKind.create()
    export const T1 = SpriteKind.create()
    export const T2 = SpriteKind.create()
    export const T3 = SpriteKind.create()
    export const Y5 = SpriteKind.create()
    export const Y6 = SpriteKind.create()
    export const f6 = SpriteKind.create()
    export const j1 = SpriteKind.create()
    export const b = SpriteKind.create()
    export const e = SpriteKind.create()
    export const d = SpriteKind.create()
    export const g = SpriteKind.create()
    export const afd = SpriteKind.create()
    export const fad = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.j1, function (sprite, otherSprite) {
    sprites.destroy(JA, effects.fire, 100)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setVelocity(200, -200)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Y2, function (sprite, otherSprite) {
    sprites.destroy(C2, effects.fire, 1000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Yellow21, function (sprite, otherSprite) {
    sprites.destroy(COin20, effects.fire, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Yellow8, function (sprite, otherSprite) {
    sprites.destroy(shrukin, effects.fire, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.d, function (sprite, otherSprite) {
    sprites.destroy(c, effects.fire, 100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Yellow15, function (sprite, otherSprite) {
    sprites.destroy(Coin14, effects.fire, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Yellow3, function (sprite, otherSprite) {
    sprites.destroy(Coin3, effects.fire, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.SPIKE, function (sprite, otherSprite) {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Yellow16, function (sprite, otherSprite) {
    sprites.destroy(Coin15, effects.fire, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Yellow20, function (sprite, otherSprite) {
    sprites.destroy(Coin19, effects.fire, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Y1, function (sprite, otherSprite) {
    sprites.destroy(C1, effects.fire, 1000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Yellow26, function (sprite, otherSprite) {
    sprites.destroy(Coin25, effects.fire, 1000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.f6, function (sprite, otherSprite) {
    sprites.destroy(fa, effects.fire, 100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Y3, function (sprite, otherSprite) {
    sprites.destroy(C3, effects.fire, 1000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Y5, function (sprite, otherSprite) {
    sprites.destroy(C5, effects.fountain, 100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Yellow17, function (sprite, otherSprite) {
    sprites.destroy(Coin16, effects.fire, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.b, function (sprite, otherSprite) {
    sprites.destroy(a, effects.fire, 100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Blue, function (sprite, otherSprite) {
    pause(200)
    tiles.setCurrentTilemap(tilemap`level22`)
    pause(3000)
    sprites.destroy(TEMPLE)
    mySprite.setPosition(10, 296)
    tiles.setCurrentTilemap(tilemap`level19`)
    sprites.destroyAllSpritesOfKind(SpriteKind.RED)
    TREE = sprites.create(img`
        .....445...4455....54...eeee.22.
        ...444455545e.445..455..e.2e52..
        ..45.474444.5e5.522222ee.225e222
        ..4..44444444464222264e27626.2ee
        .55.7554556564472.4424e27c2266e.
        e4d5.5e45.5555422.44..e2222ee2e.
        .4.5555455544452226464226622.ee2
        ..5.5655455.55442444622222266eee
        ..544564c4..44242262622262d22226
        ...45..455444422422225222d2c672e
        ..44554545554554422445222222222e
        7445444.44.e46442422462222256ee6
        .45544e4ee.64446246446226266e2e7
        .4544.d44d2222222264e62226262...
        ..5544.44.42244ee2ee262266e222ee
        .54.444.24.242dd224c422ee26ee2ee
        .54554.2244224dd24424222e26ee22e
        ..4455.4444224.dd6464eeeeeee22e2
        ....44444224424446e6ee2.eee22ee6
        ......74..224.5544e46e.eee.e2ee.
        ......57..2224222eeeeee..e6eee..
        ......7....2222.2e2eee.ee.......
        ............22222e6eee..........
        ................deeec...........
        ................deeec...........
        ...............edeece...........
        ...............eeeece...........
        ..............ddeeecce..........
        ............ddddeeeccc..........
        .........eeeddee.ececccec.......
        .......eeee.4ee..ece.cccec......
        ....eee....e......e...eee.ccee..
        `, SpriteKind.RED)
    TREE.setPosition(124, 288)
    TREE = sprites.create(img`
        .....79....797....97..7.....77..
        ..9.99999.977779..799.7..7797...
        ..93377.969747.766777766779e777.
        ...1379.73377317677636776763377.
        99.797.73176777777731767c77137..
        7e9494777733769967776766677677.7
        ..73397773777966667676966777677.
        .9.3197977779917777667677766766.
        .7777674376767377676677673776767
        ..733.77777977777713973313767c67
        ..379799777799777737973777731777
        799997799.7967777777677777996.66
        .997777ee7633367767767767667677.
        .931377777731767767e67776767....
        .9337377.779777776776776676777.6
        9..777777.77777773776367767766..
        9.997...77737777316731767667.66.
        ..999.7737.77.796367cc667631676.
        ...7...71377.777676697317773776.
        .....77....7.9977e7669.7...666..
        .....97....7799666767..7.6......
        .....7..........4eeee.6.........
        ................46ee6...........
        ................4eeec...........
        ................4eeec...........
        ...............e4eece...........
        ...............eeeece...........
        ..............44eeecce..........
        ............444eeeeccc..........
        .........eee44ee.ececccec.......
        .......eeee.4ee..ece.cccec......
        ....eee....e......e...eee.ccee..
        `, SpriteKind.RED)
    TREE.setPosition(300, 288)
    TREE = sprites.create(img`
        .....75....757....57..7.....77..
        ..5.55555.577775..755.7..7757...
        ..5.577.565747.766777766775e777.
        ....775.77577667677676776767777.
        55.757.75676777777777767c77667..
        7e5454777777765567776766677677.7
        ..77757777777566667676566777677.
        .5.7657577775777777667677766766.
        .7777674576767777676677677776767
        ..77..77777577777777577757767c67
        ..775755777755777777577777776777
        .55557755.7567777777677777566.66
        .557777ee7677767767767767667677.
        .577.77777777767767e67776767....
        .5577777.775777776776776676777.6
        5..777777.77777777776767767766..
        5.557...77777777776767767667.66.
        ..555.7777.77.756767cc667677676.
        ...7...77777.777676657767776776.
        .....77....7.5577e7665.7...666..
        .....57....77..666767..7.6......
        .....7..........4eeee.6.........
        ................46ee6...........
        ................4eeec...........
        ................4eeec...........
        ...............e4eece...........
        ...............eeeece...........
        ..............44eeecce..........
        ............444eeeeccc..........
        .........eee44ee.ececccec.......
        .......eeee.4ee..ece.cccec......
        ....eee....e......e...eee.ccee..
        `, SpriteKind.RED)
    TREE.setPosition(476, 288)
    ninga = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 8 8 f f f . . . . 
        . . . f f f 8 8 8 8 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 8 8 8 8 8 8 e e f . . 
        . . f e 8 f f f f f f 8 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 8 8 8 8 8 8 f 4 e . . 
        . . 4 d f 8 8 8 8 8 8 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Enemy)
    ninga.vx = 0
    animation.runImageAnimation(
    ninga,
    [img`
        . . . . f f f f f f . . . . . . 
        . . . f 8 f e e e e f f . . . . 
        . . f 8 8 8 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 8 8 8 8 e e f f f f . . . 
        . f 8 e f f f f 8 8 8 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 8 8 8 e d d 4 . . . . . 
        . . . f 8 8 8 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 8 f e e e e f f . . . . 
        . . f 8 8 8 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 8 8 8 8 e e f f f f . . . 
        . f 8 e f f f f 8 8 8 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d e e e e e f . . . 
        . . . f e 4 e d d 4 f . . . . . 
        . . . f 8 8 e d d e f . . . . . 
        . . f f 5 5 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `,img`
        . . . . f f f f f f . . . . . . 
        . . . f 8 f e e e e f f . . . . 
        . . f 8 8 8 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 8 8 8 8 e e f f f f . . . 
        . f 8 e f f f f 8 8 8 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 8 8 8 e d d 4 . . . . . 
        . . . f 8 8 8 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 8 f e e e e f f . . . . 
        . . f 8 8 8 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 8 8 8 8 e e f f f f . . . 
        . f 8 e f f f f 8 8 8 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e d d 4 . . . . 
        . . . f 8 8 8 8 e d d e . . . . 
        . . f f 5 5 4 4 f e e f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    500,
    true
    )
    ninga.setPosition(550, 296)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Yellow28, function (sprite, otherSprite) {
    sprites.destroy(Coin27, effects.fire, 1000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Yellow9, function (sprite, otherSprite) {
    sprites.destroy(Coin8, effects.fire, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Yellow22, function (sprite, otherSprite) {
    sprites.destroy(Coin21, effects.fountain, 1000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Yellow2, function (sprite6, otherSprite6) {
    sprites.destroy(Coin2, effects.fire, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Yellow6, function (sprite11, otherSprite11) {
    sprites.destroy(Coin6, effects.fire, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.g, function (sprite, otherSprite) {
    sprites.destroy(f, effects.fire, 100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.CP, function (sprite7, otherSprite7) {
    tiles.setCurrentTilemap(tilemap`level10`)
    sprites.destroyAllSpritesOfKind(SpriteKind.VOID)
    sprites.destroyAllSpritesOfKind(SpriteKind.CP)
    sprites.destroyAllSpritesOfKind(SpriteKind.SPIKE)
    Checkpoint3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f 2 a a 2 f f . . . . 
        . . . . . f 2 a 2 2 2 2 f . . . 
        . . . . . f a 2 2 2 2 2 2 f . . 
        . . . . . f 2 2 2 2 2 2 f . . . 
        . . . . . f f f 2 2 f f . . . . 
        . . . . . f b d f f . . . . . . 
        . . . . . f b d f . . . . . . . 
        . . . . . f b d f . . . . . . . 
        . . . . . f d d f . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f f f f f f f f . . . . . 
        . . f f f f f f f f f f . . . . 
        `, SpriteKind.Flag3)
    Checkpoint3.setPosition(1100, 632)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Yellow14, function (sprite, otherSprite) {
    sprites.destroy(Coin13, effects.fire, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.VOID, function (sprite9, otherSprite9) {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Yellow, function (sprite3, otherSprite3) {
    sprites.destroy(Coin, effects.fire, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Yellow4, function (sprite10, otherSprite10) {
    sprites.destroy(Coin4, effects.fire, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Yellow7, function (sprite, otherSprite) {
    sprites.destroy(Coin7, effects.fire, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Y4, function (sprite, otherSprite) {
    sprites.destroy(C4, effects.fire, 1000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Y6, function (sprite, otherSprite) {
    sprites.destroy(c12, effects.fire, 100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Yellow13, function (sprite, otherSprite) {
    sprites.destroy(coin12, effects.fire, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.FLAG, function (sprite2, otherSprite2) {
    let Coin26: Sprite = null
    tiles.setCurrentTilemap(tilemap`level4`)
    mySprite.setPosition(5, 296)
    C5 = sprites.create(img`
        . . . . f f f f . . . . . . . . 
        . . f f 8 8 8 8 f f . . . . . . 
        . . f 8 8 8 8 8 8 f . . . . . . 
        . f 8 8 8 9 9 8 8 8 f . . . . . 
        . f 8 8 8 9 9 8 8 8 f . . . . . 
        . f 8 8 8 9 9 8 8 8 f . . . . . 
        . f 8 8 8 9 9 8 8 8 f . . . . . 
        . . f 8 8 8 8 8 8 f . . . . . . 
        . . f f 8 8 8 8 f f . . . . . . 
        . . . . f f f f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Y5)
    C5.setPosition(25, 232)
    animation.runImageAnimation(
    C5,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f 8 8 8 8 f f . . . . 
        . . . . f 8 8 8 8 8 8 f . . . . 
        . . . f 8 8 8 9 9 8 8 8 f . . . 
        . . . f 8 8 8 9 9 8 8 8 f . . . 
        . . . f 8 8 8 9 9 8 8 8 f . . . 
        . . . f 8 8 8 9 9 8 8 8 f . . . 
        . . . . f 8 8 8 8 8 8 f . . . . 
        . . . . f f 8 8 8 8 f f . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f f 8 f 8 8 8 f . . . . 
        . . . . f 8 f 8 8 8 8 8 f . . . 
        . . . f 8 f 8 8 8 9 8 8 f . . . 
        . . . f 8 f 8 8 8 9 9 8 8 f . . 
        . . . f 8 f 8 8 8 9 9 8 8 f . . 
        . . . f 8 f 8 8 8 9 8 8 f . . . 
        . . . . f 8 f 8 8 8 8 8 f . . . 
        . . . . f f 8 f 8 8 8 f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . f f 8 f 8 f f . . . . 
        . . . . f f 8 f 8 8 8 f . . . . 
        . . . . f 8 f 8 8 8 8 f f . . . 
        . . . . f 8 f 8 8 9 8 8 f . . . 
        . . . . f 8 f 8 8 9 8 8 f . . . 
        . . . . f 8 f 8 8 8 8 f f . . . 
        . . . . f f 8 f 8 8 8 f . . . . 
        . . . . . f f 8 f 8 f f . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f 8 f 8 f f . . . . . 
        . . . . . f 8 f 8 8 f . . . . . 
        . . . . . f 8 f 8 8 f . . . . . 
        . . . . . f 8 f 8 8 f . . . . . 
        . . . . . f 8 f 8 8 f . . . . . 
        . . . . . f 8 f 8 f f . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    true
    )
    c12 = sprites.create(img`
        . . . . f f f f . . . . . . . . 
        . . f f 5 5 5 5 f f . . . . . . 
        . . f 5 5 5 5 5 5 f . . . . . . 
        . f 5 5 5 4 4 5 5 5 f . . . . . 
        . f 5 5 5 4 4 5 5 5 f . . . . . 
        . f 5 5 5 4 4 5 5 5 f . . . . . 
        . f 5 5 5 4 4 5 5 5 f . . . . . 
        . . f 5 5 5 5 5 5 f . . . . . . 
        . . f f 5 5 5 5 f f . . . . . . 
        . . . . f f f f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Y6)
    c12.setPosition(88, 216)
    animation.runImageAnimation(
    c12,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f 5 5 5 5 f f . . . . 
        . . . . f 5 5 5 5 5 5 f . . . . 
        . . . f 5 5 5 4 4 5 5 5 f . . . 
        . . . f 5 5 5 4 4 5 5 5 f . . . 
        . . . f 5 5 5 4 4 5 5 5 f . . . 
        . . . f 5 5 5 4 4 5 5 5 f . . . 
        . . . . f 5 5 5 5 5 5 f . . . . 
        . . . . f f 5 5 5 5 f f . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f f 5 f 5 5 5 f . . . . 
        . . . . f 5 f 5 5 5 5 5 f . . . 
        . . . f 5 f 5 5 5 4 5 5 f . . . 
        . . . f 5 f 5 5 5 4 4 5 5 f . . 
        . . . f 5 f 5 5 5 4 4 5 5 f . . 
        . . . f 5 f 5 5 5 4 5 5 f . . . 
        . . . . f 5 f 5 5 5 5 5 f . . . 
        . . . . f f 5 f 5 5 5 f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . f f 5 f 5 f f . . . . 
        . . . . f f 5 f 5 5 5 f . . . . 
        . . . . f 5 f 5 5 5 5 f f . . . 
        . . . . f 5 f 5 5 4 5 5 f . . . 
        . . . . f 5 f 5 5 4 5 5 f . . . 
        . . . . f 5 f 5 5 5 5 f f . . . 
        . . . . f f 5 f 5 5 5 f . . . . 
        . . . . . f f 5 f 5 f f . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f 5 f 5 f f . . . . . 
        . . . . . f 5 f 5 5 f . . . . . 
        . . . . . f 5 f 5 5 f . . . . . 
        . . . . . f 5 f 5 5 f . . . . . 
        . . . . . f 5 f 5 5 f . . . . . 
        . . . . . f 5 f 5 f f . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    true
    )
    fa = sprites.create(img`
        . . . . f f f f . . . . . . . . 
        . . f f 5 5 5 5 f f . . . . . . 
        . . f 5 5 5 5 5 5 f . . . . . . 
        . f 5 5 5 4 4 5 5 5 f . . . . . 
        . f 5 5 5 4 4 5 5 5 f . . . . . 
        . f 5 5 5 4 4 5 5 5 f . . . . . 
        . f 5 5 5 4 4 5 5 5 f . . . . . 
        . . f 5 5 5 5 5 5 f . . . . . . 
        . . f f 5 5 5 5 f f . . . . . . 
        . . . . f f f f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.f6)
    fa.setPosition(136, 186)
    animation.runImageAnimation(
    fa,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f 5 5 5 5 f f . . . . 
        . . . . f 5 5 5 5 5 5 f . . . . 
        . . . f 5 5 5 4 4 5 5 5 f . . . 
        . . . f 5 5 5 4 4 5 5 5 f . . . 
        . . . f 5 5 5 4 4 5 5 5 f . . . 
        . . . f 5 5 5 4 4 5 5 5 f . . . 
        . . . . f 5 5 5 5 5 5 f . . . . 
        . . . . f f 5 5 5 5 f f . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f f 5 f 5 5 5 f . . . . 
        . . . . f 5 f 5 5 5 5 5 f . . . 
        . . . f 5 f 5 5 5 4 5 5 f . . . 
        . . . f 5 f 5 5 5 4 4 5 5 f . . 
        . . . f 5 f 5 5 5 4 4 5 5 f . . 
        . . . f 5 f 5 5 5 4 5 5 f . . . 
        . . . . f 5 f 5 5 5 5 5 f . . . 
        . . . . f f 5 f 5 5 5 f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . f f 5 f 5 f f . . . . 
        . . . . f f 5 f 5 5 5 f . . . . 
        . . . . f 5 f 5 5 5 5 f f . . . 
        . . . . f 5 f 5 5 4 5 5 f . . . 
        . . . . f 5 f 5 5 4 5 5 f . . . 
        . . . . f 5 f 5 5 5 5 f f . . . 
        . . . . f f 5 f 5 5 5 f . . . . 
        . . . . . f f 5 f 5 f f . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f 5 f 5 f f . . . . . 
        . . . . . f 5 f 5 5 f . . . . . 
        . . . . . f 5 f 5 5 f . . . . . 
        . . . . . f 5 f 5 5 f . . . . . 
        . . . . . f 5 f 5 5 f . . . . . 
        . . . . . f 5 f 5 f f . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    true
    )
    JA = sprites.create(img`
        . . . . f f f f . . . . . . . . 
        . . f f 5 5 5 5 f f . . . . . . 
        . . f 5 5 5 5 5 5 f . . . . . . 
        . f 5 5 5 4 4 5 5 5 f . . . . . 
        . f 5 5 5 4 4 5 5 5 f . . . . . 
        . f 5 5 5 4 4 5 5 5 f . . . . . 
        . f 5 5 5 4 4 5 5 5 f . . . . . 
        . . f 5 5 5 5 5 5 f . . . . . . 
        . . f f 5 5 5 5 f f . . . . . . 
        . . . . f f f f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.j1)
    JA.setPosition(184, 168)
    animation.runImageAnimation(
    JA,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f 5 5 5 5 f f . . . . 
        . . . . f 5 5 5 5 5 5 f . . . . 
        . . . f 5 5 5 4 4 5 5 5 f . . . 
        . . . f 5 5 5 4 4 5 5 5 f . . . 
        . . . f 5 5 5 4 4 5 5 5 f . . . 
        . . . f 5 5 5 4 4 5 5 5 f . . . 
        . . . . f 5 5 5 5 5 5 f . . . . 
        . . . . f f 5 5 5 5 f f . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f f 5 f 5 5 5 f . . . . 
        . . . . f 5 f 5 5 5 5 5 f . . . 
        . . . f 5 f 5 5 5 4 5 5 f . . . 
        . . . f 5 f 5 5 5 4 4 5 5 f . . 
        . . . f 5 f 5 5 5 4 4 5 5 f . . 
        . . . f 5 f 5 5 5 4 5 5 f . . . 
        . . . . f 5 f 5 5 5 5 5 f . . . 
        . . . . f f 5 f 5 5 5 f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . f f 5 f 5 f f . . . . 
        . . . . f f 5 f 5 5 5 f . . . . 
        . . . . f 5 f 5 5 5 5 f f . . . 
        . . . . f 5 f 5 5 4 5 5 f . . . 
        . . . . f 5 f 5 5 4 5 5 f . . . 
        . . . . f 5 f 5 5 5 5 f f . . . 
        . . . . f f 5 f 5 5 5 f . . . . 
        . . . . . f f 5 f 5 f f . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f 5 f 5 f f . . . . . 
        . . . . . f 5 f 5 5 f . . . . . 
        . . . . . f 5 f 5 5 f . . . . . 
        . . . . . f 5 f 5 5 f . . . . . 
        . . . . . f 5 f 5 5 f . . . . . 
        . . . . . f 5 f 5 f f . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    true
    )
    a = sprites.create(img`
        . . . . f f f f . . . . . . . . 
        . . f f 5 5 5 5 f f . . . . . . 
        . . f 5 5 5 5 5 5 f . . . . . . 
        . f 5 5 5 4 4 5 5 5 f . . . . . 
        . f 5 5 5 4 4 5 5 5 f . . . . . 
        . f 5 5 5 4 4 5 5 5 f . . . . . 
        . f 5 5 5 4 4 5 5 5 f . . . . . 
        . . f 5 5 5 5 5 5 f . . . . . . 
        . . f f 5 5 5 5 f f . . . . . . 
        . . . . f f f f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.b)
    a.setPosition(232, 186)
    animation.runImageAnimation(
    a,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f 5 5 5 5 f f . . . . 
        . . . . f 5 5 5 5 5 5 f . . . . 
        . . . f 5 5 5 4 4 5 5 5 f . . . 
        . . . f 5 5 5 4 4 5 5 5 f . . . 
        . . . f 5 5 5 4 4 5 5 5 f . . . 
        . . . f 5 5 5 4 4 5 5 5 f . . . 
        . . . . f 5 5 5 5 5 5 f . . . . 
        . . . . f f 5 5 5 5 f f . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f f 5 f 5 5 5 f . . . . 
        . . . . f 5 f 5 5 5 5 5 f . . . 
        . . . f 5 f 5 5 5 4 5 5 f . . . 
        . . . f 5 f 5 5 5 4 4 5 5 f . . 
        . . . f 5 f 5 5 5 4 4 5 5 f . . 
        . . . f 5 f 5 5 5 4 5 5 f . . . 
        . . . . f 5 f 5 5 5 5 5 f . . . 
        . . . . f f 5 f 5 5 5 f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . f f 5 f 5 f f . . . . 
        . . . . f f 5 f 5 5 5 f . . . . 
        . . . . f 5 f 5 5 5 5 f f . . . 
        . . . . f 5 f 5 5 4 5 5 f . . . 
        . . . . f 5 f 5 5 4 5 5 f . . . 
        . . . . f 5 f 5 5 5 5 f f . . . 
        . . . . f f 5 f 5 5 5 f . . . . 
        . . . . . f f 5 f 5 f f . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f 5 f 5 f f . . . . . 
        . . . . . f 5 f 5 5 f . . . . . 
        . . . . . f 5 f 5 5 f . . . . . 
        . . . . . f 5 f 5 5 f . . . . . 
        . . . . . f 5 f 5 5 f . . . . . 
        . . . . . f 5 f 5 f f . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    true
    )
    c = sprites.create(img`
        . . . . f f f f . . . . . . . . 
        . . f f 5 5 5 5 f f . . . . . . 
        . . f 5 5 5 5 5 5 f . . . . . . 
        . f 5 5 5 4 4 5 5 5 f . . . . . 
        . f 5 5 5 4 4 5 5 5 f . . . . . 
        . f 5 5 5 4 4 5 5 5 f . . . . . 
        . f 5 5 5 4 4 5 5 5 f . . . . . 
        . . f 5 5 5 5 5 5 f . . . . . . 
        . . f f 5 5 5 5 f f . . . . . . 
        . . . . f f f f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.d)
    c.setPosition(262, 200)
    animation.runImageAnimation(
    c,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f 5 5 5 5 f f . . . . 
        . . . . f 5 5 5 5 5 5 f . . . . 
        . . . f 5 5 5 4 4 5 5 5 f . . . 
        . . . f 5 5 5 4 4 5 5 5 f . . . 
        . . . f 5 5 5 4 4 5 5 5 f . . . 
        . . . f 5 5 5 4 4 5 5 5 f . . . 
        . . . . f 5 5 5 5 5 5 f . . . . 
        . . . . f f 5 5 5 5 f f . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f f 5 f 5 5 5 f . . . . 
        . . . . f 5 f 5 5 5 5 5 f . . . 
        . . . f 5 f 5 5 5 4 5 5 f . . . 
        . . . f 5 f 5 5 5 4 4 5 5 f . . 
        . . . f 5 f 5 5 5 4 4 5 5 f . . 
        . . . f 5 f 5 5 5 4 5 5 f . . . 
        . . . . f 5 f 5 5 5 5 5 f . . . 
        . . . . f f 5 f 5 5 5 f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . f f 5 f 5 f f . . . . 
        . . . . f f 5 f 5 5 5 f . . . . 
        . . . . f 5 f 5 5 5 5 f f . . . 
        . . . . f 5 f 5 5 4 5 5 f . . . 
        . . . . f 5 f 5 5 4 5 5 f . . . 
        . . . . f 5 f 5 5 5 5 f f . . . 
        . . . . f f 5 f 5 5 5 f . . . . 
        . . . . . f f 5 f 5 f f . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f 5 f 5 f f . . . . . 
        . . . . . f 5 f 5 5 f . . . . . 
        . . . . . f 5 f 5 5 f . . . . . 
        . . . . . f 5 f 5 5 f . . . . . 
        . . . . . f 5 f 5 5 f . . . . . 
        . . . . . f 5 f 5 f f . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    true
    )
    f = sprites.create(img`
        . . . . f f f f . . . . . . . . 
        . . f f 5 5 5 5 f f . . . . . . 
        . . f 5 5 5 5 5 5 f . . . . . . 
        . f 5 5 5 4 4 5 5 5 f . . . . . 
        . f 5 5 5 4 4 5 5 5 f . . . . . 
        . f 5 5 5 4 4 5 5 5 f . . . . . 
        . f 5 5 5 4 4 5 5 5 f . . . . . 
        . . f 5 5 5 5 5 5 f . . . . . . 
        . . f f 5 5 5 5 f f . . . . . . 
        . . . . f f f f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.g)
    f.setPosition(276, 200)
    animation.runImageAnimation(
    f,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f 5 5 5 5 f f . . . . 
        . . . . f 5 5 5 5 5 5 f . . . . 
        . . . f 5 5 5 4 4 5 5 5 f . . . 
        . . . f 5 5 5 4 4 5 5 5 f . . . 
        . . . f 5 5 5 4 4 5 5 5 f . . . 
        . . . f 5 5 5 4 4 5 5 5 f . . . 
        . . . . f 5 5 5 5 5 5 f . . . . 
        . . . . f f 5 5 5 5 f f . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f f 5 f 5 5 5 f . . . . 
        . . . . f 5 f 5 5 5 5 5 f . . . 
        . . . f 5 f 5 5 5 4 5 5 f . . . 
        . . . f 5 f 5 5 5 4 4 5 5 f . . 
        . . . f 5 f 5 5 5 4 4 5 5 f . . 
        . . . f 5 f 5 5 5 4 5 5 f . . . 
        . . . . f 5 f 5 5 5 5 5 f . . . 
        . . . . f f 5 f 5 5 5 f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . f f 5 f 5 f f . . . . 
        . . . . f f 5 f 5 5 5 f . . . . 
        . . . . f 5 f 5 5 5 5 f f . . . 
        . . . . f 5 f 5 5 4 5 5 f . . . 
        . . . . f 5 f 5 5 4 5 5 f . . . 
        . . . . f 5 f 5 5 5 5 f f . . . 
        . . . . f f 5 f 5 5 5 f . . . . 
        . . . . . f f 5 f 5 f f . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f 5 f 5 f f . . . . . 
        . . . . . f 5 f 5 5 f . . . . . 
        . . . . . f 5 f 5 5 f . . . . . 
        . . . . . f 5 f 5 5 f . . . . . 
        . . . . . f 5 f 5 5 f . . . . . 
        . . . . . f 5 f 5 f f . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    true
    )
    af = sprites.create(img`
        . . . . f f f f . . . . . . . . 
        . . f f 5 5 5 5 f f . . . . . . 
        . . f 5 5 5 5 5 5 f . . . . . . 
        . f 5 5 5 4 4 5 5 5 f . . . . . 
        . f 5 5 5 4 4 5 5 5 f . . . . . 
        . f 5 5 5 4 4 5 5 5 f . . . . . 
        . f 5 5 5 4 4 5 5 5 f . . . . . 
        . . f 5 5 5 5 5 5 f . . . . . . 
        . . f f 5 5 5 5 f f . . . . . . 
        . . . . f f f f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.afd)
    af.setPosition(290, 200)
    animation.runImageAnimation(
    af,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f 5 5 5 5 f f . . . . 
        . . . . f 5 5 5 5 5 5 f . . . . 
        . . . f 5 5 5 4 4 5 5 5 f . . . 
        . . . f 5 5 5 4 4 5 5 5 f . . . 
        . . . f 5 5 5 4 4 5 5 5 f . . . 
        . . . f 5 5 5 4 4 5 5 5 f . . . 
        . . . . f 5 5 5 5 5 5 f . . . . 
        . . . . f f 5 5 5 5 f f . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f f 5 f 5 5 5 f . . . . 
        . . . . f 5 f 5 5 5 5 5 f . . . 
        . . . f 5 f 5 5 5 4 5 5 f . . . 
        . . . f 5 f 5 5 5 4 4 5 5 f . . 
        . . . f 5 f 5 5 5 4 4 5 5 f . . 
        . . . f 5 f 5 5 5 4 5 5 f . . . 
        . . . . f 5 f 5 5 5 5 5 f . . . 
        . . . . f f 5 f 5 5 5 f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . f f 5 f 5 f f . . . . 
        . . . . f f 5 f 5 5 5 f . . . . 
        . . . . f 5 f 5 5 5 5 f f . . . 
        . . . . f 5 f 5 5 4 5 5 f . . . 
        . . . . f 5 f 5 5 4 5 5 f . . . 
        . . . . f 5 f 5 5 5 5 f f . . . 
        . . . . f f 5 f 5 5 5 f . . . . 
        . . . . . f f 5 f 5 f f . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f 5 f 5 f f . . . . . 
        . . . . . f 5 f 5 5 f . . . . . 
        . . . . . f 5 f 5 5 f . . . . . 
        . . . . . f 5 f 5 5 f . . . . . 
        . . . . . f 5 f 5 5 f . . . . . 
        . . . . . f 5 f 5 f f . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    true
    )
    ag = sprites.create(img`
        . . . . f f f f . . . . . . . . 
        . . f f 5 5 5 5 f f . . . . . . 
        . . f 5 5 5 5 5 5 f . . . . . . 
        . f 5 5 5 4 4 5 5 5 f . . . . . 
        . f 5 5 5 4 4 5 5 5 f . . . . . 
        . f 5 5 5 4 4 5 5 5 f . . . . . 
        . f 5 5 5 4 4 5 5 5 f . . . . . 
        . . f 5 5 5 5 5 5 f . . . . . . 
        . . f f 5 5 5 5 f f . . . . . . 
        . . . . f f f f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.fad)
    ag.setPosition(306, 200)
    animation.runImageAnimation(
    ag,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f 5 5 5 5 f f . . . . 
        . . . . f 5 5 5 5 5 5 f . . . . 
        . . . f 5 5 5 4 4 5 5 5 f . . . 
        . . . f 5 5 5 4 4 5 5 5 f . . . 
        . . . f 5 5 5 4 4 5 5 5 f . . . 
        . . . f 5 5 5 4 4 5 5 5 f . . . 
        . . . . f 5 5 5 5 5 5 f . . . . 
        . . . . f f 5 5 5 5 f f . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f f 5 f 5 5 5 f . . . . 
        . . . . f 5 f 5 5 5 5 5 f . . . 
        . . . f 5 f 5 5 5 4 5 5 f . . . 
        . . . f 5 f 5 5 5 4 4 5 5 f . . 
        . . . f 5 f 5 5 5 4 4 5 5 f . . 
        . . . f 5 f 5 5 5 4 5 5 f . . . 
        . . . . f 5 f 5 5 5 5 5 f . . . 
        . . . . f f 5 f 5 5 5 f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . f f 5 f 5 f f . . . . 
        . . . . f f 5 f 5 5 5 f . . . . 
        . . . . f 5 f 5 5 5 5 f f . . . 
        . . . . f 5 f 5 5 4 5 5 f . . . 
        . . . . f 5 f 5 5 4 5 5 f . . . 
        . . . . f 5 f 5 5 5 5 f f . . . 
        . . . . f f 5 f 5 5 5 f . . . . 
        . . . . . f f 5 f 5 f f . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f 5 f 5 f f . . . . . 
        . . . . . f 5 f 5 5 f . . . . . 
        . . . . . f 5 f 5 5 f . . . . . 
        . . . . . f 5 f 5 5 f . . . . . 
        . . . . . f 5 f 5 5 f . . . . . 
        . . . . . f 5 f 5 f f . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    true
    )
    sprites.destroy(Coin21)
    sprites.destroy(Coin2)
    sprites.destroy(Coin3)
    sprites.destroy(Coin4)
    sprites.destroy(Coin5)
    sprites.destroy(Coin6)
    sprites.destroy(Coin7)
    sprites.destroy(Coin8)
    sprites.destroy(Coin9)
    sprites.destroy(Coin10)
    sprites.destroy(Coin11)
    sprites.destroy(coin12)
    sprites.destroy(Coin13)
    sprites.destroy(Coin14)
    sprites.destroy(Coin15)
    sprites.destroy(Coin16)
    sprites.destroy(Coin17)
    sprites.destroy(COin18)
    sprites.destroy(Coin19)
    sprites.destroy(COin20)
    sprites.destroy(Coin26)
    sprites.destroy(Coin22)
    sprites.destroy(Coin23)
    sprites.destroy(Coin24)
    sprites.destroy(Coin25)
    sprites.destroy(TWEE2)
    sprites.destroy(TWU)
    sprites.destroy(OBSTACLE)
    sprites.destroyAllSpritesOfKind(SpriteKind.VOID)
    sprites.destroy(Check_point)
    sprites.destroy(Coin2)
    sprites.destroy(Coin27)
    sprites.destroy(cOIN28)
    sprites.destroy(C1)
    sprites.destroy(C2)
    sprites.destroy(C3)
    sprites.destroy(C4)
    sprites.destroy(Coin)
    sprites.destroy(shrukin)
    sprites.destroy(POO)
    fdja.setPosition(833, 236)
    feaw.setPosition(823, 236)
    qre.setPosition(803, 236)
    BLACK = sprites.create(img`
        ..............................................................................................................................................................................................................................................................................................................................................................
        ..............................................................................................................................................................................................................................................................................................................................................................
        ..............................................................................................................................................................................................................................................................................................................................................................
        ..............................................................................................................................................................................................................................................................................................................................................................
        ..............................................................................................................................................................................................................................................................................................................................................................
        ..............................................................................................................................................................................................................................................................................................................................................................
        ..............................................................................................................................................................................................................................................................................................................................................................
        ..............................................................................................................................................................................................................................................................................................................................................................
        ..............................................................................................................................................................................................................................................................................................................................................................
        ..............................................................................................................................................................................................................................................................................................................................................................
        ..............................................................................................................................................................................................................................................................................................................................................................
        ..............................................................................................................................................................................................................................................................................................................................................................
        ..............................................................................................................................................................................................................................................................................................................................................................
        ..............................................................................................................................................................................................................................................................................................................................................................
        ..............................................................................................................................................................................................................................................................................................................................................................
        ..............................................................................................................................................................................................................................................................................................................................................................
        ..............................................................................................................................................................................................................................................................................................................................................................
        ..............................................................................................................................................................................................................................................................................................................................................................
        ..............................................................................................................................................................................................................................................................................................................................................................
        ..............................................................................................................................................................................................................................................................................................................................................................
        ..............................................................................................................................................................................................................................................................................................................................................................
        ..............................................................................................................................................................................................................................................................................................................................................................
        ..............................................................................................................................................................................................................................................................................................................................................................
        ..............................................................................................................................................................................................................................................................................................................................................................
        ..............................................................................................................................................................................................................................................................................................................................................................
        ..............................................................................................................................................................................................................................................................................................................................................................
        ..............................................................................................................................................................................................................................................................................................................................................................
        ..............................................................................................................................................................................................................................................................................................................................................................
        ..............................................................................................................................................................................................................................................................................................................................................................
        ..............................................................................................................................................................................................................................................................................................................................................................
        ..............................................................................................................................................................................................................................................................................................................................................................
        ..............................................................................................................................................................................................................................................................................................................................................................
        ..............................................................................................................................................................................................................................................................................................................................................................
        ..............................................................................................................................................................................................................................................................................................................................................................
        ..............................................................................................................................................................................................................................................................................................................................................................
        ..............................................................................................................................................................................................................................................................................................................................................................
        ..............................................................................................................................................................................................................................................................................................................................................................
        ..............................................................................................................................................................................................................................................................................................................................................................
        ..............................................................................................................................................................................................................................................................................................................................................................
        ..............................................................................................................................................................................................................................................................................................................................................................
        ..............................................................................................................................................................................................................................................................................................................................................................
        ..............................................................................................................................................................................................................................................................................................................................................................
        ..............................................................................................................................................................................................................................................................................................................................................................
        ..............................................................................................................................................................................................................................................................................................................................................................
        ..............................................................................................................................................................................................................................................................................................................................................................
        ..............................................................................................................................................................................................................................................................................................................................................................
        ............999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999........
        ............999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999........
        ............999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999........
        ..............................................................................................................................................................................................................................................................................................................................................................
        ..............................................................................................................................................................................................................................................................................................................................................................
        ..............................................................................................................................................................................................................................................................................................................................................................
        ..............................................................................................................................................................................................................................................................................................................................................................
        ..............................................................................................................................................................................................................................................................................................................................................................
        ..............................................................................................................................................................................................................................................................................................................................................................
        ..............................................................................................................................................................................................................................................................................................................................................................
        ..............................................................................................................................................................................................................................................................................................................................................................
        ..............................................................................................................................................................................................................................................................................................................................................................
        ..............................................................................................................................................................................................................................................................................................................................................................
        ..............................................................................................................................................................................................................................................................................................................................................................
        ..............................................................................................................................................................................................................................................................................................................................................................
        ..............................................................................................................................................................................................................................................................................................................................................................
        ..............................................................................................................................................................................................................................................................................................................................................................
        ..............................................................................................................................................................................................................................................................................................................................................................
        ..............................................................................................................................................................................................................................................................................................................................................................
        ..............................................................................................................................................................................................................................................................................................................................................................
        ..............................................................................................................................................................................................................................................................................................................................................................
        ..............................................................................................................................................................................................................................................................................................................................................................
        ..............................................................................................................................................................................................................................................................................................................................................................
        ..............................................................................................................................................................................................................................................................................................................................................................
        `, SpriteKind.VOID)
    BLACK.setPosition(870, 310)
    OBSTACLE = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 2 . . . . . 
        . . . . . . . . . 2 2 2 . . . . 
        . . . . . . . . 2 2 2 2 2 . . . 
        . . . . . . . 2 2 2 1 2 2 . . . 
        . . . . . . . 2 2 1 2 2 2 . . . 
        . . . . . . 2 2 2 2 2 2 2 2 . . 
        . . . . . 2 2 2 2 2 2 2 2 2 2 2 
        `, SpriteKind.SPIKE)
    OBSTACLE.setPosition(204, 296)
    OBSTACLE = sprites.create(img`
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 2 . . . . . . 
        . . . . . . . . . 2 2 2 . . . . . 
        . . . . . . . . 2 2 2 2 2 . . . . 
        . . . . . . . 2 2 2 1 2 2 . . . . 
        . . . . . . . 2 2 1 2 2 2 . . . . 
        . . . . . . 2 2 2 2 2 2 2 2 . . . 
        . . . . . 2 2 2 2 2 2 2 2 2 2 2 . 
        . . . . . . . . . . . . . 2 . 2 . 
        `, SpriteKind.SPIKE)
    OBSTACLE.setPosition(144, 296)
    OBSTACLE = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 2 . . . . . 
        . . . . . . . . . 2 2 2 . . . . 
        . . . . . . . . 2 2 2 2 2 . . . 
        . . . . . . . 2 2 2 1 2 2 . . . 
        . . . . . . . 2 2 1 2 2 2 . . . 
        . . . . . . 2 2 2 2 2 2 2 2 . . 
        . . . . . 2 2 2 2 2 2 2 2 2 2 2 
        `, SpriteKind.SPIKE)
    OBSTACLE.setPosition(104, 296)
    JABA_JABA = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f 2 a a 2 f f . . . . 
        . . . . . f 2 a 2 2 2 2 f . . . 
        . . . . . f a 2 2 2 2 2 2 f . . 
        . . . . . f 2 2 2 2 2 2 f . . . 
        . . . . . f f f 2 2 f f . . . . 
        . . . . . f b d f f . . . . . . 
        . . . . . f b d f . . . . . . . 
        . . . . . f b d f . . . . . . . 
        . . . . . f d d f . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f f f f f f f f . . . . . 
        . . f f f f f f f f f f . . . . 
        `, SpriteKind.j2)
    JABA_JABA.setPosition(1100, 296)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.VOID, function (sprite, otherSprite) {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.j2, function (sprite5, otherSprite5) {
    tiles.setCurrentTilemap(tilemap`level8`)
    sprites.destroyAllSpritesOfKind(SpriteKind.SPIKE)
    sprites.destroyAllSpritesOfKind(SpriteKind.VOID)
    sprites.destroyAllSpritesOfKind(SpriteKind.j2)
    mySprite.setPosition(50, 123)
    BLACK = sprites.create(img`
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        f.........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..............................................................................................................................................................................................................................................................................................................................................................................................f...........................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        ..........................................................................................................................................................................................................................................................................................................................................................................................................................
        `, SpriteKind.VOID)
    BLACK.setPosition(357, 465)
    BLACK = sprites.create(img`
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        f.................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..............................................................................................................................................................................................................................................................................................................................................................................................f...................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        `, SpriteKind.VOID)
    BLACK.setPosition(900, 465)
    j3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f 2 a a 2 f f . . . . 
        . . . . . f 2 a 2 2 2 2 f . . . 
        . . . . . f a 2 2 2 2 2 2 f . . 
        . . . . . f 2 2 2 2 2 2 f . . . 
        . . . . . f f f 2 2 f f . . . . 
        . . . . . f b d f f . . . . . . 
        . . . . . f b d f . . . . . . . 
        . . . . . f b d f . . . . . . . 
        . . . . . f d d f . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f f f f f f f f . . . . . 
        . . f f f f f f f f f f . . . . 
        `, SpriteKind.CP)
    j3.setPosition(12, 43)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.YEllow25, function (sprite, otherSprite) {
    sprites.destroy(Coin24, effects.fire, 1000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.CHUBBYWRINKLE, function (sprite, otherSprite) {
    sprites.destroy(POO, effects.fire, 1000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Yellow12, function (sprite, otherSprite) {
    sprites.destroy(Coin11, effects.fire, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.afd, function (sprite, otherSprite) {
    sprites.destroy(af, effects.fire, 100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Yellow5, function (sprite8, otherSprite8) {
    sprites.destroy(Coin5, effects.fire, )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Yellow23, function (sprite, otherSprite) {
    sprites.destroy(Coin22, effects.fire, 1000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Yellow27, function (sprite, otherSprite) {
    sprites.destroy(cOIN28, effects.fire, 1000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Yellow24, function (sprite, otherSprite) {
    sprites.destroy(Coin23, effects.fire, 1000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Yellow10, function (sprite, otherSprite) {
    sprites.destroy(Coin9, effects.fire, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.YEllow11, function (sprite, otherSprite) {
    sprites.destroy(Coin10, effects.fire, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.YEllow19, function (sprite, otherSprite) {
    sprites.destroy(COin18, effects.fire, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Yellow18, function (sprite, otherSprite) {
    sprites.destroy(Coin17, effects.fire, 500)
})
sprites.onOverlap(SpriteKind.Flag3, SpriteKind.Player, function (sprite, otherSprite) {
    tiles.setCurrentTilemap(tilemap`level17`)
    mySprite.setPosition(50, 276)
    TEMPLE = sprites.create(img`
        ....................8a8aa8a8....................
        .................aaa888aa8a8aaa.................
        ..............aaa8aa8a8aa888aa8aaa..............
        ...........8aa8aa8888a8aa8a8888aa8aa8...........
        ........8888aa8aa8aa8a8aa8a8aa8aa8aa8888........
        .....aaa8aa8aa8888aa8a8aa8a8aa8888aa8aa8aaa.....
        ...aa8888aa8aa8aa8aa888aa888aa8aa8aa8aa8888aa...
        dccaa8aa8aa8888aa8aa8a8aa8a8aa8aa8888aa8aa8aaccd
        bcb888aa8aa8aa8aa8aa8a8aa8a8aa8aa8aa8aa8aa888bcb
        dbbaa8aa8888aa8aa8888a8aa8a8888aa8aa8888aa8aabbd
        dbbaa8aa8aa8aa8888aa8a8aa8a8aa8888aa8aa8aa8aabbd
        dccaa8888aa8aa8aa8aa888aa888aa8aa8aa8aa8888aaccd
        bcbaa8aa8aa8888aa8aa8a8aa8a8aa8aa8888aa8aa8aabcb
        dbb888aa8aa8aa8aa8aa8a8aa8a8aa8aa8aa8aa8aa888bbd
        dbbaa8aa8888aa8aa8aa8a8aa8a8aa8aa8aa8888aa8aabbd
        dccaa8aa8aa8aa8aa8888a8aa8a8888aa8aa8aa8aa8aaccd
        bcbaa8888aa8aa8888aa888aa888aa8888aa8aa8888aabcb
        dbbaa8aa8aa8888aa8aa8a8aa8a8aa8aa8888aa8aa8aabbd
        dbb888aa8aa8aa8aa8aa8a8aa8a8aa8aa8aa8aa8aa888bbd
        dccaa8aa8888aa8aa8aa8a8aa8a8aa8aa8aa8888aa8aaccd
        bcbaa8aa8aa8aa8aa8aa888aa888aa8aa8aa8aa8aa8aabcb
        dbbaa8888aa8aa8aa888ccbbbbcc888aa8aa8aa8888aabbd
        dbbaa8aa8aa8aa888ccbbbbbbbbbbcc888aa8aa8aa8aabbd
        dcc888aa8aa888ccbbbbbccccccbbbbbcc888aa8aa888ccd
        bcbaa8aa888ccbbbbbccbddddddbccbbbbbcc888aa8aabcb
        dbbaa8aaccbbbbbccbddddddddddddbccbbbbbccaa8aabbd
        dbbaaccbbbbcccbddddddddddddddddddbcccbbbbccaabbd
        dcccbbbbcccbdddbccbbbbbbbbbbbbccbdddbcccbbbbcccd
        ccccccccbbbbbbbcbddddddddddddddbcbbbbbbbcccccccc
        bddddddddddddbcddddddddddddddddddcbddddddddddddb
        bbcbdddddddddcbd1111111111111111dbcdddddddddbcbb
        bbbcccccccccccd1bbbbbbbbbbbbbbbb1dcccccccccccbbb
        bbbbdddddddddc11beeeeeeeeeeeeeeb11cdddddddddbbbb
        bbb8aaaaaaa8dc1be6f66f66f66f66feb1cd8aaaaaaa8bbb
        bbb888888888dc1be6f66f66f66f66feb1cd888888888bbb
        bbb866666668dcbbf6f6effffffe66febbcd866666668bbb
        bbb86ff6ff68dcbbf6fffffffffff6febbcd86ff6ff68bbb
        bbb86cc6cc68dcbbf6effffffffffefebbcd86cc6cc68bbb
        bbb866666668dcbbf6eeeeeeeeeeeefebbcd866666668bbb
        cbb86ff6ff68dcbbe6f66f66f66f66febbcd86ff6ff68bbc
        cbb86cc6cc68dcbbe6f66f66f66f66febbcd86cc6cc68bbc
        ccb8aaaaaaa8dcbbe6f66f66f66feeeebbcd8aaaaaaa8bcc
        .cbbdddddddddcbbe6f66f66f66ffffebbcdddddddddbbc.
        ..cbdbbbdbbbdcbbf6f66f66f66f66febbcdbbbdbbbdbc..
        ...cdbbbdbbbdcbbf6f66f66f66fffeebbcdbbbdbbbdc...
        ....bddddddddcbbf6f66f66f66f66febbcddddddddb....
        .....bdbbbdddcbbf6f66f66f66f66febbcdddbbbdb.....
        ......bcccbbbcbbe6f66f66f66f66febbcbbbcccb......
        `, SpriteKind.Blue)
    TEMPLE.setPosition(550, 125)
})
let j3: Sprite = null
let JABA_JABA: Sprite = null
let cOIN28: Sprite = null
let ag: Sprite = null
let af: Sprite = null
let c12: Sprite = null
let Checkpoint3: Sprite = null
let f: Sprite = null
let ninga: Sprite = null
let TEMPLE: Sprite = null
let a: Sprite = null
let C5: Sprite = null
let fa: Sprite = null
let c: Sprite = null
let JA: Sprite = null
let C4: Sprite = null
let C3: Sprite = null
let C2: Sprite = null
let C1: Sprite = null
let Coin27: Sprite = null
let POO: Sprite = null
let Coin25: Sprite = null
let Coin24: Sprite = null
let Coin23: Sprite = null
let Coin22: Sprite = null
let Coin21: Sprite = null
let COin20: Sprite = null
let Coin19: Sprite = null
let COin18: Sprite = null
let Coin17: Sprite = null
let Coin16: Sprite = null
let Coin15: Sprite = null
let Coin14: Sprite = null
let Coin13: Sprite = null
let coin12: Sprite = null
let Coin11: Sprite = null
let Coin10: Sprite = null
let Coin9: Sprite = null
let Coin8: Sprite = null
let shrukin: Sprite = null
let Coin7: Sprite = null
let Coin6: Sprite = null
let Coin5: Sprite = null
let Coin4: Sprite = null
let Coin3: Sprite = null
let Coin2: Sprite = null
let Coin: Sprite = null
let Check_point: Sprite = null
let BLACK: Sprite = null
let OBSTACLE: Sprite = null
let fdja: Sprite = null
let feaw: Sprite = null
let qre: Sprite = null
let TREE: Sprite = null
let TWU: Sprite = null
let TWEE2: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(5, 296)
mySprite.ay = 400
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999955555555555999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999955555555555555555999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999555555555555555555599999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995555555555555555555559999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999555555555555555555555555599999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999555555555555555555555555599999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995555555555555555555555555559999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999955555555555555555555555555555999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999555555555555555555555555555555599999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999555555555555555555555555555555599999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999555555555555555555555555555555599999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995555555555555555555555555555555559999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995555555555555555555555555555555559999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995555555555555555555555555555555559999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995555555555555555555555555555555559999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995555555555555555555555555555555559999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995555555555555555555555555555555559999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995555555555555555555555555555555559999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995555555555555555555555555555555559999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995555555555555555555555555555555559999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995555555555555555555555555555555559999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995555555555555555555555555555555559999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999555555555555555555555555555555599999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999555555555555555555555555555555599999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999555555555555555555555555555555599999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999955555555555555555555555555555999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995555555555555555555555555559999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999555555555555555555555555599999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999555555555555555555555555599999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995555555555555555555559999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999555555555555555555599999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999955555555555555555999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999955555555555999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999199999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    `)
game.setGameOverMessage(false, "\"You died\"")
effects.clouds.startScreenEffect()
tiles.setCurrentTilemap(tilemap`level2`)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite, 100, 0)
mySprite.setPosition(5, 296)
let TWEE = sprites.create(img`
    .....445...4455....54...eeee.22.
    ...444455545e.445..455..e.2e52..
    ..45.474444.5e5.522222ee.225e222
    ..4..44444444464222264e27626.2ee
    .55.7554556564472.4424e27c2266e.
    e4d5.5e45.5555422.44..e2222ee2e.
    .4.5555455544452226464226622.ee2
    ..5.5655455.55442444622222266eee
    ..544564c4..44242262622262d22226
    ...45..455444422422225222d2c672e
    ..44554545554554422445222222222e
    7445444.44.e46442422462222256ee6
    .45544e4ee.64446246446226266e2e7
    .4544.d44d2222222264e62226262...
    ..5544.44.42244ee2ee262266e222ee
    .54.444.24.242dd224c422ee26ee2ee
    .54554.2244224dd24424222e26ee22e
    ..4455.4444224.dd6464eeeeeee22e2
    ....44444224424446e6ee2.eee22ee6
    ......74..224.5544e46e.eee.e2ee.
    ......57..2224222eeeeee..e6eee..
    ......7....2222.2e2eee.ee.......
    ............22222e6eee..........
    ................deeec...........
    ................deeec...........
    ...............edeece...........
    ...............eeeece...........
    ..............ddeeecce..........
    ............ddddeeeccc..........
    .........eeeddee.ececccec.......
    .......eeee.4ee..ece.cccec......
    ....eee....e......e...eee.ccee..
    `, SpriteKind.T1)
TWEE.setPosition(124, 288)
TWEE2 = sprites.create(img`
    .....79....797....97..7.....77..
    ..9.99999.977779..799.7..7797...
    ..93377.969747.766777766779e777.
    ...1379.73377317677636776763377.
    99.797.73176777777731767c77137..
    7e9494777733769967776766677677.7
    ..73397773777966667676966777677.
    .9.3197977779917777667677766766.
    .7777674376767377676677673776767
    ..733.77777977777713973313767c67
    ..379799777799777737973777731777
    799997799.7967777777677777996.66
    .997777ee7633367767767767667677.
    .931377777731767767e67776767....
    .9337377.779777776776776676777.6
    9..777777.77777773776367767766..
    9.997...77737777316731767667.66.
    ..999.7737.77.796367cc667631676.
    ...7...71377.777676697317773776.
    .....77....7.9977e7669.7...666..
    .....97....7799666767..7.6......
    .....7..........4eeee.6.........
    ................46ee6...........
    ................4eeec...........
    ................4eeec...........
    ...............e4eece...........
    ...............eeeece...........
    ..............44eeecce..........
    ............444eeeeccc..........
    .........eee44ee.ececccec.......
    .......eeee.4ee..ece.cccec......
    ....eee....e......e...eee.ccee..
    `, SpriteKind.T2)
TWEE2.setPosition(300, 258)
TWU = sprites.create(img`
    ................86..................
    ...........6688867886...............
    ...........8666877688868............
    ............868777767768............
    .........688667777776688............
    ........67767777777778666...........
    .........6776667767666868...........
    ..........866667667677688...........
    .........8666666666667778...........
    ........667766666666666676..........
    .......67766667666776667776.........
    ......886667776676777666688.........
    .....67766777667767777666768........
    ....6776666666777667776666776.......
    .....8667776667766676677776776......
    ......8777666666667776777776688.....
    ....6887766776677677777777776776....
    ..8866666677767777777777766666778...
    .86666666777667767777766666776668...
    ..88677666666777677677666667776668..
    ..86776677666666666666667776666668..
    886666677766667666666776677766668...
    6668666676667766767767766677666668..
    88866666666777677677667666666776668.
    .86668866666766776776666667766666668
    .86688666666666776666667667776666688
    .668866666666666666666677666666688..
    ..8866686666666666677667776666668...
    ...866886666666666677667776666668...
    ...86886668666666667666666666888....
    ....88866886686666666666666668......
    ......86886668666866668666868.......
    ......88866688668866688866888.......
    ........8888888688888ce868..........
    ..............e88e88.ec.8...........
    ...............eeee..e..............
    ...............ceef.ce..............
    ...............ceefcec..............
    ...............feefce...............
    ...............fceeec...............
    ...............ffceec...............
    `, SpriteKind.T3)
TWU.setPosition(550, 252)
TREE = sprites.create(img`
    ................86..................
    ...........6688867886...............
    ...........8666877688868............
    ............868777767768............
    .........688667777776688............
    ........67767777777778666...........
    .........6776667767666868...........
    ..........866667667677688...........
    .........8666666666667778...........
    ........667766666666666676..........
    .......67766667666776667776.........
    ......886667776676777666688.........
    .....67766777667767777666768........
    ....6776666666777667776666776.......
    .....8667776667766676677776776......
    ......8777666666667776777776688.....
    ....6887766776677677777777776776....
    ..8866666677767777777777766666778...
    .86666666777667767777766666776668...
    ..88677666666777677677666667776668..
    ..86776677666666666666667776666668..
    886666677766667666666776677766668...
    6668666676667766767767766677666668..
    88866666666777677677667666666776668.
    .86668866666766776776666667766666668
    .86688666666666776666667667776666688
    .668866666666666666666677666666688..
    ..8866686666666666677667776666668...
    ...866886666666666677667776666668...
    ...86886668666666667666666666888....
    ....88866886686666666666666668......
    ......86886668666866668666868.......
    ......88866688668866688866888.......
    ........8888888688888ce868..........
    ..............e88e88.ec.8...........
    ...............eeee..e..............
    ...............ceef.ce..............
    ...............ceefcec..............
    ...............feefce...............
    ...............fceeec...............
    ...............ffceec...............
    `, SpriteKind.RED)
TREE.setPosition(500, 252)
TREE = sprites.create(img`
    ................86..................
    ...........6688867886...............
    ...........8666877688868............
    ............868777767768............
    .........688667777776688............
    ........67767777777778666...........
    .........6776667767666868...........
    ..........866667667677688...........
    .........8666666666667778...........
    ........667766666666666676..........
    .......67766667666776667776.........
    ......886667776676777666688.........
    .....67766777667767777666768........
    ....6776666666777667776666776.......
    .....8667776667766676677776776......
    ......8777666666667776777776688.....
    ....6887766776677677777777776776....
    ..8866666677767777777777766666778...
    .86666666777667767777766666776668...
    ..88677666666777677677666667776668..
    ..86776677666666666666667776666668..
    886666677766667666666776677766668...
    6668666676667766767767766677666668..
    88866666666777677677667666666776668.
    .86668866666766776776666667766666668
    .86688666666666776666667667776666688
    .668866666666666666666677666666688..
    ..8866686666666666677667776666668...
    ...866886666666666677667776666668...
    ...86886668666666667666666666888....
    ....88866886686666666666666668......
    ......86886668666866668666868.......
    ......88866688668866688866888.......
    ........8888888688888ce868..........
    ..............e88e88.ec.8...........
    ...............eeee..e..............
    ...............ceef.ce..............
    ...............ceefcec..............
    ...............feefce...............
    ...............fceeec...............
    ...............ffceec...............
    `, SpriteKind.RED)
TREE.setPosition(525, 286)
TREE = sprites.create(img`
    ................86..................
    ...........6688867886...............
    ...........8666877688868............
    ............868777767768............
    .........688667777776688............
    ........67767777777778666...........
    .........6776667767666868...........
    ..........866667667677688...........
    .........8666666666667778...........
    ........667766666666666676..........
    .......67766667666776667776.........
    ......886667776676777666688.........
    .....67766777667767777666768........
    ....6776666666777667776666776.......
    .....8667776667766676677776776......
    ......8777666666667776777776688.....
    ....6887766776677677777777776776....
    ..8866666677767777777777766666778...
    .86666666777667767777766666776668...
    ..88677666666777677677666667776668..
    ..86776677666666666666667776666668..
    886666677766667666666776677766668...
    6668666676667766767767766677666668..
    88866666666777677677667666666776668.
    .86668866666766776776666667766666668
    .86688666666666776666667667776666688
    .668866666666666666666677666666688..
    ..8866686666666666677667776666668...
    ...866886666666666677667776666668...
    ...86886668666666667666666666888....
    ....88866886686666666666666668......
    ......86886668666866668666868.......
    ......88866688668866688866888.......
    ........8888888688888ce868..........
    ..............e88e88.ec.8...........
    ...............eeee..e..............
    ...............ceef.ce..............
    ...............ceefcec..............
    ...............feefce...............
    ...............fceeec...............
    ...............ffceec...............
    `, SpriteKind.RED)
TREE.setPosition(600, 286)
TREE = sprites.create(img`
    ........................
    ...........66...........
    ..........6776..........
    ..........6776..........
    .........877778.........
    ........86777768........
    .......6777777776.......
    ......677677776776......
    ......866777777668......
    .....86677677677668.....
    ....8668866766888668....
    ....8888668886686888....
    .....86868868868668.....
    ....866888668888868.....
    ....8688886888888888....
    ....8886688888866888....
    ....8676888868886768....
    ...87778868678688776....
    ..8777767767787767778...
    .877767777777677776778..
    .8866777777777777776778.
    .8667776776767776777688.
    ..887766768668776667668.
    ..8688668886688686688668
    .86688688686866888688888
    8668868866888866888868..
    88886686688888868688668.
    .8688888888888888668868.
    .8878888868868878868788.
    .87768776788778777667788
    877677767787776767776778
    88877787766777777877788.
    ..88886786777667768888..
    .....86887786668868.....
    ......8886888668888.....
    .........88ee88.........
    .........feeeef.........
    .........feeeef.........
    ........feeefeef........
    ........fefeffef........
    `, SpriteKind.RED)
TREE.setPosition(650, 286)
TREE = sprites.create(img`
    ........................
    ...........88...........
    ..........8668..........
    ..........8668..........
    .........f6666f.........
    ........f866668f........
    .......8666666668.......
    ......866866668668......
    ......f8866666688f......
    .....f886686686688f.....
    ....f88ff88688fff88f....
    ....ffff88fff88f8fff....
    .....f8f8ff8ff8f88f.....
    ....f88fff88fffff8f.....
    ....f8ffff8fffffffff....
    ....fff88ffffff88fff....
    ....f868ffff8fff868f....
    ...f666ff8f86f8ff668....
    ..f6666866866f6686668...
    .f66686666666866668668..
    .ff8866666666666666866f.
    .f8866686686866686668ff.
    ..ff668868f88f66888688f.
    ..f8ff88fff88ff8f88ff88f
    .f88ff8ff8f8f88fff8fffff
    f88ff8ff88ffff88ffff8f..
    ffff88f88ffffff8f8ff88f.
    .f8ffffffffffffff88ff8f.
    .ff6fffff8ff8ff6ff8f6ff.
    .f668f6686ff66f6668866ff
    f668666866f666868666866f
    fff666f6688666666f666ff.
    ..ffff86f866688668ffff..
    .....f8ff66f888ff8f.....
    ......fff8fff88ffff.....
    .........ffeeff.........
    .........feeeef.........
    .........feeeef.........
    ........feeefeef........
    ........fefeffef........
    `, SpriteKind.RED)
TREE.setPosition(673, 286)
TREE = sprites.create(img`
    ........................
    ...........ff...........
    ..........f88f..........
    .........ff88ff.........
    .........f8888f.........
    ........f888888f........
    ......ff88888888ff......
    .....f888888888888f.....
    .....ff8888888888ff.....
    .....f888888888888f.....
    ....f88ff88888fff88f....
    ....ffff88fff88f8fff....
    .....f8f8ff8ff8f88f.....
    ....f88fff88fffff8f.....
    ....f8ffff8fffffffff....
    ....fff88ffffff88fff....
    ....f888ffff8fff888f....
    ...f888ff8f88f8ff888f...
    ..f8888888888f888888f...
    .f88f8888888888888888f..
    .fff8888888888888888f8f.
    .ff888888888888888888ff.
    ..ff88f888f88f8888f888f.
    ..f8ff88fff88ff8f88ff88f
    .f88ff8ff8f8f88fff8fffff
    f88ff8ff88ffff88ffff8f..
    ffff88f88ffffff8f8ff88f.
    .ffffffffffffffff88ff8f.
    .ff888ff88ff8ff8ff8f8ff.
    .f888ff888ff88f8888888ff
    f888888888f888888888888f
    fff888f8888888888f888ff.
    ..ffff88f888888888ffff..
    .....f8ff88f888ff8f.....
    ......fff8fff88ffff.....
    .........ffeeff.........
    .........feeeef.........
    .........feeeef.........
    ........feeefeef........
    ........fefeffef........
    `, SpriteKind.RED)
TREE.setPosition(693, 286)
qre = sprites.create(img`
    ........................
    ...........ff..........8
    ..........f88f........86
    .........ff88ff......886
    .........f8888f......866
    ........f888888f....8666
    ......ff88888888ff886666
    .....f888888888888666666
    .....ff88888888888866666
    .....f888888888888666666
    ....f88ff88888ff86688666
    ....ffff88fff88f88886688
    .....f8f8ff8ff8f88686886
    ....f88fff88ffff86688866
    ....f8ffff8fffff86888868
    ....fff88ffffff888866888
    ....f888ffff8fff86668888
    ...f888ff8f88f8866688686
    ..f8888888888f8666666666
    .f88f8888888886686666666
    .fff88888888888866666666
    .ff888888888888666666666
    ..ff88f888f88f8866866686
    ..f8ff88fff88f8688668886
    .f88ff8ff8f8f86688688686
    f88ff8ff88ff866886886688
    ffff88f88fff888866866888
    .ffffffffffff88888888888
    .ff888ff88ff888666886688
    .f888ff888ff886668866688
    f888888888f8866666666686
    fff888f88888888666866666
    ..ffff88f888888888668666
    .....f8ff88f888ff8688668
    ......fff8fff88fff888688
    .........ffeeff......88e
    .........feeeef......fee
    .........feeeef......fee
    ........feeefeef....feee
    ........fefeffef....fefe
    `, SpriteKind.RED)
qre.setPosition(813, 286)
feaw = sprites.create(img`
    ........................
    8..........ff..........8
    68........f88f........86
    688......ff88ff......886
    668......f8888f......866
    6668....f888888f....8666
    666688ff88888888ff886666
    666666888888888888666666
    666668888888888888866666
    666666888888888888666666
    66888668f88888ff86688666
    8668688888fff88f88886688
    8868668f8ff8ff8f88686886
    8888868fff88ffff86688866
    88888888ff8fffff86888868
    888668888ffffff888866888
    68886668ffff8fff86668888
    6868866688f88f8866688686
    6866666688888f8666666666
    666666666888886686666666
    666666668688888866666666
    666666666888888666666666
    6866668666888f8866866686
    6886866886688f8688668886
    866888688888f86688688686
    8866888868ff866886886688
    88868688668f888866866888
    88888668868ff88888888888
    68868868688f888666886688
    668666666688886668866688
    666666666668866666666686
    666668666888888666866666
    666666888888888888668666
    6668868ff88f888ff8688668
    8668888ff8fff88fff888688
    e88......ffeeff......88e
    eef......feeeef......fee
    eef......feeeef......fee
    feef....feeefeef....feee
    ffef....fefeffef....fefe
    `, SpriteKind.RED)
feaw.setPosition(823, 286)
fdja = sprites.create(img`
    ........................
    8..........ff...........
    68........f88f..........
    688......ff88ff.........
    668......f8888f.........
    6668....f888888f........
    666688ff88888888ff......
    666666888888888888f.....
    66666888888888888ff.....
    666666888888888888f.....
    66888668f88888fff88f....
    8668688888fff88f8fff....
    8868668f8ff8ff8f88f.....
    8888868fff88fffff8f.....
    88888888ff8fffffffff....
    888668888ffffff88fff....
    68886668ffff8fff888f....
    6868866688f88f8ff888f...
    6866666688888f888888f...
    666666666888888888888f..
    66666666868888888888f8f.
    666666666888888888888ff.
    6866668666888f8888f888f.
    6886866886688ff8f88ff88f
    866888688888f88fff8fffff
    8866888868ffff88ffff8f..
    88868688668ffff8f8ff88f.
    88888668868ffffff88ff8f.
    68868868688f8ff8ff8f8ff.
    66866666668888f8888888ff
    66666666666888888888888f
    66666866688888888f888ff.
    666666888888888888ffff..
    6668868ff88f888ff8f.....
    8668888ff8fff88ffff.....
    e88......ffeeff.........
    eef......feeeef.........
    eef......feeeef.........
    feef....feeefeef........
    ffef....fefeffef........
    `, SpriteKind.RED)
fdja.setPosition(833, 286)
let asfd = sprites.create(img`
    ........................
    ...........88..........f
    ..........8668........f8
    .........886688......ff8
    .........866668......f88
    ........86666668....f888
    ......886666666688ff8888
    .....8666666666666888888
    .....8866666666668888888
    .....8666666666666888888
    ....8668866666888668f888
    ....888866888668688888ff
    .....86868868868668f8ff8
    ....866888668888868fff88
    ....8688886888888888ff8f
    ....88866888888668888fff
    ....8666888868886668ffff
    ...8666886866868866688f8
    ..8666666666686666668888
    .86686666666666666666888
    .88866666666666666668688
    .88666666666666666666888
    ..8866866686686666866688
    ..8688668886688686688668
    .86688688686866888688888
    8668868866888866888868ff
    88886686688888868688668f
    .8888888888888888668868f
    .8866688668868868868688f
    .86668866688668666666688
    866666666686666666666668
    888666866666666668666888
    ..8888668666666666888888
    .....86886686668868ff88f
    ......8886888668888ff8ff
    .........88ee88......ffe
    .........feeeef......fee
    .........feeeef......fee
    ........feeefeef....feee
    ........fefeffef....fefe
    `, SpriteKind.RED)
asfd.setPosition(886, 236)
TREE = sprites.create(img`
    ........................
    f..........88...........
    8f........8668..........
    8ff......886688.........
    88f......866668.........
    888f....86666668........
    8888ff886666666688......
    8888886666666666668.....
    8888888666666666688.....
    8888886666666666668.....
    88ff8668866666888668....
    f88f8888668886686888....
    ff8f886868868868668.....
    ffff866888668888868.....
    ffff8688886888888888....
    fff88886688888866888....
    8fff8666888868886668....
    8f8866688686686886668...
    8f8666666666686666668...
    8866866666666666666668..
    88886666666666666666868.
    88866666666666666666688.
    8f886686668668666686668.
    8f8688668886688686688668
    f86688688686866888688888
    8668868866888866888868..
    88886686688888868688668.
    f8888888888888888668868.
    88866688668868868868688.
    886668866688668666666688
    866666666686666666666668
    88866686666666666866688.
    8888886686666666668888..
    888ff86886686668868.....
    f88fff8886888668888.....
    eff......88ee88.........
    eef......feeeef.........
    eef......feeeef.........
    feef....feeefeef........
    ffef....fefeffef........
    `, SpriteKind.RED)
TREE.setPosition(896, 236)
OBSTACLE = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . 2 . . . . . 
    . . . . . . . . . 2 2 2 . . . . 
    . . . . . . . . . 2 2 2 . . . . 
    . . . . . . . . 2 2 1 2 2 . . . 
    . . . . . . . 2 2 1 2 2 2 . . . 
    . . . . . . . 2 2 2 2 2 2 2 . . 
    . . . . . . 2 2 2 2 2 2 2 2 2 . 
    . . . . . 2 2 2 2 2 2 2 2 2 2 2 
    `, SpriteKind.SPIKE)
OBSTACLE.setPosition(144, 296)
OBSTACLE = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . 2 . . . . . 
    . . . . . . . . . 2 2 2 . . . . 
    . . . . . . . . . 2 2 2 . . . . 
    . . . . . . . . 2 2 1 2 2 . . . 
    . . . . . . . 2 2 1 2 2 2 . . . 
    . . . . . . . 2 2 2 2 2 2 2 . . 
    . . . . . . 2 2 2 2 2 2 2 2 2 . 
    . . . . . 2 2 2 2 2 2 2 2 2 2 2 
    `, SpriteKind.SPIKE)
OBSTACLE.setPosition(630, 296)
OBSTACLE = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ......2.........2.........2.....
    .....222.......222.......222....
    .....222.......222.......222....
    ....22122.....22122.....22122...
    ...221222....221222....221222...
    ...2222222...2222222...2222222..
    ..222222222.222222222.222222222.
    .2222222222222222222222222222222
    `, SpriteKind.SPIKE)
OBSTACLE.setPosition(1050, 288)
BLACK = sprites.create(img`
    ................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    `, SpriteKind.VOID)
BLACK.setPosition(312, 307)
BLACK = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    9 9 9 9 9 9 9 9 9 9 9 9 9 . . . 
    9 9 9 9 9 9 9 9 9 9 9 9 9 . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.VOID)
BLACK.setPosition(570, 319)
BLACK = sprites.create(img`
    ................................................
    ................................................
    ................................................
    ................................................
    ................................................
    ................................................
    ................................................
    999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999
    ................................................
    ................................................
    ................................................
    ................................................
    ................................................
    ................................................
    ................................................
    `, SpriteKind.VOID)
BLACK.setPosition(760, 319)
Check_point = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . f 2 a a 2 f f . . . . 
    . . . . . f 2 a 2 2 2 2 f . . . 
    . . . . . f a 2 2 2 2 2 2 f . . 
    . . . . . f 2 2 2 2 2 2 f . . . 
    . . . . . f f f 2 2 f f . . . . 
    . . . . . f b d f f . . . . . . 
    . . . . . f b d f . . . . . . . 
    . . . . . f b d f . . . . . . . 
    . . . . . f d d f . . . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . f f f f f f f f . . . . . 
    . . f f f f f f f f f f . . . . 
    `, SpriteKind.FLAG)
Check_point.setPosition(1100, 296)
Coin = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Yellow)
Coin.setPosition(164, 296)
animation.runImageAnimation(
Coin,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . f 5 f 5 5 5 5 5 f . . . 
    . . . f 5 f 5 5 5 4 5 5 f . . . 
    . . . f 5 f 5 5 5 4 4 5 5 f . . 
    . . . f 5 f 5 5 5 4 4 5 5 f . . 
    . . . f 5 f 5 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 5 5 5 f . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . f f 5 f 5 f f . . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . f 5 f 5 5 5 5 f f . . . 
    . . . . f 5 f 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 5 5 f f . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . . f f 5 f 5 f f . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f 5 f 5 f f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 f f . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
500,
true
)
Coin2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Yellow2)
Coin2.setPosition(247, 266)
animation.runImageAnimation(
Coin2,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . f 5 f 5 5 5 5 5 f . . . 
    . . . f 5 f 5 5 5 4 5 5 f . . . 
    . . . f 5 f 5 5 5 4 4 5 5 f . . 
    . . . f 5 f 5 5 5 4 4 5 5 f . . 
    . . . f 5 f 5 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 5 5 5 f . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . f f 5 f 5 f f . . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . f 5 f 5 5 5 5 f f . . . 
    . . . . f 5 f 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 5 5 f f . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . . f f 5 f 5 f f . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f 5 f 5 f f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 f f . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
500,
true
)
Coin3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Yellow3)
Coin3.setPosition(297, 261)
animation.runImageAnimation(
Coin3,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . f 5 f 5 5 5 5 5 f . . . 
    . . . f 5 f 5 5 5 4 5 5 f . . . 
    . . . f 5 f 5 5 5 4 4 5 5 f . . 
    . . . f 5 f 5 5 5 4 4 5 5 f . . 
    . . . f 5 f 5 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 5 5 5 f . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . f f 5 f 5 f f . . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . f 5 f 5 5 5 5 f f . . . 
    . . . . f 5 f 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 5 5 f f . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . . f f 5 f 5 f f . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f 5 f 5 f f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 f f . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
500,
true
)
Coin4 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Yellow4)
Coin4.setPosition(312, 261)
animation.runImageAnimation(
Coin4,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . f 5 f 5 5 5 5 5 f . . . 
    . . . f 5 f 5 5 5 4 5 5 f . . . 
    . . . f 5 f 5 5 5 4 4 5 5 f . . 
    . . . f 5 f 5 5 5 4 4 5 5 f . . 
    . . . f 5 f 5 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 5 5 5 f . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . f f 5 f 5 f f . . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . f 5 f 5 5 5 5 f f . . . 
    . . . . f 5 f 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 5 5 f f . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . . f f 5 f 5 f f . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f 5 f 5 f f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 f f . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
500,
true
)
Coin5 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Yellow5)
Coin5.setPosition(326, 261)
animation.runImageAnimation(
Coin5,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . f 5 f 5 5 5 5 5 f . . . 
    . . . f 5 f 5 5 5 4 5 5 f . . . 
    . . . f 5 f 5 5 5 4 4 5 5 f . . 
    . . . f 5 f 5 5 5 4 4 5 5 f . . 
    . . . f 5 f 5 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 5 5 5 f . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . f f 5 f 5 f f . . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . f 5 f 5 5 5 5 f f . . . 
    . . . . f 5 f 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 5 5 f f . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . . f f 5 f 5 f f . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f 5 f 5 f f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 f f . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
500,
true
)
Coin6 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Yellow6)
Coin6.setPosition(376, 276)
animation.runImageAnimation(
Coin6,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . f 5 f 5 5 5 5 5 f . . . 
    . . . f 5 f 5 5 5 4 5 5 f . . . 
    . . . f 5 f 5 5 5 4 4 5 5 f . . 
    . . . f 5 f 5 5 5 4 4 5 5 f . . 
    . . . f 5 f 5 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 5 5 5 f . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . f f 5 f 5 f f . . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . f 5 f 5 5 5 5 f f . . . 
    . . . . f 5 f 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 5 5 f f . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . . f f 5 f 5 f f . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f 5 f 5 f f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 f f . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
500,
true
)
Coin7 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Yellow7)
Coin7.setPosition(436, 296)
animation.runImageAnimation(
Coin7,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . f 5 f 5 5 5 5 5 f . . . 
    . . . f 5 f 5 5 5 4 5 5 f . . . 
    . . . f 5 f 5 5 5 4 4 5 5 f . . 
    . . . f 5 f 5 5 5 4 4 5 5 f . . 
    . . . f 5 f 5 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 5 5 5 f . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . f f 5 f 5 f f . . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . f 5 f 5 5 5 5 f f . . . 
    . . . . f 5 f 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 5 5 f f . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . . f f 5 f 5 f f . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f 5 f 5 f f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 f f . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
500,
true
)
shrukin = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Yellow8)
shrukin.setPosition(450, 296)
animation.runImageAnimation(
shrukin,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . f 5 f 5 5 5 5 5 f . . . 
    . . . f 5 f 5 5 5 4 5 5 f . . . 
    . . . f 5 f 5 5 5 4 4 5 5 f . . 
    . . . f 5 f 5 5 5 4 4 5 5 f . . 
    . . . f 5 f 5 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 5 5 5 f . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . f f 5 f 5 f f . . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . f 5 f 5 5 5 5 f f . . . 
    . . . . f 5 f 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 5 5 f f . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . . f f 5 f 5 f f . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f 5 f 5 f f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 f f . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
500,
true
)
Coin8 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Yellow9)
Coin8.setPosition(464, 296)
animation.runImageAnimation(
Coin8,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . f 5 f 5 5 5 5 5 f . . . 
    . . . f 5 f 5 5 5 4 5 5 f . . . 
    . . . f 5 f 5 5 5 4 4 5 5 f . . 
    . . . f 5 f 5 5 5 4 4 5 5 f . . 
    . . . f 5 f 5 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 5 5 5 f . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . f f 5 f 5 f f . . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . f 5 f 5 5 5 5 f f . . . 
    . . . . f 5 f 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 5 5 f f . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . . f f 5 f 5 f f . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f 5 f 5 f f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 f f . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
500,
true
)
Coin9 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Yellow10)
Coin9.setPosition(478, 296)
animation.runImageAnimation(
Coin9,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . f 5 f 5 5 5 5 5 f . . . 
    . . . f 5 f 5 5 5 4 5 5 f . . . 
    . . . f 5 f 5 5 5 4 4 5 5 f . . 
    . . . f 5 f 5 5 5 4 4 5 5 f . . 
    . . . f 5 f 5 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 5 5 5 f . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . f f 5 f 5 f f . . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . f 5 f 5 5 5 5 f f . . . 
    . . . . f 5 f 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 5 5 f f . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . . f f 5 f 5 f f . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f 5 f 5 f f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 f f . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
500,
true
)
Coin10 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.YEllow11)
Coin10.setPosition(492, 296)
animation.runImageAnimation(
Coin10,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . f 5 f 5 5 5 5 5 f . . . 
    . . . f 5 f 5 5 5 4 5 5 f . . . 
    . . . f 5 f 5 5 5 4 4 5 5 f . . 
    . . . f 5 f 5 5 5 4 4 5 5 f . . 
    . . . f 5 f 5 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 5 5 5 f . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . f f 5 f 5 f f . . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . f 5 f 5 5 5 5 f f . . . 
    . . . . f 5 f 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 5 5 f f . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . . f f 5 f 5 f f . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f 5 f 5 f f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 f f . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
500,
true
)
Coin11 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Yellow12)
Coin11.setPosition(506, 296)
animation.runImageAnimation(
Coin11,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . f 5 f 5 5 5 5 5 f . . . 
    . . . f 5 f 5 5 5 4 5 5 f . . . 
    . . . f 5 f 5 5 5 4 4 5 5 f . . 
    . . . f 5 f 5 5 5 4 4 5 5 f . . 
    . . . f 5 f 5 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 5 5 5 f . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . f f 5 f 5 f f . . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . f 5 f 5 5 5 5 f f . . . 
    . . . . f 5 f 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 5 5 f f . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . . f f 5 f 5 f f . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f 5 f 5 f f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 f f . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
500,
true
)
coin12 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Yellow13)
coin12.setPosition(520, 296)
animation.runImageAnimation(
coin12,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . f 5 f 5 5 5 5 5 f . . . 
    . . . f 5 f 5 5 5 4 5 5 f . . . 
    . . . f 5 f 5 5 5 4 4 5 5 f . . 
    . . . f 5 f 5 5 5 4 4 5 5 f . . 
    . . . f 5 f 5 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 5 5 5 f . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . f f 5 f 5 f f . . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . f 5 f 5 5 5 5 f f . . . 
    . . . . f 5 f 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 5 5 f f . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . . f f 5 f 5 f f . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f 5 f 5 f f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 f f . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
500,
true
)
Coin13 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Yellow14)
Coin13.setPosition(536, 296)
animation.runImageAnimation(
Coin13,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . f 5 f 5 5 5 5 5 f . . . 
    . . . f 5 f 5 5 5 4 5 5 f . . . 
    . . . f 5 f 5 5 5 4 4 5 5 f . . 
    . . . f 5 f 5 5 5 4 4 5 5 f . . 
    . . . f 5 f 5 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 5 5 5 f . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . f f 5 f 5 f f . . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . f 5 f 5 5 5 5 f f . . . 
    . . . . f 5 f 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 5 5 f f . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . . f f 5 f 5 f f . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f 5 f 5 f f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 f f . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
500,
true
)
Coin14 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Yellow15)
Coin14.setPosition(550, 296)
animation.runImageAnimation(
Coin14,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . f 5 f 5 5 5 5 5 f . . . 
    . . . f 5 f 5 5 5 4 5 5 f . . . 
    . . . f 5 f 5 5 5 4 4 5 5 f . . 
    . . . f 5 f 5 5 5 4 4 5 5 f . . 
    . . . f 5 f 5 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 5 5 5 f . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . f f 5 f 5 f f . . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . f 5 f 5 5 5 5 f f . . . 
    . . . . f 5 f 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 5 5 f f . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . . f f 5 f 5 f f . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f 5 f 5 f f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 f f . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
500,
true
)
Coin15 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Yellow16)
Coin15.setPosition(470, 264)
animation.runImageAnimation(
Coin15,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . f 5 f 5 5 5 5 5 f . . . 
    . . . f 5 f 5 5 5 4 5 5 f . . . 
    . . . f 5 f 5 5 5 4 4 5 5 f . . 
    . . . f 5 f 5 5 5 4 4 5 5 f . . 
    . . . f 5 f 5 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 5 5 5 f . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . f f 5 f 5 f f . . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . f 5 f 5 5 5 5 f f . . . 
    . . . . f 5 f 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 5 5 f f . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . . f f 5 f 5 f f . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f 5 f 5 f f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 f f . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
500,
true
)
Coin16 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Yellow17)
Coin16.setPosition(486, 264)
animation.runImageAnimation(
Coin16,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . f 5 f 5 5 5 5 5 f . . . 
    . . . f 5 f 5 5 5 4 5 5 f . . . 
    . . . f 5 f 5 5 5 4 4 5 5 f . . 
    . . . f 5 f 5 5 5 4 4 5 5 f . . 
    . . . f 5 f 5 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 5 5 5 f . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . f f 5 f 5 f f . . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . f 5 f 5 5 5 5 f f . . . 
    . . . . f 5 f 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 5 5 f f . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . . f f 5 f 5 f f . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f 5 f 5 f f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 f f . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
500,
true
)
Coin17 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Yellow18)
Coin17.setPosition(502, 264)
animation.runImageAnimation(
Coin17,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . f 5 f 5 5 5 5 5 f . . . 
    . . . f 5 f 5 5 5 4 5 5 f . . . 
    . . . f 5 f 5 5 5 4 4 5 5 f . . 
    . . . f 5 f 5 5 5 4 4 5 5 f . . 
    . . . f 5 f 5 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 5 5 5 f . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . f f 5 f 5 f f . . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . f 5 f 5 5 5 5 f f . . . 
    . . . . f 5 f 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 5 5 f f . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . . f f 5 f 5 f f . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f 5 f 5 f f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 f f . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
500,
true
)
COin18 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.YEllow19)
COin18.setPosition(518, 264)
animation.runImageAnimation(
COin18,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . f 5 f 5 5 5 5 5 f . . . 
    . . . f 5 f 5 5 5 4 5 5 f . . . 
    . . . f 5 f 5 5 5 4 4 5 5 f . . 
    . . . f 5 f 5 5 5 4 4 5 5 f . . 
    . . . f 5 f 5 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 5 5 5 f . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . f f 5 f 5 f f . . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . f 5 f 5 5 5 5 f f . . . 
    . . . . f 5 f 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 5 5 f f . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . . f f 5 f 5 f f . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f 5 f 5 f f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 f f . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
500,
true
)
Coin19 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Yellow20)
Coin19.setPosition(534, 264)
animation.runImageAnimation(
Coin19,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . f 5 f 5 5 5 5 5 f . . . 
    . . . f 5 f 5 5 5 4 5 5 f . . . 
    . . . f 5 f 5 5 5 4 4 5 5 f . . 
    . . . f 5 f 5 5 5 4 4 5 5 f . . 
    . . . f 5 f 5 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 5 5 5 f . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . f f 5 f 5 f f . . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . f 5 f 5 5 5 5 f f . . . 
    . . . . f 5 f 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 5 5 f f . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . . f f 5 f 5 f f . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f 5 f 5 f f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 f f . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
500,
true
)
COin20 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Yellow21)
COin20.setPosition(550, 264)
animation.runImageAnimation(
COin20,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . f 5 f 5 5 5 5 5 f . . . 
    . . . f 5 f 5 5 5 4 5 5 f . . . 
    . . . f 5 f 5 5 5 4 4 5 5 f . . 
    . . . f 5 f 5 5 5 4 4 5 5 f . . 
    . . . f 5 f 5 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 5 5 5 f . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . f f 5 f 5 f f . . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . f 5 f 5 5 5 5 f f . . . 
    . . . . f 5 f 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 5 5 f f . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . . f f 5 f 5 f f . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f 5 f 5 f f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 f f . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
500,
true
)
Coin21 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f 8 8 8 8 f f . . . . 
    . . . . f 8 8 8 8 8 8 f . . . . 
    . . . f 8 8 8 9 9 8 8 8 f . . . 
    . . . f 8 8 8 9 9 8 8 8 f . . . 
    . . . f 8 8 8 9 9 8 8 8 f . . . 
    . . . f 8 8 8 9 9 8 8 8 f . . . 
    . . . . f 8 8 8 8 8 8 f . . . . 
    . . . . f f 8 8 8 8 f f . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Yellow22)
Coin21.setPosition(680, 218)
animation.runImageAnimation(
Coin21,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f 8 8 8 8 f f . . . . 
    . . . . f 8 8 8 8 8 8 f . . . . 
    . . . f 8 8 8 9 9 8 8 8 f . . . 
    . . . f 8 8 8 9 9 8 8 8 f . . . 
    . . . f 8 8 8 9 9 8 8 8 f . . . 
    . . . f 8 8 8 9 9 8 8 8 f . . . 
    . . . . f 8 8 8 8 8 8 f . . . . 
    . . . . f f 8 8 8 8 f f . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . f f 8 f 8 8 8 f . . . . 
    . . . . f 8 f 8 8 8 8 8 f . . . 
    . . . f 8 f 8 8 8 9 8 8 f . . . 
    . . . f 8 f 8 8 8 9 9 8 8 f . . 
    . . . f 8 f 8 8 8 9 9 8 8 f . . 
    . . . f 8 f 8 8 8 9 8 8 f . . . 
    . . . . f 8 f 8 8 8 8 8 f . . . 
    . . . . f f 8 f 8 8 8 f . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . f f 8 f 8 f f . . . . 
    . . . . f f 8 f 8 8 8 f . . . . 
    . . . . f 8 f 8 8 8 8 f f . . . 
    . . . . f 8 f 8 8 9 8 8 f . . . 
    . . . . f 8 f 8 8 9 8 8 f . . . 
    . . . . f 8 f 8 8 8 8 f f . . . 
    . . . . f f 8 f 8 8 8 f . . . . 
    . . . . . f f 8 f 8 f f . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f 8 f 8 f f . . . . . 
    . . . . . f 8 f 8 8 f . . . . . 
    . . . . . f 8 f 8 8 f . . . . . 
    . . . . . f 8 f 8 8 f . . . . . 
    . . . . . f 8 f 8 8 f . . . . . 
    . . . . . f 8 f 8 f f . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
500,
true
)
Coin22 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Yellow23)
Coin22.setPosition(903, 280)
animation.runImageAnimation(
Coin22,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . f 5 f 5 5 5 5 5 f . . . 
    . . . f 5 f 5 5 5 4 5 5 f . . . 
    . . . f 5 f 5 5 5 4 4 5 5 f . . 
    . . . f 5 f 5 5 5 4 4 5 5 f . . 
    . . . f 5 f 5 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 5 5 5 f . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . f f 5 f 5 f f . . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . f 5 f 5 5 5 5 f f . . . 
    . . . . f 5 f 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 5 5 f f . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . . f f 5 f 5 f f . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f 5 f 5 f f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 f f . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
500,
true
)
Coin23 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Yellow24)
Coin23.setPosition(942, 280)
animation.runImageAnimation(
Coin23,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . f 5 f 5 5 5 5 5 f . . . 
    . . . f 5 f 5 5 5 4 5 5 f . . . 
    . . . f 5 f 5 5 5 4 4 5 5 f . . 
    . . . f 5 f 5 5 5 4 4 5 5 f . . 
    . . . f 5 f 5 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 5 5 5 f . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . f f 5 f 5 f f . . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . f 5 f 5 5 5 5 f f . . . 
    . . . . f 5 f 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 5 5 f f . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . . f f 5 f 5 f f . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f 5 f 5 f f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 f f . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
500,
true
)
Coin24 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.YEllow25)
Coin24.setPosition(958, 280)
animation.runImageAnimation(
Coin24,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . f 5 f 5 5 5 5 5 f . . . 
    . . . f 5 f 5 5 5 4 5 5 f . . . 
    . . . f 5 f 5 5 5 4 4 5 5 f . . 
    . . . f 5 f 5 5 5 4 4 5 5 f . . 
    . . . f 5 f 5 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 5 5 5 f . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . f f 5 f 5 f f . . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . f 5 f 5 5 5 5 f f . . . 
    . . . . f 5 f 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 5 5 f f . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . . f f 5 f 5 f f . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f 5 f 5 f f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 f f . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
500,
true
)
Coin25 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Yellow26)
Coin25.setPosition(974, 280)
animation.runImageAnimation(
Coin25,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . f 5 f 5 5 5 5 5 f . . . 
    . . . f 5 f 5 5 5 4 5 5 f . . . 
    . . . f 5 f 5 5 5 4 4 5 5 f . . 
    . . . f 5 f 5 5 5 4 4 5 5 f . . 
    . . . f 5 f 5 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 5 5 5 f . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . f f 5 f 5 f f . . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . f 5 f 5 5 5 5 f f . . . 
    . . . . f 5 f 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 5 5 f f . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . . f f 5 f 5 f f . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f 5 f 5 f f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 f f . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
500,
true
)
POO = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.CHUBBYWRINKLE)
POO.setPosition(990, 280)
animation.runImageAnimation(
POO,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . f 5 f 5 5 5 5 5 f . . . 
    . . . f 5 f 5 5 5 4 5 5 f . . . 
    . . . f 5 f 5 5 5 4 4 5 5 f . . 
    . . . f 5 f 5 5 5 4 4 5 5 f . . 
    . . . f 5 f 5 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 5 5 5 f . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . f f 5 f 5 f f . . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . f 5 f 5 5 5 5 f f . . . 
    . . . . f 5 f 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 5 5 f f . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . . f f 5 f 5 f f . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f 5 f 5 f f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 f f . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
500,
true
)
Coin27 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Yellow28)
Coin27.setPosition(503, 233)
animation.runImageAnimation(
Coin27,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . f 5 f 5 5 5 5 5 f . . . 
    . . . f 5 f 5 5 5 4 5 5 f . . . 
    . . . f 5 f 5 5 5 4 4 5 5 f . . 
    . . . f 5 f 5 5 5 4 4 5 5 f . . 
    . . . f 5 f 5 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 5 5 5 f . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . f f 5 f 5 f f . . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . f 5 f 5 5 5 5 f f . . . 
    . . . . f 5 f 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 5 5 f f . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . . f f 5 f 5 f f . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f 5 f 5 f f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 f f . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
500,
true
)
C1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Y1)
C1.setPosition(519, 233)
animation.runImageAnimation(
C1,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . f 5 f 5 5 5 5 5 f . . . 
    . . . f 5 f 5 5 5 4 5 5 f . . . 
    . . . f 5 f 5 5 5 4 4 5 5 f . . 
    . . . f 5 f 5 5 5 4 4 5 5 f . . 
    . . . f 5 f 5 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 5 5 5 f . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . f f 5 f 5 f f . . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . f 5 f 5 5 5 5 f f . . . 
    . . . . f 5 f 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 5 5 f f . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . . f f 5 f 5 f f . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f 5 f 5 f f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 f f . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
500,
true
)
C2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Y2)
C2.setPosition(535, 233)
animation.runImageAnimation(
C2,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . f 5 f 5 5 5 5 5 f . . . 
    . . . f 5 f 5 5 5 4 5 5 f . . . 
    . . . f 5 f 5 5 5 4 4 5 5 f . . 
    . . . f 5 f 5 5 5 4 4 5 5 f . . 
    . . . f 5 f 5 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 5 5 5 f . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . f f 5 f 5 f f . . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . f 5 f 5 5 5 5 f f . . . 
    . . . . f 5 f 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 5 5 f f . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . . f f 5 f 5 f f . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f 5 f 5 f f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 f f . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
500,
true
)
C3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Y3)
C3.setPosition(551, 233)
animation.runImageAnimation(
C3,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . f 5 f 5 5 5 5 5 f . . . 
    . . . f 5 f 5 5 5 4 5 5 f . . . 
    . . . f 5 f 5 5 5 4 4 5 5 f . . 
    . . . f 5 f 5 5 5 4 4 5 5 f . . 
    . . . f 5 f 5 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 5 5 5 f . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . f f 5 f 5 f f . . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . f 5 f 5 5 5 5 f f . . . 
    . . . . f 5 f 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 5 5 f f . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . . f f 5 f 5 f f . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f 5 f 5 f f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 f f . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
500,
true
)
C4 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Y4)
C4.setPosition(567, 233)
animation.runImageAnimation(
C4,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . f 5 5 5 4 4 5 5 5 f . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . f 5 f 5 5 5 5 5 f . . . 
    . . . f 5 f 5 5 5 4 5 5 f . . . 
    . . . f 5 f 5 5 5 4 4 5 5 f . . 
    . . . f 5 f 5 5 5 4 4 5 5 f . . 
    . . . f 5 f 5 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 5 5 5 f . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . f f 5 f 5 f f . . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . f 5 f 5 5 5 5 f f . . . 
    . . . . f 5 f 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 4 5 5 f . . . 
    . . . . f 5 f 5 5 5 5 f f . . . 
    . . . . f f 5 f 5 5 5 f . . . . 
    . . . . . f f 5 f 5 f f . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f 5 f 5 f f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 5 f . . . . . 
    . . . . . f 5 f 5 f f . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
500,
true
)
forever(function () {
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d e e e e e f . . . 
        . . . f e 4 e d d 4 f . . . . . 
        . . . f 2 2 e d d e f . . . . . 
        . . f f 5 5 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `,img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e d d 4 . . . . 
        . . . f 2 2 2 2 e d d e . . . . 
        . . f f 5 5 4 4 f e e f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e e e d d d f . . . 
        . . . . . f 4 d d e 4 e f . . . 
        . . . . . f e d d e 2 2 f . . . 
        . . . . f f f e e f 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `,img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . 4 d d e 4 4 4 e f . . . 
        . . . . e d d e 2 2 2 2 f . . . 
        . . . . f e e f 4 4 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e e e d d d f . . . 
        . . . . . f 4 d d e 4 e f . . . 
        . . . . . f e d d e 2 2 f . . . 
        . . . . f f f e e f 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `,img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . 4 d d e 4 4 4 e f . . . 
        . . . . e d d e 2 2 2 2 f . . . 
        . . . . f e e f 4 4 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `],
    500,
    characterAnimations.rule(Predicate.FacingRight)
    )
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d e e e e e f . . . 
        . . . f e 4 e d d 4 f . . . . . 
        . . . f 2 2 e d d e f . . . . . 
        . . f f 5 5 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `,img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e d d 4 . . . . 
        . . . f 2 2 2 2 e d d e . . . . 
        . . f f 5 5 4 4 f e e f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    500,
    characterAnimations.rule(Predicate.FacingLeft)
    )
})
