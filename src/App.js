import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
import './App.css';

import Store from "./store.js";
import Main from'./Main/Main.js';
import Info from'./Info/Info.js';
import List from'./List/List.js';

class App extends Component {

listPageMaxCount = 30;


state = {
 index: 1,
}

  handleChangeIndex = index => {
    this.setState({
      index : index
    });
  };

  handleClick0 = index => {
    this.setState({
      index: 0
    });
  };
  handleClick1 = index => {
    this.setState({
      index: 1
    });
  };
  handleClick2 = index => {
    this.setState({
      index: 2
    });
  };


  render() {
    const { index } = this.state;

    return (
      <Store.Consumer>
        {store => {
          if (index === 1 ) {
            store.stateClear();
          }
          return (
          <div className="swipe-wrap">
            <SwipeableViews index={index} onChangeIndex={this.handleChangeIndex} enableMouseEvents >
              <div> <Info swipe={this.handleClick1} /> </div>
              <div> <Main swipe={this.handleClick0} start={this.handleClick2} /> </div>
              <div> <List swipe={this.handleClick0} listPageMaxCount={this.listPageMaxCount} /> </div>
            </SwipeableViews>
          </div>
        )}}
      </Store.Consumer>
    );
  }
}

export default App;
