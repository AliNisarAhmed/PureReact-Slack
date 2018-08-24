import React from 'react';

const PeopleListItem = ({ user, activeTab, handleChannelChange }) => {

  function handleClick() {
    const currentTab = { type: 'user', name: user.username };
    handleChannelChange(currentTab);
  }

  const activeStatus = activeTab.type === 'user' && activeTab.name === user.username ? 'active' : '';
  return (
    <div 
      className={`sidebarListItem ${activeStatus}`}
      onClick={handleClick}  
    >
      <a href="#" className="sidebarListItem__link sidebarListItem__link--user">{user.username}</a>
    </div>
  );
};

export default PeopleListItem;