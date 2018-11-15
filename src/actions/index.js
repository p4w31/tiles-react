//all action creators
export function selectTileNumber(tile) {
    console.log('selected tile number');
    console.log(tile);
    return {
        type:'TILE_NUMBER_SELECTED',
        payload: tile
    };
}

export function replaceTileList(newArray) {
    console.log('replace tole list');
    return {
        type:'TILE_LIST_REPLACE',
        payload: newArray
    };
}