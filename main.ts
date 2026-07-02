controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    Normal_World()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Upside_Down()
})
function Upside_Down () {
    if (!(isUpsideDown)) {
        mySprite.setImage(mySprite_img_upside_down)
        isUpsideDown = true
        scene.setBackgroundColor(5)
        mySprite.ay = -200
        mySprite.setPosition(mySprite.x, mySprite.y + 100)
        enemy_movement(123, 92)
    }
}
function enemy_movement (x: number, y: number) {
    ENEMY = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 5 . . . . . . . . . 
        . . . 5 5 5 5 5 5 . . . . . . . 
        . . 5 5 4 4 4 4 5 5 5 5 . . . . 
        . . 5 4 4 2 2 4 4 4 4 5 . . . . 
        . . 5 4 2 2 2 2 2 2 4 5 5 . . . 
        . . 5 4 2 2 2 2 2 2 4 4 5 . . . 
        . . 5 4 2 5 2 2 5 2 2 4 5 . . . 
        . . 5 4 2 2 2 2 2 2 2 4 5 . . . 
        . . 5 4 2 2 2 2 2 2 2 4 5 . . . 
        . . 5 4 2 2 2 2 2 2 2 4 5 . . . 
        . . 5 4 2 2 2 2 2 2 2 4 5 . . . 
        . . 5 4 2 2 2 2 2 2 2 4 5 . . . 
        `, SpriteKind.Enemy)
    ENEMY.setPosition(x, y)
    mySprite.ay = -200
}
function Normal_World () {
    if (isUpsideDown) {
        mySprite.setImage(mySprite_img_normal)
        isUpsideDown = false
        scene.setBackgroundColor(3)
        mySprite.ay = 200
        mySprite.setPosition(mySprite.x, mySprite.y - 100)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.reset()
})
let ENEMY: Sprite = null
let isUpsideDown = false
let mySprite: Sprite = null
let mySprite_img_normal: Image = null
let mySprite_img_upside_down: Image = null
mySprite_img_upside_down = img`
    . . . . f f f f f f f . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . f 1 f f 1 f f . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . . . f f . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `
mySprite_img_normal = img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f . . . . . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . . f 1 f f 1 f f . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . f f f f f f f . . . . . 
    `
tiles.setCurrentTilemap(tilemap`level1`)
scene.setBackgroundColor(3)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f . . . . . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . . f 1 f f 1 f f . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . f f f f f f f . . . . . 
    `, SpriteKind.Player)
mySprite.ay = 200
controller.moveSprite(mySprite, 100, 0)
scene.cameraFollowSprite(mySprite)
Normal_World()
