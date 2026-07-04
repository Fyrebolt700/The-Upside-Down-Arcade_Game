namespace SpriteKind {
    export const goal = SpriteKind.create()
}
function end_screen () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    sprites.destroyAllSpritesOfKind(SpriteKind.goal)
    tiles.setCurrentTilemap(tilemap`level6`)
}
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
        enemy()
    }
}
function position (sprite: Sprite, col: number, row: number) {
    sprite.setPosition(col * 16 + 8, row * 16 + 8)
}
function next_level () {
    if (current_level == 1) {
        current_level += 1
        load_level_2()
    } else if (current_level == 2) {
        current_level += 1
        load_level_3()
    } else if (current_level == 3) {
        end_screen()
    } else {
    	
    }
}
function enemy () {
    ENEMY = sprites.create(img`
        . . 5 4 2 2 2 2 2 2 2 4 5 . . . 
        . . 5 4 2 2 2 2 2 2 2 4 5 . . . 
        . . 5 4 2 2 2 2 2 2 2 4 5 . . . 
        . . 5 4 2 2 2 2 2 2 2 4 5 . . . 
        . . 5 4 2 2 2 2 2 2 2 4 5 . . . 
        . . 5 4 2 5 2 2 5 2 2 4 5 . . . 
        . . 5 4 2 2 2 2 2 2 4 4 5 . . . 
        . . 5 4 2 2 2 2 2 2 4 5 5 . . . 
        . . 5 4 4 2 2 4 4 4 4 5 . . . . 
        . . 5 5 4 4 4 4 5 5 5 5 . . . . 
        . . . 5 5 5 5 5 5 . . . . . . . 
        . . . . . 5 5 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    ENEMY.ay = -200
    if (current_level == 1) {
        ENEMY.setVelocity(-20, 0)
        position(ENEMY, 7, 13)
    } else if (current_level == 2) {
        ENEMY.setVelocity(-20, 0)
        position(ENEMY, 7, 13)
    } else if (current_level == 3) {
        ENEMY.setVelocity(-20, 0)
        position(ENEMY, 7, 13)
    } else {
    	
    }
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (isUpsideDown && freeze_counter == 0) {
        freeze_counter += 1
        ENEMY.setVelocity(0, 0)
        pause(1000)
        ENEMY.setVelocity(-30, 0)
    }
})
function Normal_World () {
    if (isUpsideDown) {
        sprites.destroy(ENEMY)
        mySprite.setImage(mySprite_img_normal)
        isUpsideDown = false
        scene.setBackgroundColor(3)
        mySprite.ay = 200
        mySprite.setPosition(mySprite.x, mySprite.y - 100)
    }
}
function load_level_3 () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    freeze_counter = 0
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
    tiles.setCurrentTilemap(tilemap`level5`)
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
    position(mySprite, 0, 4)
    position(goalpost, 15, 4)
    mySprite.ay = 200
    controller.moveSprite(mySprite, 100, 0)
    scene.cameraFollowSprite(mySprite)
    isUpsideDown = false
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.goal, function (sprite, otherSprite) {
    next_level()
})
function load_level_2 () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    freeze_counter = 0
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
    tiles.setCurrentTilemap(tilemap`level2`)
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
    position(mySprite, 0, 4)
    position(goalpost, 15, 4)
    mySprite.ay = 200
    controller.moveSprite(mySprite, 100, 0)
    scene.cameraFollowSprite(mySprite)
    isUpsideDown = false
}
function reset_level () {
    if (current_level == 1) {
        load_level_1()
    }
    if (current_level == 2) {
        load_level_2()
    }
    if (current_level == 3) {
        load_level_3()
    }
}
function load_level_1 () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    freeze_counter = 0
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
    position(mySprite, 0, 4)
    position(goalpost, 15, 4)
    mySprite.ay = 200
    controller.moveSprite(mySprite, 100, 0)
    scene.cameraFollowSprite(mySprite)
    isUpsideDown = false
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    reset_level()
})
let mySprite_img_normal: Image = null
let freeze_counter = 0
let ENEMY: Sprite = null
let mySprite_img_upside_down: Image = null
let mySprite: Sprite = null
let isUpsideDown = false
let current_level = 0
let goalpost: Sprite = null
goalpost = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . 2 2 . . . . . . . 
    . . . . . 2 2 2 2 . . . . . . . 
    . . . . 2 2 2 2 2 . . . . . . . 
    . . . 2 2 2 2 2 2 . . . . . . . 
    . 2 2 2 2 2 2 2 2 . . . . . . . 
    2 2 2 2 2 2 2 2 2 . . . . . . . 
    . . . . . . . 4 4 . . . . . . . 
    . . . . . . . 4 4 . . . . . . . 
    . . . . . . . 4 4 . . . . . . . 
    . . . . . . . 4 4 . . . . . . . 
    . . . . . . . 4 4 . . . . . . . 
    . . . . . . . 4 4 . . . . . . . 
    . . . . . . . 4 4 . . . . . . . 
    . . . . . . . 4 4 . . . . . . . 
    . . . . . . . 4 4 . . . . . . . 
    . . . . . . . 4 4 . . . . . . . 
    `, SpriteKind.goal)
current_level = 1
load_level_1()
