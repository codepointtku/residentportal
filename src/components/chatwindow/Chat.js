import React, { Component } from "react";
import Launcher from "./Launcher";
import Tkulogo from "../layout/images/chat-tkulogo.png"

class Chat extends Component {
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
      <div>
        <Launcher
          agentProfile={{
            teamName: "Asukasportaalin palveluchat",
            imageUrl:
              Tkulogo
          }}
          onMessageWasSent={this._onMessageWasSent.bind(this)}
          messageList={this.state.messageList}
          showEmoji
        />
      </div>
    );
  }
}

export default Chat;
