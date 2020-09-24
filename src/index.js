import React from 'react';
import ReactDOM from 'react-dom';
import './base.css';
import App from './App';
import user from './db/user.json';
import statistics from './db/statistical-data.json';
import friends from './db/friends.json';
import transactions from './db/transactions.json';

ReactDOM.render(
  <React.StrictMode>
    <App user={user} statistics={statistics} friends={friends} transactions={transactions} />
  </React.StrictMode>,
  document.getElementById('root')
);
