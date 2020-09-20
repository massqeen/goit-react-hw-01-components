import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import user from './db/user.json';
import statistics from './db/statistical-data.json';

ReactDOM.render(
  <React.StrictMode>
    <App user={user} statistics={statistics} />
  </React.StrictMode>,
  document.getElementById('root')
);
