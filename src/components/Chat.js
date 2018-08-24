import React from 'react';
import Input from './Input.js';
import Messages from './Messages.js';

const Chat = ({ users, channels, activeTab, handleChatSubmit }) => {
  return (
    <div className="chat">
      <Messages
        users={users}
        channels={channels}
        activeTab={activeTab}
      />
      <Input 
        activeTab={activeTab}
        handleChatSubmit={handleChatSubmit}
      />
    </div>
  );
};

export default Chat;