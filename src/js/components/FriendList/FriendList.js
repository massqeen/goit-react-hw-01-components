import PropTypes from 'prop-types';
import FriendsListItem from '../FriendListItem/FriendListItem';
import List from './FriendListStyles';

const FriendList = ({ friends, noAvatar }) => (
  <List>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <FriendsListItem
        avatar={avatar}
        name={name}
        isOnline={isOnline}
        key={id}
        id={id}
        noAvatar={noAvatar}
      />
    ))}
  </List>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
  noAvatar: PropTypes.string.isRequired,
};

export default FriendList;
