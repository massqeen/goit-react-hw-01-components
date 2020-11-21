import React from 'react';
import PropTypes from 'prop-types';
import { friendList } from './FriendList.module.css';
import FriendsListItem from '../FriendListItem/FriendListItem';

const FriendList = ({ friends }) => (
  <ul className={friendList}>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <FriendsListItem
        avatar={avatar}
        name={name}
        isOnline={isOnline}
        key={id}
      />
    ))}
  </ul>
);

FriendList.propTypes = { friends: PropTypes.array.isRequired };

export default FriendList;
