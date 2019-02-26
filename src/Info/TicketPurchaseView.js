import React, { Component } from 'react';
import Moment from 'moment';

import './TicketPurchaseView.css';
import img_plus from '../image/plus2.jpg';
import img_minus from '../image/minus2.jpg';

class TicketPurchaseView extends Component {
  constructor(){
    super()
    this.state = {
      selectType: 'type1'
    }
  }

  handleSelectChange(event) {
    this.setState({selectType: event.target.value})
  }

  render() {
    let {selectType} = this.state;
    return (
      <div className='ticketPurchasePopup'>
        <div className='ticketPurchase_inner'>
          <div className="ticketPurchase_titleBar">
            <div className="ticketPurchase_dumy"></div>
            <div className="ticketPurchase_text">
              정기권 발행
            </div>
            <button className="ticketPurchase_Closebutton" onClick={this.props.closePopup}>X</button>
          </div>
          <div className="ticketPurchase_comments">
            <div className="ticketPurchase_TypeButtonView">
              <button className={selectType === "type1" ? "ticketPurchase_TypeButton-checked" : "ticketPurchase_TypeButton" } value="type1" onClick={this.handleSelectChange.bind(this)}>
                <div className="ticketPurchase_TypeButton-text">키즈카페</div>
                <div className="ticketPurchase_TypeButton-text">1시간</div>
              </button>
              <button className={selectType === "type2" ? "ticketPurchase_TypeButton-checked" : "ticketPurchase_TypeButton" } value="type2" onClick={this.handleSelectChange.bind(this)}>
                <div className="ticketPurchase_TypeButton-text">키즈카페</div>
                <div className="ticketPurchase_TypeButton-text">2시간</div>
              </button>
              <button className={selectType === "type3" ? "ticketPurchase_TypeButton-checked" : "ticketPurchase_TypeButton" } value="type3" onClick={this.handleSelectChange.bind(this)}>
                <div className="ticketPurchase_TypeButton-text">슬라임</div>
                <div className="ticketPurchase_TypeButton-text">1시간</div>
              </button>
              <button className={selectType === "type4" ? "ticketPurchase_TypeButton-checked" : "ticketPurchase_TypeButton" } value="type4" onClick={this.handleSelectChange.bind(this)}>
                <div className="ticketPurchase_TypeButton-text">슬라임</div>
                <div className="ticketPurchase_TypeButton-text">2시간</div>
              </button>
              <button className={selectType === "type5" ? "ticketPurchase_TypeButton-checked" : "ticketPurchase_TypeButton" } value="type5" onClick={this.handleSelectChange.bind(this)}>
                <div className="ticketPurchase_TypeButton-text">키즈카페 + 슬라임</div>
                <div className="ticketPurchase_TypeButton-text">1시간</div>
              </button>
              <button className={selectType === "type6" ? "ticketPurchase_TypeButton-checked" : "ticketPurchase_TypeButton" } value="type6" onClick={this.handleSelectChange.bind(this)}>
                <div className="ticketPurchase_TypeButton-text">키즈카페 + 슬라임</div>
                <div className="ticketPurchase_TypeButton-text">2시간</div>
              </button>
            </div>
            <div className="ticketPurchase_TypeControlView">
              <div className="ticketPurchase_ticketCountView">
                <div className="ticketPurchase_ticketCount-Title">쿠폰</div>
                <div className="ticketPurchase_ticketCount-comment">
                  <div className="ticketPurchase_ticketCount-CountText1">
                    2
                  </div>
                  <div className="ticketPurchase_ticketCount-CountText2">
                    매
                  </div>
                  <button className="ticketPurchase_ticketCount-button">
                  </button>
                  <button className="ticketPurchase_ticketCount-button">
                    <img src={img_minus} className="ticketPurchase_ticketCount-buttonImage" alt="img_ticket_sub"/>
                  </button>
                </div>
              </div>
              <div className="ticketPurchase_timeCountView">
              asd
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default TicketPurchaseView;
