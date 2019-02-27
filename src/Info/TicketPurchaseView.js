import React, { Component } from 'react';
import Moment from 'moment';

import './TicketPurchaseView.css';

class TicketPurchaseView extends Component {
  constructor(){
    super()
    this.state = {
      selectType: 'type1',
      d_day: 1,
      last_day: Moment(new Date()).add(1,'days').format('YYYY.MM.DD'),
      ticketCount: 1
    }


    this.handleD_dayChange = this.handleD_dayChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.calcLastDay = this.calcLastDay.bind(this);
    this.calcTicketCount = this.calcTicketCount.bind(this);

  }

  handleD_dayChange(event) {
      this.setState({d_day: event.target.value});
      this.calcLastDay(event.target.value);
  }

  handleSelectChange(event) {
    console.log(event.target.value);
    this.setState({selectType: event.target.value})
  }

  calcLastDay(value) {
    this.setState({last_day: Moment(new Date()).add(value,'days').format('YYYY.MM.DD')});
  }

  calcTicketCount(value){
    if (value >= 1) {
      this.setState({ticketCount: this.state.ticketCount + value});
    } else {
      this.setState({ticketCount: 1});
    }
  }

  render() {
    const selectType = this.state.selectType;
    return (
      <div className='ticketPurchasePopup'>
        <div className='ticketPurchase_inner'>
          <div className="ticketPurchase_titleBar">
            <div className="ticketPurchase_text">
              정기권 발행
            </div>
          </div>
          <div className="ticketPurchase_comments">
            <div className="ticketPurchase_TypeButtonView">
              <button className={selectType === "type1" ? "ticketPurchase_TypeButton-checked" : "ticketPurchase_TypeButton" } value="type1" onClick={this.handleSelectChange}>
                키즈카페<br/>
                1시간
              </button>
              <button className={selectType === "type2" ? "ticketPurchase_TypeButton-checked" : "ticketPurchase_TypeButton" } value="type2" onClick={this.handleSelectChange}>
                키즈카페<br/>
                2시간
              </button>
              <button className={selectType === "type3" ? "ticketPurchase_TypeButton-checked" : "ticketPurchase_TypeButton" } value="type3" onClick={this.handleSelectChange}>
                슬라임<br/>
                1시간
              </button>
              <button className={selectType === "type4" ? "ticketPurchase_TypeButton-checked" : "ticketPurchase_TypeButton" } value="type4" onClick={this.handleSelectChange}>
                슬라임<br/>
                2시간
              </button>
              <button className={selectType === "type5" ? "ticketPurchase_TypeButton-checked" : "ticketPurchase_TypeButton" } value="type5" onClick={this.handleSelectChange}>
                키즈카페 + 슬라임<br/>
                1시간
              </button>
              <button className={selectType === "type6" ? "ticketPurchase_TypeButton-checked" : "ticketPurchase_TypeButton" } value="type6" onClick={this.handleSelectChange}>
                키즈카페 + 슬라임<br/>
                2시간
              </button>
            </div>
            <div className="ticketPurchase_TypeControlView">
              <div className="ticketPurchase_ticketCountView">
                <div className="ticketPurchase_ticketCount-Title">쿠폰</div>
                <div className="ticketPurchase_ticketCount-comment">
                  <div className="ticketPurchase_ticketCount-CountText1">
                    {this.state.ticketCount}
                  </div>
                  <div className="ticketPurchase_ticketCount-CountText2">
                    매
                  </div>
                  <button className="ticketPurchase_ticketCount-button buttonImage_minus" onClick={()=>this.calcTicketCount(-1)}>
                  </button>
                  <button className="ticketPurchase_ticketCount-button buttonImage_plus" onClick={()=>this.calcTicketCount(1)}>
                  </button>
                </div>
              </div>
              <div className="ticketPurchase_timeCountView">
                <div className="ticketPurchase_timeCountLine1">
                 유효기간 : 발행일로부터
                 <input className="ticketPurchase_timeCountLine1_input" type="number" pattern="[0-9]*" value={this.state.d_day} onChange={this.handleD_dayChange}/>
                 일
                </div>
                <div className="ticketPurchase_timeCountLine2">
                 *쿠폰 유효기간 {this.state.last_day} 까지
                </div>
                <div className="ticketPurchase_timeCountLine3">
                  <button className="cancelTicketButton" onClick={this.props.closePopup}>
                    취소
                  </button>
                  <button className="createTicketButton" onClick={this.props.closePopup}>
                    발행
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default TicketPurchaseView;
