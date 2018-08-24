import React from 'react';
import Channels from './Channels';
import People from './People';

const Sidebar = ({ users, channels, activeTab, handleChannelChange }) => {
  return (
    <div className="sidebar">
      <Channels activeTab={activeTab} channels={channels} handleChannelChange={handleChannelChange}/>
      <People activeTab={activeTab} users={users} handleChannelChange={handleChannelChange}/>
    </div>
  );
};

export default Sidebar;
