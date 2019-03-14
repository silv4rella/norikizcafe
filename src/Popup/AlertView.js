import React, { Component } from 'react';
import './AlertView.css';

class AlertView extends Component {


buttonSetting(){

  if (this.props.cancelButtonFunc && this.props.okButtonFunc)
  {
    return(
      <div className="alertViewPopup_bottom">
        <button className="alertViewPopup_bottomButton popupCancelBtnColor" onClick={this.props.cancelButtonFunc}>{this.props.cancelButtonText}</button>
        <button className="alertViewPopup_bottomButton popupOkBtnColor" onClick={this.props.okButtonFunc}>{this.props.okButtonText}</button>
      </div>
    );
  }
  else if (!this.props.cancelButtonFunc && this.props.okButtonFunc) {
    return(
      <div className="alertViewPopup_bottom">
        <button className="alertViewPopup_bottomButton popupOkBtnColor" onClick={this.props.okButtonFunc}>{this.props.okButtonText}</button>
      </div>
    );
  }
  else if (this.props.cancelButtonFunc && !this.props.okButtonFunc) {
    return(
      <div className="alertViewPopup_bottom">
        <button className="alertViewPopup_bottomButton popupCancelBtnColor" onClick={this.props.cancelButtonFunc}>{this.props.cancelButtonText}</button>
      </div>
    );
  }
  else {
    return(
      <div className="alertViewPopup_bottom">
      </div>
    );
  }
}

    render() {
      return (
        <div className='alertViewPopup'>
          <div className='alertViewPopup_inner'>
            <div className="alertViewPopup_titleBar">
              <div className="alertViewPopup_dumy"></div>
              <div className="alertViewPopup_text">
                {this.props.titleText}
              </div>
              <button className="alertViewPopup_Closebutton" onClick={this.props.closePopup}>X</button>
            </div>
            <div className="alertViewPopup_comments">
              {''+this.props.commentType}
            </div>
            {this.buttonSetting()}
          </div>
        </div>
      );
    }
}

export default AlertView;
