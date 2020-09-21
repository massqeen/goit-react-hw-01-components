import React from 'react';
import Profile from './Profile/Profile';
import Statistics from './StatisticsList/StatisticsList';
import Friends from './FriendList/FriendList';

const App = ({user, statistics, friends}) => {
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
        </div>
    );
};

export default App;
