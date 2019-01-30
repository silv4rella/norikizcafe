import React, { Component } from 'react';
import './Info.css';

import Store from "../store.js";

class Info extends Component {

  render() {
    return (
        <div className="info">
          <div className="infoView1">
            <div className="userInfoView">
              <Store.Consumer>{store => (<div className="label">{store.state.index}</div>)}</Store.Consumer>
              <Store.Consumer>{store => (<div className="label">{store.state.name}</div>)}</Store.Consumer>
              <Store.Consumer>{store => (<div className="label">{store.state.phoneNum}</div>)}</Store.Consumer>
            </div>
          </div>
          <div className="infoView2">
          </div>
          <div className="infoView3">
          </div>
          <button className="nextButton" value="1" onClick={this.props.swipe}>▶</button>
        </div>
    );
  }
}

export default Info;
