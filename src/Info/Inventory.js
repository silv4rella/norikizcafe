import React, { Component } from 'react';

class Inventory extends Component {

state = {
  seasonTicket:0,
  coupon10:0,
  coupon25:0,
  coupon50:0,
  stamp:0,
}

  shouldComponentUpdate(nextProps, nextState){
    	return (JSON.stringify(nextProps) !== JSON.stringify(this.props));
  }
  render() {

    return (
        <div className="infoInventoryView">
          <div className="infoInventoryView_titleView">
            <div className="infoInventoryView_title">내 보유 내역</div>
          </div>
          <div className="itemList">
            <div className="itemRow item_border-right">
              <div className="itemTitle item_border-bottom">정기권</div>
              <div className="itemColumn">
                <div className="iteminfofront">정기권</div>
                <div className="iteminfoback">{this.state.seasonTicket}</div>
              </div>
              <div className="itemColumn">
                <div className="iteminfofront">정기권</div>
                <div className="iteminfoback">{this.state.seasonTicket}</div>
              </div>
            </div>
            <div className="itemRow item_border-right">
              <div className="itemTitle item_border-bottom">쿠폰</div>
              <div className="itemColumn">
                <div className="iteminfofront">10% 쿠폰</div>
                <div className="iteminfoback">{this.state.coupon10}</div>
              </div>
            </div>
            <div className="itemRow">
              <div className="itemTitle item_border-bottom">스탬프</div>
              <div className="itemColumn">
                <div className="iteminfofront">스탬프</div>
                <div className="iteminfoback">{this.state.stamp}</div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Inventory;
