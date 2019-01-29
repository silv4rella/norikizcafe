import React, { Component } from 'react';
import './Info.css';

import Store from "../store.js";

class Info extends Component {


  state = {
      pn: '',
      swipe:''
  }

  render() {
  let userInfo = {
    phoneNum:'000-0000-0000'
  }
    return (
        <div className="info">
          <div className="infoView1">
            <div className="userInfoView">
              <Store.Consumer>
                {store => (userInfo.phoneNum = store.state.phoneNum)}
              </Store.Consumer>
              {userInfo.phoneNum}
            </div>
          </div>
          <div className="infoView2">
          </div>
          <div className="infoView3">
          </div>
          <button className="nextButton" onClick={this.props.swipe}>▶</button>
        </div>
    );
  }
}

export default Info;
