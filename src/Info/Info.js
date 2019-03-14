import React, { Component } from 'react';
import ScrollArea from 'react-scrollbar';
import TicketPurchaseView from './TicketPurchaseView.js';
import './Info.css';

import Store from "../store.js";
import UserInfo from "./UserInfo.js";
import Inventory from "./Inventory.js";
import Portal from '@material-ui/core/Portal';
import AlertView from "../Popup/AlertView.js";

import img_parent from '../image/parent.jpg';
import img_child from '../image/child.jpg';
import img_plus from '../image/plus.jpg';
import img_minus from '../image/minus.jpg';

class Info extends Component {

  constructor() {
    super();
    this.state = {
        show_ticketPurchase: false,
        showPopup_type1: false,
    };
  }

  togglePopup_type1() {
    this.setState({
      showPopup_type1: !this.state.showPopup_type1
    });
  }

  ticketPurchasePopup() {
    this.setState({
      show_ticketPurchase: !this.state.show_ticketPurchase
    });
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


  findArrayElementBySlotNum(array, phoneNum) {
    return array.findIndex((element) => {
      return element.phoneNum === phoneNum;
    })
  }

  usingInUserChaek(phoneNum, userList) {
      var findIndex = -1;
      findIndex = this.findArrayElementBySlotNum(userList, phoneNum);
      if (findIndex > -1) {
        var item = userList[findIndex];
        if (item.useSlotNum !== null) {
          return findIndex;
        } else {
          return -1;
        }
      }
      else {
        return -1;
      }
  }

  exitUser = () =>
  {
    return(
      <Store.Consumer>
        {store => {
          var listIndex = this.usingInUserChaek(store.state.instanceData.phoneNum, store.state.usedUserListData);
          if (listIndex > -1) {
            store.exitUser_UseCafe(listIndex);
          }
          this.props.prev();
          store.stateClear();
        }}
      </Store.Consumer>
    );
  }

  render() {

    return (
      <Store.Consumer>
        {store => {return (
          <div className="info">
                <div className="titleBar">
                  <div className="titleBar_phoneNum">{store.curUser().customerNum ? 'No.'+store.curUser().customerNum : 'NEW'}</div>
                  <div className="titleBar_Text">정보</div>
                  <button className="titleBar_Closebutton"
                          onClick={()=>{
                            this.props.prev();
                            store.stateClear();
                          }}
                  >
                    X
                  </button>
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
                    <button className="countViewButton button_border-right"
                      onClick={()=>{
                        if (store.state.instanceData.parentCount > 0 )
                        {
                          store.updateInstanceDataValue1('parentCount', store.state.instanceData.parentCount-1);
                        }
                      }}
                    >
                      <img src={img_minus} className="countViewButtonImage" alt="img_parent_sub"/>
                    </button>
                    <button className="countViewButton button_border-left button_border-right" onClick={()=>store.updateInstanceDataValue1('parentCount', store.state.instanceData.parentCount+1)}>
                      <img src={img_plus} className="countViewButtonImage" alt="img_parent_add"/>
                    </button>
                    <button className="countViewButton button_border-left button_border-right"
                      onClick={()=>{
                        if (store.state.instanceData.childCount > 1 )
                        {
                          store.updateInstanceDataValue1('childCount', store.state.instanceData.childCount-1)
                        }
                      }}
                    >
                      <img src={img_minus} className="countViewButtonImage" alt="img_child_sub"/>
                    </button>
                    <button className="countViewButton button_border-left" onClick={()=>store.updateInstanceDataValue1('childCount', store.state.instanceData.childCount+1)}>
                      <img src={img_plus} className="countViewButtonImage" alt="img_child_add"/>
                    </button>
                  </div>
                  <div className="numberView">
                    <div className="numberView_textbox numberView_border-right">
                      <div className="numberView_text" > {store.state.instanceData.parentCount}</div>
                    </div>
                    <div className="numberView_textbox numberView_border-left">
                      <div className="numberView_text" > {store.state.instanceData.childCount}</div>
                    </div>
                  </div>
                  <div className="ticketButtonView ticketButtonView_border1">
                    <button className="ticketButton ticketButton_type1 ticketButtonView_border-right" onClick={this.ticketPurchasePopup.bind(this)}>정기권 발행</button>
                    <button
                      className="ticketButton ticketButton_type2 ticketButtonView_border-left"
                      onClick={
                        ()=>{
                          this.togglePopup_type1();
                        }
                      }
                    >
                      퇴장
                    </button>
                  </div>
                  <div className="ticketButtonView ticketButtonView_border2">
                    <button className="ticketButton ticketButton_type3 ticketButtonView_border-right" onClick={()=>console.log(null)}>정기권 입장</button>
                    <button
                      className="ticketButton ticketButton_type4 ticketButtonView_border-left"
                      onClick={()=>{
                        this.props.entrance();
                      }}
                    >
                      일반 입장
                    </button>
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
            {this.state.showPopup_type1 ?
              <Portal container={this.container}>
                <AlertView
                  titleText='경고'
                  commentType='퇴장하시겠습니까?'
                  closePopup={this.togglePopup_type1.bind(this)}
                  okButtonText={'퇴장'}
                  okButtonFunc={()=>{
                    var listIndex = this.usingInUserChaek(store.state.instanceData.phoneNum, store.state.usedUserListData);
                    if (listIndex > -1) {
                      store.exitUser_UseCafe(listIndex);
                    }
                    this.props.prev();
                    store.stateClear();
                    this.togglePopup_type1();
                  }}
                  cancelButtonText={'아니요'}
                  cancelButtonFunc={this.togglePopup_type1.bind(this)}
                />
              </Portal>
              : null
            }
          </div>
        )}}
      </Store.Consumer>

    );
  }
}

export default Info;
