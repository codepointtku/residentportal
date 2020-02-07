import React, { Component } from "react";
import Tkulogo from "../layout/images/chat-tkulogo.png";
import {Launcher} from 'react-chat-window'

class Chatwindow extends Component {
  constructor() {
    super();
    this.state = {
      messageList: []
    };
  }
  _onMessageWasSent(message) {
    this.setState({
      messageList: [...this.state.messageList, message]
    });
  }
  _sendMessage(text) {
    if (text.length > 0) {
      this.setState({
        messageList: [
          ...this.state.messageList,
          {
            author: "them",
            type: "text",
            data: { text }
          }
        ]
      });
    }
  }
  render() {
    return (
      <>
        <Launcher
          agentProfile={{
            teamName: "Asukasportaalin palveluchat",
            imageUrl: Tkulogo
          }}
          onMessageWasSent={this._onMessageWasSent.bind(this)}
          messageList={this.state.messageList}
          showEmoji
        />
      </>
    );
  }
}
export default Chatwindow;
