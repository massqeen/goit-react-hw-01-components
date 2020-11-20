import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';
import Stats from '../Stats/Stats';

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.profileWrapper}>
        <div className={styles.description}>
          <img
            src={avatar}
            alt="user avatar"
            className={styles.avatar}
            width="128"
          />
          <p className={styles.name}>{name}</p>
          <p className={styles.tag}>@{tag}</p>
          <p className={styles.location}>{location}</p>
        </div>
        <Stats
          followers={stats.followers}
          likes={stats.likes}
          views={stats.views}
        />
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
