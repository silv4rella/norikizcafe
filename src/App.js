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
  }

  handler(e){
    this.setState({
      index: e,
    });
    console.log(this.state);
  }

listPageMaxCount = 36;

listData = [
  {
    index:'0',
    name:'0name',
    startTime:'00:00:00',
    endTime:'00:00:00',
    phoneNum:'010-1111-1111',
  },
  {
    index:'1',
    name:'1name',
    startTime:'00:00:00',
    endTime:'00:00:00',
    phoneNum:'010-2222-2222',
  },
  {
    index:'2',
    name:'2name',
    startTime:'00:00:00',
    endTime:'00:00:00',
    phoneNum:'010-3333-3333',
  },
  {
    index:'3',
    name:'3name',
    startTime:'00:00:00',
    endTime:'00:00:00',
    phoneNum:'010-4444-4444',
  }
]

state = {
  index:'',
  name:'',
  startTime:'',
  endTime:'',
  phoneNum:'',
}

mainViewStep = true;
mainViewOff(e){
    this.setState({
      mainViewStep : e
    });
      console.log(this.mainViewStep);
}

  render() {
    let reactSwipeEl;

    let mainView;

    this.mainViewStep ?
      (mainView = <Main swipe={() => reactSwipeEl.slide(0, 200)}
            start={this.mainViewOff}
      />) :
      (mainView = <List swipe={() => reactSwipeEl.slide(0, 200)}
            action={this.handler}
            listData={this.listData}
            listPageMaxCount={this.listPageMaxCount}
      />)

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
          <div>
            {mainView}
          </div>
        </ReactSwipe>
      </div>
    );
  }
}

export default App;
