import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';
import ProfileStats from '../ProfileStats/ProfileStats';
const preloaderImage =
  'https://dummyimage.com/128x128/0015ff/fff.jpg&text=no+avatar';
const imageStyle = {
  height: '128px',
  width: '128px',
  borderRadius: '50%',
  marginBottom: '10px',
};
const {
  profile,
  profileWrapper,
  description,
  name: names,
  tag: tags,
  location: locations,
} = styles;

const Profile = ({ name, tag, location, avatar, stats }) => {
  imageStyle.backgroundImage = `url(${avatar}), url(${preloaderImage})`;
  return (
    <div className={profile}>
      <div className={profileWrapper}>
        <div className={description}>
          <div className="avatar" style={imageStyle} />
          <p className={names}>{name}</p>
          <p className={tags}>@{tag}</p>
          <p className={locations}>{location}</p>
        </div>
        <ProfileStats stats={stats} />
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
