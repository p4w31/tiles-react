import { combineReducers } from 'redux';
//import BooksReducer from './reducer_books';
import TileNumber from './reducer_tile_number';
import TileList from './reducer_tile_list_replace';

const rootReducer = combineReducers({
    tileList: TileList,
    tileNumber: TileNumber
});

export default rootReducer;
