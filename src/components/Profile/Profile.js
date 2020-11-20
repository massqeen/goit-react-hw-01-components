import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';
import Stats from '../Stats/Stats';
const preloaderImage =
  'https://dummyimage.com/128x128/0015ff/fff.jpg&text=no+avatar';
const imageStyle = {
  height: '128px',
  width: '128px',
  borderRadius: '50%',
  marginBottom: '10px',
};

const Profile = ({ name, tag, location, avatar, stats }) => {
  imageStyle.backgroundImage = `url(${avatar}), url(${preloaderImage})`;
  const { followers, likes, views } = stats;
  return (
    <div className={styles.profile}>
      <div className={styles.profileWrapper}>
        <div className={styles.description}>
          <div className="avatar" style={imageStyle} />
          <p className={styles.name}>{name}</p>
          <p className={styles.tag}>@{tag}</p>
          <p className={styles.location}>{location}</p>
        </div>
        <Stats followers={followers} likes={likes} views={views} />
      </div>
    </div>
  );
};
Profile.defaultProps = {
  tag: '',
  location: 'Earth',
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};

export default Profile;
