import React, { Component } from 'react';
import './List.css';

import Moment from 'moment';
import Store from "../store.js";

class ListBox extends Component {

constructor() {
  super();
  this.state = {
    timeInterval: false,
    elapsedTime:''
  };
}

calcElapsedTime(value) {

  var nowDate = Moment(new Date(),'HH:mm:ss');
  var startDate = Moment(value,'HH:mm:ss');
  var duration = Moment.duration(nowDate.diff(startDate));

  var day = duration.days();
  var hour = duration.hours();
  var minute = duration.minutes();
  var second = duration.seconds();

  var stringHour = !hour || hour === 0 ? '00' : (hour > 9 ? hour : '0' + hour);
  var stringMin = !minute || minute === 0 ? '00' : (minute > 9 ? minute : '0' + minute);
  var stringSec = !second || second === 0 ? '00' : (second > 9 ? second : '0' + second);

  if (!day || day === 0) {
    return (stringHour + ':' + stringMin + ':' + stringSec)
  } else {
    return ('' + day + '일:' + stringHour + ':' + stringMin + ':' + stringSec)
  }

}

subInfo = (val) =>
{
  if (val) {
    return (
      <div className="BoxButton_TitleBox">
        <div className="BoxButtonText_Title">{this.props.index}</div>
        <div className="BoxButtonText_etc1">{this.props.name ? this.props.name : '-'}</div>
        <div className="BoxButtonText_etc2">{this.props.startTime ? this.state.elapsedTime : '-'}</div>
      </div>
    );
  } else {
    return (
        <div className="BoxButton_TitleBox_text">{this.props.index}</div>
    );
  }
}

slotUpdate = (val) => {
  if (this.state.timeInterval === false)
  {
    this.setState({
      timeInterval: true,
    });
    this.interval = setInterval(() => {
      this.setState({
        elapsedTime: this.calcElapsedTime(this.props.startTime),
      });
    }, 1000);
  }

  this.setState({
    elapsedTime: this.calcElapsedTime(this.props.startTime),
  });
  return
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
                store.updateInstanceDataValue2({
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
                    phoneNum: store.state.instanceData.phoneNum,
                    child: null,
                }, store.state.usedUserListData.length);
                this.slotUpdate(this.props.useSlotNum);
                this.props.swipe();
              }}
            >
              {
                this.subInfo(this.props.useSlotNum)
              }
            </button>
          )}
        </Store.Consumer>
    );
  }
}

export default ListBox;
