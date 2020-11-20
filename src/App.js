import React from 'react';
import Profile from './components/Profile/Profile';
import Statistics from './components/StatisticsList/StatisticsList';
import Friends from './components/FriendList/FriendList';
import Transactions from './components/TransactionHistory/TransactionHistory';

const App = ({ user, statistics, friends, transactions }) => {
  const { name, tag, location, avatar, stats } = user;
  return (
    <div>
      <Profile
        name={name}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="Upload stats" statistics={statistics} />
      <Friends friends={friends} />
      <Transactions transactions={transactions} />
    </div>
  );
};

export default App;
