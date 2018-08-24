import React from 'react';
import Message from './Message';

const Messages = ({ users, channels, activeTab }) => {

  if(activeTab.type === 'channel') {
    let index = channels.findIndex(channel => channel.channelName === activeTab.name);
    return (
      <div>
        {channels[index].messages.map(message => <Message key={message.date} message={message}/>)}
      </div>
    );
  } else if (activeTab.type === 'user') {
    let index = users.findIndex(user => user.username === activeTab.name);
    return (
      <div>
        {users[index].messages.map(message => <Message key={message.date} message={message}/>)}
      </div>
    );
  } else {
    return (
      <p>Loading</p>
    );
  }
  
}

export default Messages;