import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TilesList from './components/tiles-list';
import ControlInputs from './components/control-inputs';

import _ from 'lodash';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <div className="App-intro">
                    <ControlInputs />

                    <TilesList />

                </div> 
            </div> 
        );
    }
}

export default App;
