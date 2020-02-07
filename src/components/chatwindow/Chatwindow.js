import PropTypes from "prop-types";
import React, { Component } from "react";
import MessageList from "./MessageList";
import UserInput from "./UserInput";
import Header from "./Header";
import "./styles/chat-window.scss";

class ChatWindow extends Component {
  onUserInputSubmit(message) {
    this.props.onUserInputSubmit(message);
  }

  onFilesSelected(filesList) {
    this.props.onFilesSelected(filesList);
  }

  render() {
    let messageList = this.props.messageList || [];
    let classList = ["sc-chat-window", this.props.isOpen ? "opened" : "closed"];
    return (
      <div className={classList.join(" ")}>
        <Header
          teamName={this.props.agentProfile.teamName}
          imageUrl={this.props.agentProfile.imageUrl}
          onClose={this.props.onClose}
        />
        <MessageList
          messages={messageList}
          imageUrl={this.props.agentProfile.imageUrl}
        />
        <UserInput
          onSubmit={this.onUserInputSubmit.bind(this)}
          onFilesSelected={this.onFilesSelected.bind(this)}
          showEmoji={this.props.showEmoji}
        />
      </div>
    );
  }
}

ChatWindow.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onFilesSelected: PropTypes.func,
  showEmoji: PropTypes.bool
};

export default ChatWindow;
