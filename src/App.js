import PropTypes, { object } from 'prop-types';
import Profile from './js/components/Profile';
import Statistics from './js/components/StatisticsList';
import Friends from './js/components/FriendList';
import Transactions from './js/components/TransactionHistory';

const App = ({ user, statistics, friends, transactions, noAvatar }) => {
  const { name, tag, location, avatar, stats } = user;
  return (
    <div>
      <Profile
        name={name}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
        noAvatar={noAvatar}
      />
      <Statistics title="Upload stats" statistics={statistics} />
      <Friends friends={friends} noAvatar={noAvatar} />
      <Transactions transactions={transactions} />
    </div>
  );
};

export default App;

App.propTypes = {
  friends: PropTypes.arrayOf(object).isRequired,
  statistics: PropTypes.arrayOf(object).isRequired,
  transactions: PropTypes.arrayOf(object).isRequired,
  user: PropTypes.object.isRequired,
  noAvatar: PropTypes.string.isRequired,
};
