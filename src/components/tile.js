import React, { Component } from 'react';
import _ from 'lodash';

const Tile = (props) => {
    return (
        <div className="tile">
            <div>Tile index: {props.index}</div>
            <div>
                { mapArrToElements(props) }
            </div>
        </div>
    );
}

const mapArrToElements = (props) => {
    let result = [];

    result = _.map(props.arr1, (item, index) => (
        <input type="text" 
            readOnly
            className="tile-array-item" 
            value={item} 
            key={'input-' + props.index + '-' + index }/>
    ));

    return result;
}

export default Tile;