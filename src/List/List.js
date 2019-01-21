import React, { Component } from 'react';
import './List.css';


class ListBox extends Component {



  render() {
    return (
        <button
          className="BoxButton"
          value={this.props.phoneNum}
          onClick={this.props.swipe}
        >
          {this.props.index}
        </button>
    );
  }
}

class List extends Component {

  createList(d) {
    var list = [];
      for (var i = 0; i < this.props.listPageMaxCount; i++) {
         d[i] ?
           list.push(<ListBox
            key={d[i].index}
            index={d[i].index}
            name={d[i].name}
            startTime={d[i].startTime}
            endTime={d[i].endTime}
            phoneNum={d[i].phoneNum}
            swipe={this.props.swipe}
          />) : list.push(<ListBox key={i} index={i} name={i} phoneNum={i} swipe={this.props.swipe}/>)
        }
      return list;
    }

  render() {
    return (
    <div className="list">
      <div className="listView">
        <label className="titleText">User List</label>
        <div className="listBox">
          {this.createList(this.props.listData)  }
        </div>
      </div>
    </div>
    );
  }
}


export default List;
