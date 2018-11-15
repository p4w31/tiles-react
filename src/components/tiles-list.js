import React, { Component } from 'react';
import { connect } from 'react-redux';

import Tile from './tile';

import _ from 'lodash';

class TilesList extends Component {
    mapArrObjectsToElements = () => {
        let arrObjects = this.props.tileList;

        let result = _.map(arrObjects, (item) => ( 
            <Tile index={item.index} arr1={item.arr1} key={'tile-' + item.index}/>
        ));

        return result;
    }

    render() {
        return (
            <div className="tiles-list">
                { this.mapArrObjectsToElements() }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        tileList: state.tileList
    };
}

/*function mapDispatchToProps(dispatch) {
    return bindActionCreators({ 
        selectTileNumber: selectTileNumber,
        replaceTileList: replaceTileList
    }, dispatch);
}*/

//export default TilesList;
export default connect(mapStateToProps)(TilesList);