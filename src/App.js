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

  state = {
   index: 0,
  }

  handleChangeIndex = index => {

    const oldIndex = this.state.index;
    this.setState({
      index,
    }, () => {
      if (index > oldIndex) {
        this.setState({
          index: oldIndex,
        });
      }
      if (oldIndex === 1) {
        this.setState({
          index: oldIndex,
        });
      }
    });
  };

  handleGotoMain = index => {
    this.setState({
      index: 0,
    });
  };
  handleGotoInfo = index => {
    this.setState({
      index: 1,
    });
  };
  handleGotoList = index => {
    this.setState({
      index: 2,
    });
  };

  render() {
    const index = this.state.index;
    return (
      <Store.Consumer>
        {store => {
          return (
          <div className="swipe-wrap">
            <SwipeableViews index={index} onChangeIndex={this.handleChangeIndex} enableMouseEvents >
              <div> <Main start={this.handleGotoInfo} ref={ref => {this.container = ref;}} /> </div>
              <div> <Info prev={this.handleGotoMain} entrance={this.handleGotoList} /> </div>
              <div> <List swipe={this.handleGotoMain} listPageMaxCount={this.listPageMaxCount} listBoxCount={this.listBoxCount} /> </div>
            </SwipeableViews>
          </div>
        )}}
      </Store.Consumer>
    );
  }
}

export default App;
