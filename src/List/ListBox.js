import React, { Component } from 'react';
import './List.css';

import Moment from 'moment';
import Store from "../store.js";

class ListBox extends Component {

  render() {
    return (

        <Store.Consumer>
          {store => (
            <button
              className={this.props.useSlotNum ? "BoxButton_used" : "BoxButton_unUsed" }
              value={this.props.phoneNum}
              onClick={()=>{
                this.props.swipe();
                store.updateValue("log", this.props.index);
                store.updateValue("index", this.props.index);
                this.props.useSlotNum ?
                store.updateValue("log", this.props.listIndex) :
                store.addUser_UseCafe({
                    useSlotNum : this.props.index,
                    customerNum : '',
                    name: this.props.name,
                    startTime: Moment(new Date()).format('HH:mm:ss'),
                    endTime:'00:00:00',
                    phoneNum: store.state.phoneNum,
                });
              }}
            >
              <div className="BoxButtonText_Title">{this.props.index}</div>
              <div className="BoxButtonText_etc1">{this.props.name ? this.props.name : '-'}</div>
              <div className="BoxButtonText_etc2">{this.props.startTime ? this.props.startTime : '-'}</div>
            </button>
          )}
        </Store.Consumer>

    );
  }
}

export default ListBox;
