import React, {Component} from 'react'
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
    })
  }
 
  _sendMessage(text) {
    if (text.length > 0) {
      this.setState({
        messageList: [...this.state.messageList, {
          author: 'them',
          type: 'text',
          data: { text }
        }]
      })
    }
  }
 
  render() {
    return (<div>
      <Launcher 
        agentProfile={{
          teamName: 'Asukasportaalin palveluchat',
          imageUrl: 'https://www.videovisit.fi/wp-content/uploads/2018/11/turku_a-c2-a6ebo_300ppi_viiva_cyan-1030x726.png'
        }}
        onMessageWasSent={this._onMessageWasSent.bind(this)}
        messageList={this.state.messageList}
        showEmoji
      />
    </div>)
  }
}
export default Chatwindow;