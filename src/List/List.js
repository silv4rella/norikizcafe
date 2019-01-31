import React, { Component } from 'react';
import './List.css';

import Store from "../store.js";
import ListBox from "./ListBox.js";

class List extends Component
{
  findArrayElementBySlotNum(array, useSlotNum) {
    return array.findIndex((element) => {
      return element.useSlotNum === useSlotNum;
    })
  }

  createList(d) {
      var list = [];
      for (var i = 0; i < this.props.listPageMaxCount; i++) {
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
          list = list.concat(<ListBox key={i} index={i+1} swipe={this.props.swipe} action={this.props.action}/>)
        }
      }
      return list;
    }

  render() {
    return (
          <div className="list">
            <div className="listView">
              <label className="titleText">User List</label>
              <div className="listBox">
                <Store.Consumer>
                  {store => (this.createList(store.state.listData))}
                </Store.Consumer>
              </div>
            </div>
          </div>
    );
  }
}


export default List;
