// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1 start":
            case "level1":return tiles.createTilemap(hex`100010000b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0a0a0a0a0b0d0b0b0b0b0b0b0b0b0b0a0a0a0a0a0b0b0b0b0b0b0b0b0b0b0a0a0c0a0a0a0a0b0b0b0b0b0d0b0b0b0a0a0a0a0a0a0a0b0b0b0b0b0b0b0b0b0a0a0a0a0a0a0b0b0b0c0b0b0b0b0b0c0a0a0a0b0b0103020b0b0b0b0b0b0b0b0b0b0b0b0b0507080b0b0b0b0b0b0b0b0b0b0d0b0b0604090b0b0b0b0b0b0b0b0b0b0b0b0c0b0b0b0b0b0a0c0b0b0b0b0b0b0b0b0b0b0b0b0b0a0a0a0a0b0b0b0a0a0b0b0b0b0b0b0b0a0a0a0a0b0b0a0a0a0a0a0b0b0b0b0b0d0a0a0a0b0b0a0a0a0c0a0b0b0b0b0b0b0b0a0a0b0b0a0a0a0a0a0b0b0b0b0b0b0b0b0b0b0b`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tilePath1,sprites.castle.tilePath3,sprites.castle.tilePath2,sprites.castle.tilePath8,sprites.castle.tilePath4,sprites.castle.tilePath7,sprites.castle.tilePath5,sprites.castle.tilePath6,sprites.castle.tilePath9,sprites.castle.tileGrass2,sprites.castle.tileGrass3,myTiles.tile1,myTiles.tile2,myTiles.tile4], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100005010404040404050505050505050505050504040404050505050501050505050505050403050505050405050505050505050505050505050404040404050305050505050505050304040404040505050505050505050505050404040405050505050505050505050505050205050505050505050505050505050505050505050505050505050505050505050505050505050205050504040105050505050505050505050404040404050505050501050505050504040404040405050505050505050505050204040404040505050505050501050504040404040405050505050505050505040404040403050505050505050505050504040404040505050505`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3,sprites.castle.tileGrass2,sprites.castle.tileGrass3,myTiles.tile5,myTiles.tile8], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile6":
            case "tile8":return tile8;
            case "myTile4":
            case "tile6":return tile6;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
