import PropTypes from 'prop-types';
import styled from 'styled-components';
import FriendsListItem from './FriendListItem';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

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
