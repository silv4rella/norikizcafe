import React, { Component } from 'react';

import SwipeableViews from 'react-swipeable-views';
import './List.css';

import Store from "../store.js";
import ListBox from "./ListBox.js";

import Page1 from '../image/1.jpg';

// const styles = {
//   button: {
//     background: 'white',
//     borderRadius: 3,
//     border: 0,
//     width : '50px',
//     height : '50px',
//     color: 'black',
//     padding : '0px 0px 0px 0px',
//     margin: '0px 0px 0px 10px',
//     boxShadow: '0 3px 5px 2px var(--box-shadow)',
//   },
// };

class List extends Component
{


  state = {
   index: 0,
  }

  handleChange = (index) => {
     this.setState({
       index: index,
     });
   };

  handleChangeIndex = index => {
    this.setState({
      index : index,
    });
  };

  findArrayElementBySlotNum(array, useSlotNum) {
    return array.findIndex((element) => {
      return element.useSlotNum === useSlotNum;
    })
  }

  createList(d, start, end) {
      var list = [];
      for (var i = start; i < end; i++) {
        var findIndex = -1;
        findIndex = this.findArrayElementBySlotNum(d, i+1);
        if (findIndex > -1) {
          list = list.concat(<ListBox
           key={i}
           index={i+1}
           listIndex={findIndex}
           useSlotNum={d[findIndex].useSlotNum}
           name={d[findIndex].name}
           startTime={d[findIndex].startTime}
           endTime={d[findIndex].endTime}
           phoneNum={d[findIndex].phoneNum}
           swipe={this.props.swipe}
           action={this.props.action}
         />)
        } else {
          list = list.concat(<ListBox key={i} index={i+1} useSlotNum={null} swipe={this.props.swipe} action={this.props.action}/>)
        }
      }
      return list;
    }


  render() {

    const { index } = this.state;

    return (
          <div className="list">
            <div className="listView">
              <div className="listInfoView">
                <Store.Consumer>
                  {store => (
                    <div className="listCountView">
                      <div className="titleTodayCount">
                        <div>Today</div>
                        <div>&{store.state.usedUserCount.today_parent} c{store.state.usedUserCount.today_child}</div>
                      </div>
                      <div className="titleNowCount">
                        <div>Now</div>
                        <div>&{store.state.usedUserCount.now_parent} c{store.state.usedUserCount.now_child}</div>
                      </div>
                      <div className="titleOutCount">
                        <div>Out</div>
                        <div>&{store.state.usedUserCount.out_parent} c{store.state.usedUserCount.out_child}</div>
                      </div>
                    </div>
                  )}
                </Store.Consumer>
                <div className="listSearchBar">
                  <div>Out</div>
                </div>
              </div>
              <div className="listTitleText">신발장</div>
              <div className="swipe-wrap">
                <SwipeableViews index={index} onChangeIndex={this.handleChangeIndex} >
                  <div className="listBox">
                    <Store.Consumer>
                      {store => (this.createList(store.state.usedUserListData, 49*0, 49*1))}
                    </Store.Consumer>
                  </div>
                  <div className="listBox">
                    <Store.Consumer>
                      {store => (this.createList(store.state.usedUserListData, 49*1, 49*2))}
                    </Store.Consumer>
                  </div>
                  <div className="listBox">
                    <Store.Consumer>
                      {store => (this.createList(store.state.usedUserListData, 49*2, 49*3))}
                    </Store.Consumer>
                  </div>
                </SwipeableViews>
              </div>
              <div className="pageTabBar">
                <img src={Page1} className="PageNumber" alt="login1" onClick={()=>this.handleChange(0)} />
                <img src={Page1} className="PageNumber" alt="login1" onClick={()=>this.handleChange(1)} />
                <img src={Page1} className="PageNumber" alt="login1" onClick={()=>this.handleChange(2)} />
              </div>
            </div>
          </div>
    );
  }
}


export default List;
