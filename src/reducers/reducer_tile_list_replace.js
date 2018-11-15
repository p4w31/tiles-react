export default function(state = null, action) {
    switch(action.type) {
        case 'TILE_LIST_REPLACE':
            return action.payload;
    }
    
    return state;
}