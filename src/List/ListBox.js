import React, { Component } from 'react';
import './ListBox.css';

import Store from "../store.js";

class ListBox extends Component {

onClickHandle = (e) =>{
    this.props.swipe(e);
}

  render() {
    return (

        <Store.Consumer>
          {store => (
            <button
              className="BoxButton"
              value={this.props.phoneNum}
              onClick={()=>{
                this.onClickHandle(this.props.phoneNum);
                store.updateValue("index", this.props.index);
                store.updateValue("name", this.props.name);
                store.updateValue("phoneNum", this.props.phoneNum);
              }}
            >
              <div className="BoxButtonText_Title">{this.props.index}</div>
              <div className="BoxButtonText_etc">{this.props.name ? this.props.name : '-'}</div>
              <div className="BoxButtonText_etc">{this.props.startTime ? this.props.startTime : '-'}</div>
            </button>
          )}
        </Store.Consumer>

    );
  }
}

export default ListBox;
