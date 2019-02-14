import React, { Component } from 'react';
import './Info.css';

import Store from "../store.js";

class Info extends Component {


  render() {

    return (
        <div className="info">
          <div className="titleBar">정보</div>
          <div className="infoView1">
            <Store.Consumer>
              {store => {return (
                <div className="userInfoView">
                  <div className="label">{store.curUser() ? 'SlotNum: '+store.curUser().useSlotNum : 'SlotNum: null'}</div>
                  <div className="label">{store.curUser() ? 'name: '+store.curUser().name : 'name: null'}</div>
                  <div className="label">{store.curUser() ? 'pn: '+store.curUser().phoneNum : 'pn: null'}</div>
                </div>
              )}}
            </Store.Consumer>
            <div className="infoView2">
            infoView2
            </div>
          </div>
          <div className="infoView3">
          infoView3
          </div>
          <button className="nextButton" value="1" onClick={this.props.swipe}>▶</button>
        </div>
    );
  }
}

export default Info;
