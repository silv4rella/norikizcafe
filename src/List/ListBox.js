import React, { Component } from 'react';
import './List.css';

import Moment from 'moment';
import Store from "../store.js";

class ListBox extends Component {


subInfo = (val) =>
{
  if (val) {
    return (
      <div className="BoxButton_TitleBox">
        <div className="BoxButtonText_Title">{this.props.index}</div>
        <div className="BoxButtonText_etc1">{this.props.name ? this.props.name : '-'}</div>
        <div className="BoxButtonText_etc2">{this.props.startTime ? this.props.startTime : '-'}</div>
      </div>
    );
  } else {
    return (
        <div className="BoxButton_TitleBox_text">{this.props.index}</div>
    );
  }
}

  render() {
    return (

        <Store.Consumer>
          {store => (
            <button
              className={this.props.useSlotNum ? "BoxButton_used" : "BoxButton_unUsed" }
              value={this.props.phoneNum}
              onClick={()=>{
                this.props.useSlotNum !== null ?
                store.updateInstanceDataValue({
                  name: null,
                  day:'1900-01-01',
                  startTime: Moment(new Date()).format('HH:mm:ss'),
                  endTime: null,
                  phoneNum: this.props.phoneNum,
                  loginCustomerNum:this.props.listIndex,
                }) :
                store.addUser_UseCafe({
                    useSlotNum : this.props.index,
                    customerNum : '',
                    name: this.props.name,
                    day:'1900-01-01',
                    startTime: Moment(new Date()).format('HH:mm:ss'),
                    endTime:'00:00:00',
                    phoneNum: this.props.phoneNum,
                    child:null,
                }, store.state.listData.length);
                this.props.swipe();
              }}
            >
              {this.subInfo(this.props.useSlotNum)}
            </button>
          )}
        </Store.Consumer>

    );
  }
}

export default ListBox;
