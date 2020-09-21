import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css'
import FriendsListItem from '../FriendListItem/FriendListItem';

const FriendList = ({friends}) => (
    <ul className={styles.friendList}>
        {friends.map(friend => (
            <FriendsListItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} key={friend.id}/>
        ))
        }
    </ul>
);

FriendList.propTypes = {friends: PropTypes.array.isRequired};

export default FriendList;
