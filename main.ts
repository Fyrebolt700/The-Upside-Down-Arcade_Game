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
        mySprite.setPosition(mySprite.x, mySprite.y + 32)
    }
}
function Normal_World () {
    if (isUpsideDown) {
        mySprite.setImage(mySprite_img_normal)
        isUpsideDown = false
        scene.setBackgroundColor(3)
        mySprite.ay = 200
        mySprite.setPosition(mySprite.x, mySprite.y - 32)
    }
}
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
