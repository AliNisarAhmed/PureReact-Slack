import React from 'react';
import PeopleListItem from './PeopleListItem';

const People = ({ activeTab, users, handleChannelChange }) => {

  return (
    <div className="sidebar__list">
      <h4 className="sidebar__title">People</h4>
      {
        users.map(user => {
          return (
            <PeopleListItem key={user.username} activeTab={activeTab} user={user} handleChannelChange={handleChannelChange}/>
          );
        })
      }
    </div>
  );
};
  
export default People;