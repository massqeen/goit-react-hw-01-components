import React from 'react';
import PropTypes from 'prop-types';
import Stats from '../Stats/Stats';
import img from '../default.jpg';

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="user avatar" className="avatar" width="128" />
        <p className="name">{name}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>
      <Stats
        followers={stats.followers}
        likes={stats.likes}
        views={stats.views}
      />
      ;
    </div>
  );
};
Profile.defaultProps = {
  tag: '',
  location: '',
  avatar: img
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object
};

export default Profile;
