import React from 'react';

const ChannelListItem = ({ channel, activeTab, handleChannelChange }) => {

  function handleClick() {
    const currentTab = { type: 'channel', name: channel.channelName };
    handleChannelChange(currentTab);
  }

  const activeStatus = activeTab.name === channel.channelName ? 'active' : '';

  return (
    <div 
      className={`sidebarListItem ${activeStatus}`} 
      onClick={handleClick}
    >
      <a href="#" className="sidebarListItem__link"># {channel.channelName}</a>
    </div >
  );
}
  

export default ChannelListItem;