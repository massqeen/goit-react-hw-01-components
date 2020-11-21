import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import user from './db/user.json';
import statistics from './db/statistical-data.json';
import friends from './db/friends.json';
import transactions from './db/transactions.json';
import './css/base.css';
const NO_IMAGE_URL =
  'https://dummyimage.com/128x128/0015ff/fff.jpg&text=no+avatar';

ReactDOM.render(
  <React.StrictMode>
    <App
      user={user}
      statistics={statistics}
      friends={friends}
      transactions={transactions}
      noAvatar={NO_IMAGE_URL}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
