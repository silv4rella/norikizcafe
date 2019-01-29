import React, { Component } from 'react';
import ReactSwipe from 'react-swipe';
import './App.css';

import Main from'./Main/Main.js';
import Info from'./Info/Info.js';
import List from'./List/List.js';

class App extends Component {
  constructor(props) {
    super(props)
    this.handler = this.handler.bind(this);
    this.mainViewOff = this.mainViewOff.bind(this);
    this.mainViewOn = this.mainViewOn.bind(this);
  }

  handler(e){
    console.log(e);
    this.setState({
      phoneNum: e,
      viewStep : 0
    });
  }

  mainViewOn(){
      this.setState({
        viewStep : 1
      });
  }

  mainViewOff(){
      this.setState({
        viewStep : 2
      });
  }

listPageMaxCount = 30;


state = {
  phoneNum: '',
  viewStep: 1
}

pageSetting(reactSwipeEl) {
  let mainView;
  this.state.viewStep === 1 ?
    (mainView = <Main swipe={reactSwipeEl}
          start={this.mainViewOff}
    />) :
    (mainView = <List swipe={reactSwipeEl}
          action={this.handler}
          listPageMaxCount={this.listPageMaxCount}
    />)
    return mainView;
}

  render() {
    let reactSwipeEl;

    return (
      <div className="swipe-wrap">
        <ReactSwipe
          swipeOptions={{
            startSlide: 1,
            continuous: false,
            disableScroll: false,
           }}
          ref={el => (reactSwipeEl = el)}
        >
          <div><Info swipe={(() => reactSwipeEl.slide(1, 200), this.mainViewOn)} /></div>
          <div>{this.pageSetting(() => reactSwipeEl.slide(0, 200))}</div>
        </ReactSwipe>
      </div>
    );
  }
}

export default App;
