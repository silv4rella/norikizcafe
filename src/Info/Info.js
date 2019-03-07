import React, { Component } from 'react';
import ScrollArea from 'react-scrollbar';
import TicketPurchaseView from './TicketPurchaseView.js';
import './Info.css';

import Store from "../store.js";
import UserInfo from "./UserInfo.js";
import Inventory from "./Inventory.js";
import Portal from '@material-ui/core/Portal';

import img_parent from '../image/parent.jpg';
import img_child from '../image/child.jpg';
import img_plus from '../image/plus.jpg';
import img_minus from '../image/minus.jpg';

class Info extends Component {

constructor() {
  super();
  this.state = {
      show_ticketPurchase: false,
      parentCount: 1,
      childCount: 1,
  };
}

ticketPurchasePopup() {
  this.setState({
    show_ticketPurchase: !this.state.show_ticketPurchase
  });
}

calcPersonCount(value1, value2){
  if (value2 >= 0) {
    this.setState({[value1]: value2});
  } else {
    this.setState({[value1]: 0});
  }
}

curUserData = () =>
{
  return(
    <Store.Consumer>
      {store => {return (
        <UserInfo
          userName={store.curUser().name ? store.curUser().name : null}
          userDay={store.curUser().day ? store.curUser().day : null}
          userPhoneNum={store.curUser().phoneNum ? store.curUser().phoneNum : null}
          userChildInfo={store.curUser().child ? store.curUser().child : null}
        />
      )}}
    </Store.Consumer>
  );
}


  render() {

    return (
        <div className="info">
          <div className="titleBar">
            <Store.Consumer>
              {store => {return (
                <div className="titleBar_phoneNum">{store.curUser().phoneNum ? store.curUser().phoneNum : '010-0000-0000'}</div>
              )}}
            </Store.Consumer>
            <div className="titleBar_Text">정보</div>
            <div className="titleBar_dumy"></div>
            <button className="titleBar_Closebutton" onClick={this.props.prev}>X</button>
          </div>
          <ScrollArea className="infoScrollView"
            speed={1}
            contentClassName="infoScrollView_Content"
            horizontal={false}
            >
            <div className="infoUserView">
              <div className="userInfoView">
                <div className="userInfoView_titleView">
                  <div className="userInfoView_dumy"></div>
                  <div className="userInfoView_title">
                    고객정보
                  </div>
                  <button className="userInfoView_print" onClick={()=>console.log("print")}>print</button>
                </div>
                {this.curUserData()}
              </div>
              <Inventory/>
            </div>
          </ScrollArea>

          <div className="countView">
            <div className="countViewPerson">
              <img src={img_parent} className="countViewPersonImage Image_border-right" alt="img_parent"/>
              <img src={img_child} className="countViewPersonImage Image_border-left" alt="img_parent"/>
            </div>
            <div className="countViewPersonButton">
              <button className="countViewButton button_border-right" onClick={()=>this.calcPersonCount('parentCount', this.state.parentCount-1)}>
                <img src={img_minus} className="countViewButtonImage" alt="img_parent_sub"/>
              </button>
              <button className="countViewButton button_border-left button_border-right" onClick={()=>this.calcPersonCount('parentCount', this.state.parentCount+1)}>
                <img src={img_plus} className="countViewButtonImage" alt="img_parent_add"/>
              </button>
              <button className="countViewButton button_border-left button_border-right" onClick={()=>this.calcPersonCount('childCount', this.state.childCount-1)}>
                <img src={img_minus} className="countViewButtonImage" alt="img_child_sub"/>
              </button>
              <button className="countViewButton button_border-left" onClick={()=>this.calcPersonCount('childCount', this.state.childCount+1)}>
                <img src={img_plus} className="countViewButtonImage" alt="img_child_add"/>
              </button>
            </div>
            <div className="numberView">
              <div className="numberView_textbox numberView_border-right">
                <div className="numberView_text" > {this.state.parentCount}</div>
              </div>
              <div className="numberView_textbox numberView_border-left">
                <div className="numberView_text" > {this.state.childCount}</div>
              </div>
            </div>
            <div className="ticketButtonView ticketButtonView_border1">
              <button className="ticketButton ticketButton_type1 ticketButtonView_border-right" onClick={this.ticketPurchasePopup.bind(this)}>정기권 발행</button>
              <button className="ticketButton ticketButton_type2 ticketButtonView_border-left" >퇴장</button>
            </div>
            <div className="ticketButtonView ticketButtonView_border2">
              <button className="ticketButton ticketButton_type3 ticketButtonView_border-right" >정기권 입장</button>
              <button className="ticketButton ticketButton_type4 ticketButtonView_border-left" >일반 입장</button>
            </div>
          </div>
          {/*<button className="nextButton" value="1" onClick={this.props.swipe}>▶</button>*/}
          {this.state.show_ticketPurchase ?
            <Portal container={this.container}>
              <TicketPurchaseView
                text='Close Me'
                closePopup={this.ticketPurchasePopup.bind(this)}
              />
            </Portal>
            : null
          }
        </div>
    );
  }
}

export default Info;
