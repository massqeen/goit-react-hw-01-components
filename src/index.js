import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import user from './user.json';

ReactDOM.render(
  <React.StrictMode>
    <App user={user} />
  </React.StrictMode>,
  document.getElementById('root')
);
