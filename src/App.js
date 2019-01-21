import React, { Component } from 'react';
import ReactSwipe from 'react-swipe';
import './App.css';

import Main from'./Main/Main.js';
import Info from'./Info/Info.js';
import List from'./List/List.js';



class App extends Component {

  render() {
    let reactSwipeEl;

    return (
      <div className="swipe-wrap">
        <ReactSwipe
          swipeOptions={{
            startSlide: 1,
            continuous: false,
            disableScroll: false,
            callback() {
              console.log('slide changed');
            },
            transitionEnd() {
              console.log('ended transition');
            }
           }}
          ref={el => (reactSwipeEl = el)}
        >
          <div><Info swipe={() => reactSwipeEl.slide(1, 200)}/></div>
          <div><Main swipe={() => reactSwipeEl.slide(0, 200)} start={() => reactSwipeEl.slide(2, 200)}/></div>
          <div><List /></div>
        </ReactSwipe>
      </div>
    );
  }
}

export default App;
