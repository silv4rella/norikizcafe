import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
import './App.css';

import Store from "./store.js";
import Main from'./Main/Main.js';
import Info from'./Info/Info.js';
import List from'./List/List.js';

class App extends Component {

  listPageMaxCount = 49;
  listBoxCount = 150;

  init = false;

  state = {
   index: 1,
  }

  handleChangeIndex = index => {
    this.setState({
      index : index
    });
    if (index === 1 ) {
      this.init = true;
    }
    else {
      this.init = false;
    }
  };

  handleSetIndex0 = index => {
    this.setState({
      index: 0
    });
  };
  handleSetIndex1 = index => {
    this.setState({
      index: 1
    });
  };
  handleSetIndex2 = index => {
    this.setState({
      index: 2
    });
  };

  render() {
    const { index } = this.state;

    return (
      <Store.Consumer>
        {store => {
          if (this.init === true ) {
            store.stateClear();
            this.init = false;
          }
          else {
            this.init = false;
          }
          return (
          <div className="swipe-wrap">
            <SwipeableViews index={index} onChangeIndex={this.handleChangeIndex} enableMouseEvents >
              <div> <Info swipe={this.handleSetIndex1} /> </div>
              <div> <Main swipe={this.handleSetIndex0} start={this.handleSetIndex2} /> </div>
              <div> <List swipe={this.handleSetIndex0} listPageMaxCount={this.listPageMaxCount} listBoxCount={this.listBoxCount} /> </div>
            </SwipeableViews>
          </div>
        )}}
      </Store.Consumer>
    );
  }
}

export default App;
