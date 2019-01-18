import React, { Component } from 'react';
import ReactSwipe from 'react-swipe';
import './App.css';

import Main from'./Main/Main.js';
import Info from'./Info/Info.js';



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
          <div><Info /></div>
          <div><Main /></div>
        </ReactSwipe>
      <button onClick={() => reactSwipeEl.next()}>Next</button>
      <button onClick={() => reactSwipeEl.prev()}>Previous</button>

      </div>
    );
  }
}

export default App;
