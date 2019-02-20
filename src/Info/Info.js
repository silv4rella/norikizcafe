import React, { Component } from 'react';
import ScrollArea from 'react-scrollbar';

import './Info.css';

import Store from "../store.js";
import UserInfo from "./UserInfo.js";
import Inventory from "./Inventory.js";

import img_parent from '../image/parent.jpg';
import img_child from '../image/child.jpg';
import img_plus from '../image/plus.jpg';
import img_minus from '../image/minus.jpg';

class Info extends Component {

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
          <div className="titleBar">정보</div>
          <ScrollArea className="infoScrollView"
            speed={1}
            contentClassName="infoScrollView_Content"
            horizontal={false}
            >
            <div className="infoUserView">
              <div className="userInfoView">
                <div className="userInfoView_titleView">
                  <div className="userInfoView_title">고객정보</div>
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
              <button className="countViewButton button_border-right">
                <img src={img_minus} className="countViewButtonImage" alt="img_parent_add"/>
              </button>
              <button className="countViewButton button_border-left button_border-right">
                <img src={img_plus} className="countViewButtonImage" alt="img_parent_sub"/>
              </button>
              <button className="countViewButton button_border-left button_border-right">
                <img src={img_minus} className="countViewButtonImage" alt="img_child_add"/>
              </button>
              <button className="countViewButton button_border-left">
                <img src={img_plus} className="countViewButtonImage" alt="img_child_sub"/>
              </button>
            </div>
            <div className="numberView">
              <div className="numberView_textbox numberView_border-right">
                <div className="numberView_text" > 1</div>
              </div>
              <div className="numberView_textbox numberView_border-left">
                <div className="numberView_text" > 2</div>
              </div>
            </div>
            <div className="ticketButtonView ticketButtonView_border1">
              <button className="ticketButton ticketButton_type1 ticketButtonView_border-right" >정기권 발행</button>
              <button className="ticketButton ticketButton_type2 ticketButtonView_border-left" >퇴장</button>
            </div>
            <div className="ticketButtonView ticketButtonView_border2">
              <button className="ticketButton ticketButton_type3 ticketButtonView_border-right" >정기권 입장</button>
              <button className="ticketButton ticketButton_type4 ticketButtonView_border-left" >일반 입장</button>
            </div>
          </div>
          /*<button className="nextButton" value="1" onClick={this.props.swipe}>▶</button>*/
        </div>
    );
  }
}

export default Info;
