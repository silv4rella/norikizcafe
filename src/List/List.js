import React, { Component } from 'react';
import './List.css';


class ListBox extends Component {



  render() {
    return (
        <button
          className="BoxButton"
          value={this.props.phoneNum}
          onClick={()=>this.props.action(this.props.phoneNum)}
        >
          <div className="BoxButtonText_Title">{this.props.index}</div>
          <div>{this.props.name ? this.props.name : '-'}</div>
          <div>{this.props.phoneNum ? this.props.phoneNum : '-'}</div>
          <div>{this.props.startTime ? this.props.startTime : '-'}</div>
        </button>
    );
  }
}

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
          {this.createList(this.props.listData)  }
        </div>
      </div>
    </div>
    );
  }
}


export default List;
