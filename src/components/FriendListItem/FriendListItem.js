import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css'
import img from '../default.jpg';

const FriendListItem = ({avatar, name, isOnline, id}) => {
    const statusClass = isOnline ? styles.online : styles.offline;
    return (<li className={styles.item} key={id}>
        <span className={statusClass}> </span>
        <img className={styles.avatar} src={avatar} alt={name} width="96"/>
        <p className={styles.name}>{name}</p>
    </li>)
};

FriendListItem.defaultProps = {
    avatar: img,
    isOnline: false,
    name: ''
};
FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
