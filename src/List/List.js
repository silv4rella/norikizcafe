import React, { Component } from 'react';
import './List.css';

import Store from "../store.js";
import ListBox from "./ListBox.js";

class List extends Component {


  createList(d) {
      var list = [];
      for (var i = 0; i < this.props.listPageMaxCount; i++) {
       d[i] ?
         list = list.concat(<ListBox
          key={d[i].index}
          index={d[i].index}
          name={d[i].name}
          startTime={d[i].startTime}
          endTime={d[i].endTime}
          phoneNum={d[i].phoneNum}
          swipe={this.props.swipe}
          action={this.props.action}
        />) : list = list.concat(<ListBox key={i} index={i} swipe={this.props.swipe} action={this.props.action}/>)
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
