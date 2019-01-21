import React, { Component } from 'react';
import ReactSwipe from 'react-swipe';
import './App.css';

import Main from'./Main/Main.js';
import Info from'./Info/Info.js';
import List from'./List/List.js';

const listPageMaxCount = 36;

let listData = [
  {
    index:'0',
    name:'0name',
    startTime:'',
    endTime:'',
    phoneNum:'010-1111-1111',
  },
  {
    index:'1',
    name:'1name',
    startTime:'',
    endTime:'',
    phoneNum:'010-2222-2222',
  },
  {
    index:'2',
    name:'2name',
    startTime:'',
    endTime:'',
    phoneNum:'010-3333-3333',
  },
  {
    index:'3',
    name:'3name',
    startTime:'',
    endTime:'',
    phoneNum:'010-4444-4444',
  }
]

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
          <div><Info swipe={() => reactSwipeEl.slide(1, 200)} /></div>
          <div><Main swipe={() => reactSwipeEl.slide(0, 200)}
                    start={() => reactSwipeEl.slide(2, 200)} /></div>
          <div><List swipe={() => reactSwipeEl.slide(0, 200)} listData={listData} listPageMaxCount={listPageMaxCount} /></div>
        </ReactSwipe>
      </div>
    );
  }
}

export default App;
