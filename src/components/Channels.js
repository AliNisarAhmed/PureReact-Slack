import React from 'react';
import ChannelListItem from './ChannelListItem';

const Channels = ({ channels, activeTab, handleChannelChange }) => {
  return (
    <div className="sidebar__list">
      <h4 className="sidebar__title">Channels</h4>
      {
        channels.map(channel => {
          return <ChannelListItem 
                  key={channel.channelName} 
                  activeTab={activeTab} 
                  channel={channel}
                  handleChannelChange={handleChannelChange}
                  />;
        })
      }
    </div>  
  );
};

export default Channels;