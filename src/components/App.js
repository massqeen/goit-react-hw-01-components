import React from 'react';
import Profile from './Profile/Profile';
import Statistics from './StatisticsList/StatisticsList';
import Friends from './FriendList/FriendList';
import Transactions from './TransactionHistory/TransactionHistory';

const App = ({user, statistics, friends, transactions}) => {
    return (
        <div>
            <Profile
                name={user.name}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
            />
            <Statistics title='Upload stats' statistics={statistics}/>
            <Friends friends={friends}/>
            <Transactions transactions={transactions}/>
        </div>
    );
};

export default App;
