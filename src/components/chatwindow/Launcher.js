import PropTypes from "prop-types";
import React, { Component } from "react";
import ChatWindow from "./ChatWindow.js";
import launcherIcon from "./../layout/images/chatkupla.png";
import launcherIconActive from "./../layout/images/chatkuplapieni.png";
import "./styles/launcher.scss";

class Launcher extends Component {
  constructor() {
    super();
    this.state = {
      launcherIcon,
      isOpen: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.mute) {
      return;
    }
    const nextMessage = nextProps.messageList[nextProps.messageList.length - 1];
    const isIncoming = (nextMessage || {}).author === "them";
    const isNew = nextProps.messageList.length > this.props.messageList.length;
    if (isIncoming && isNew) {
      this.playIncomingMessageSound();
    }
  }

  handleClick() {
    if (this.props.handleClick !== undefined) {
      this.props.handleClick();
    } else {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }
  render() {
    const isOpen = this.props.hasOwnProperty("isOpen")
      ? this.props.isOpen
      : this.state.isOpen;
    const classList = ["sc-launcher", isOpen ? "opened" : ""];
    return (
      <div id="sc-launcher">
        <div
          className={classList.join(" ")}
          onClick={this.handleClick.bind(this)}
        >
          <MessageCount count={this.props.newMessagesCount} isOpen={isOpen} />
          <img className={"sc-open-icon"} src={launcherIconActive} alt="" />
          <img className={"sc-closed-icon"} src={launcherIcon} alt="" />
        </div>
        <ChatWindow
          messageList={this.props.messageList}
          onUserInputSubmit={this.props.onMessageWasSent}
          onFilesSelected={this.props.onFilesSelected}
          agentProfile={this.props.agentProfile}
          isOpen={isOpen}
          onClose={this.handleClick.bind(this)}
          showEmoji={this.props.showEmoji}
        />
      </div>
    );
  }
}

const MessageCount = props => {
  if (props.count === 0 || props.isOpen === true) {
    return null;
  }
  return <div className={"sc-new-messages-count"}>{props.count}</div>;
};

Launcher.propTypes = {
  onMessageWasReceived: PropTypes.func,
  onMessageWasSent: PropTypes.func,
  newMessagesCount: PropTypes.number,
  isOpen: PropTypes.bool,
  handleClick: PropTypes.func,
  messageList: PropTypes.arrayOf(PropTypes.object),
  mute: PropTypes.bool,
  showEmoji: PropTypes.bool
};

Launcher.defaultProps = {
  newMessagesCount: 0,
  showEmoji: true
};

export default Launcher;