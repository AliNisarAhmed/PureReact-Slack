import uuid from 'uuid';

const initialState = {
  activeTab: {
    type: "channel",
    name: 'general'
  },
  users: [
    {
      username: 'dave',
      userid: uuid(),
      messages: [
        {
          content: 'Hello',
          date: 123,
          channel: 'general'
        }
      ],
    },
    {
      username: 'sarah',
      userid: uuid(),
      messages: [
        {
          content: 'I need help with this app',
          date: 127,
          channel: 'help'
        },
        {
          content: 'This is confusing!',
          date: 131,
          channel: 'general'
        },
      ],
    },
    {
      username: 'zack',
      userid: uuid(),
      messages: [
        {
          content: 'React is awesome!',
          date: 129,
          channel: 'react'
        }
      ]
    },
  ],
  channels: [
    {
      channelName: 'general',
      messages: [
        {
          username: 'dave',
          content: 'Hello',
          date: 123, 
        },
        {
          username: 'sarah',
          content: 'This is confusing!',
          date: 131
        }
      ]
    },
    {
      channelName: 'help',
      messages: [
        {
          username: 'sarah',
          content: 'I need help with this app',
          date: 127
        }
      ]
    },
    {
      channelName: 'react',
      messages: [
        {
          username: 'zack',
          content: 'React is awesome!',
          date: 129
        }
      ]
    }
  ]
};

export default initialState;