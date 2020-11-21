import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';
const preloaderImage =
  'https://dummyimage.com/128x128/0015ff/fff.jpg&text=no+avatar';
const { item, name: names } = styles;
let imageStyle = {
  height: '128px',
  width: '128px',
  borderRadius: '8px',
  marginRight: '20px',
  backgroundSize: 'contain',
};

const FriendListItem = ({ avatar, name, isOnline }) => {
  imageStyle = {
    ...imageStyle,
    backgroundImage: `url(${avatar}), url(${preloaderImage})`,
  };

  const statusClass = isOnline ? styles.online : styles.offline;

  return (
    <li className={item}>
      <span className={statusClass} />
      <div className="avatar" style={imageStyle} />
      <p className={names}>{name}</p>
    </li>
  );
};

FriendListItem.defaultProps = {
  isOnline: false,
  name: '',
};
FriendListItem.propTypes = {
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
  name: PropTypes.string,
};

export default FriendListItem;
