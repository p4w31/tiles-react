export default function(state = null, action) {
    switch(action.type) {
        case 'TILE_NUMBER_SELECTED':
            return action.payload;
    }
    
    return state;
}