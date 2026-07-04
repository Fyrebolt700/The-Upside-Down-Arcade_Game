// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100002020202020202020202020202020202020202020202020202020202020202020202020202020602020202020202020202020202020206020202020202020202020202020202060202020202020202020101010101010101010101010101010103030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030304040404040404040404040404040404050505050505050505050505050505050505050505050505050505050505050505050505050507070505050505050505050505050505050505050505050505050505050505050505050505070707070505050505050505050505050505050505`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . 
. . . . . . 2 . . . . . . . . . 
. . . . . . 2 . . . . . . . . . 
. . . . . . 2 . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 2 2 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . 2 2 2 2 . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass1,myTiles.tile1,sprites.builtin.forestTiles5,sprites.builtin.forestTiles28,myTiles.tile3,sprites.dungeon.floorLight0,myTiles.tile2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "sky":
            case "tile1":return tile1;
            case "myTile0":
            case "tile3":return tile3;
            case "myTile":
            case "tile2":return tile2;
            case "myTile1":
            case "tile4":return tile4;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
