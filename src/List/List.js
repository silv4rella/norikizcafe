import React, { Component } from 'react';
import './List.css';

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

class ListBox extends Component {

  SelectBoxButton = (e) => {
    console.log(e.target.value);
  }

  render() {
    return (
        <button
          className="BoxButton"
          value={this.props.phoneNum}
          onClick={this.SelectBoxButton}
        >
          {this.props.index}
        </button>
    );
  }
}

class List extends Component {

  createList(d) {
    var list = [];
      for (var i = 0; i < listPageMaxCount; i++) {
         d[i] ?
           list.push(<ListBox
            key={d[i].index}
            index={d[i].index}
            name={d[i].name}
            startTime={d[i].startTime}
            endTime={d[i].endTime}
            phoneNum={d[i].phoneNum}
          />) : list.push(<ListBox key={i} index={i} name={i} phoneNum={i} />)
        }
      return list;
    }

  render() {
    return (
    <div className="list">
      <div className="listView">
        <label className="titleText">User List</label>
        <div className="listBox">
          {this.createList(listData)  }
        </div>
      </div>
    </div>
    );
  }
}


export default List;
