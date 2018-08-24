import React from 'react';
import moment from 'moment';

const Message = ({ message }) => {

  const date = moment(message.date).format('ddd MMM DD YYYY HH:mm:ss');

  return (
    <div className="message">
      <div className="message__pic">&nbsp;</div>
      <div className="message__text">
        <div className="message__meta">
          <span className="message__username">{message.username}</span>
          <span className="message__date">{date}</span>
        </div>
        <div className="message__content">
          {message.content}
        </div>
      </div>
    </div>
  );
};

export default Message;