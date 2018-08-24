

// • A list of Channels
// • A list of Users
// • Maintain state for the currently - selected Channel or User
// • Click a Channel or User to select it
// • Only one Channel or User can be selected at a time
// • Each Channel and User has its own history of messages
// • Generate some fake messages for each channel
// • Show an input box at the bottom, only when a Channel or User is selected
// • Typing in the input box and hitting ENTER should add that message to the selected Channel /
//   User and clear the input.

import React from 'react';
import Sidebar from './Sidebar';
import Chat from './Chat';
import moment from 'moment';

import initialState from '../seedData/initialState';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeTab: initialState.activeTab,
      users: initialState.users,
      channels: initialState.channels
    };
    this.handleChannelChange = this.handleChannelChange.bind(this);
    this.handleChatSubmit = this.handleChatSubmit.bind(this);
  }


  handleChannelChange(activeTab) {
    this.setState(() => ({ activeTab }));  
  }

  handleChatSubmit({ type, name }, state) {
    let index;
    if (type === 'channel') {
      index = this.state.channels.findIndex(channel => channel.channelName === name);
    } else {
      index = this.state.users.findIndex(user => user.username === name);
    }
    let temp = { ...this.state };
    const message = {
      username: 'Myself',
      content: state,
      date: moment().valueOf()
    };
    temp[`${type}s`][index].messages.push(message);
    this.setState(() => ({ ...temp }));
  }

  render() {
    return (
      <div className="app">
        <Sidebar 
          users={this.state.users} 
          channels={this.state.channels}
          activeTab={this.state.activeTab}
          handleChannelChange={this.handleChannelChange}
        />
        <Chat
          activeTab={this.state.activeTab} 
          users={this.state.users}
          channels={this.state.channels}
          handleChatSubmit={this.handleChatSubmit}
        />
      </div>
    );
  }
}

export default App;