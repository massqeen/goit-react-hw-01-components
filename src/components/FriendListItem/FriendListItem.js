import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';
const preloaderImage =
  'https://dummyimage.com/128x128/0015ff/fff.jpg&text=no+avatar';

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  const imageStyle = {
    height: '128px',
    width: '128px',
    borderRadius: '8px',
    marginRight: '20px',
    backgroundImage: `url(${avatar}), url(${preloaderImage})`,
    backgroundSize: 'contain',
  };
  const statusClass = isOnline ? styles.online : styles.offline;

  return (
    <li className={styles.item} key={id}>
      <span className={statusClass}> </span>
      <div className="avatar" style={imageStyle} />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendListItem.defaultProps = {
  isOnline: false,
  name: '',
};
FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
