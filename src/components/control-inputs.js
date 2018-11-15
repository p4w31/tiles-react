import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import { replaceTileList, selectTileNumber } from '../actions/index';

class ControlInputs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tilesNumber: 0,
            tileIndexToUpdate: 0
        };
    } 

    onTileNumberInputChange = (value) => {
        this.setState({ tilesNumber: value });
    }

    onTileIndexInputChange = (value) => {
        this.setState({ tileIndexToUpdate: value });
    }

    generateArrObjects = (tilesNumber) => {
        let tempArr = _.range(tilesNumber).map( (item, index) => ({ 
            index, 
            arr1: _.range(index, index + 100)
        }));

        return tempArr;
    }

    generateClickHandler = () => {
        let newTileList = this.generateArrObjects(this.state.tilesNumber);
        this.props.replaceTileList(newTileList);
    }

    updateTile = () => {
        let tileIndexToUpdate =  this.state.tileIndexToUpdate;
        let tempArr = [...this.props.tileList];
        let subArrayToSwitch = _.map(tempArr[tileIndexToUpdate].arr1, (item) => (777));

        tempArr[parseInt(tileIndexToUpdate, 10)].arr1 = subArrayToSwitch;
        this.props.replaceTileList(tempArr);
    }

    render() {
        return (
            <div className="control-inputs">
                <div>
                    How many tiles 
                    <input type="text" 
                            value={this.state.tilesNumber}
                            onChange={ (event) => this.onTileNumberInputChange(event.target.value) } />
                    <button onClick={ () => this.generateClickHandler() }>generate</button>
                </div> 
                <div>
                    Tile index to update
                    <input type="text" 
                            value={this.state.tileIndexToUpdate}
                            onChange={ (event) => this.onTileIndexInputChange(event.target.value) } />
                    <button onClick={ () => this.updateTile() }>update</button>
                </div> 
            </div> 
        );
    }
}

function mapStateToProps(state) {
    return {
        tileList: state.tileList,
        tileNumber: state.tileNumber
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ 
        selectTileNumber: selectTileNumber,
        replaceTileList: replaceTileList
    }, dispatch);
}

//export default ControlInputs;
export default connect(mapStateToProps, mapDispatchToProps)(ControlInputs);