import React from 'react';
import PropTypes from 'prop-types';
import Stats from '../Stats/Stats';
// import './default.jpg';

const Profile = (user) => {
    console.log(user);
    const {name, tag, location, avatar} = user
    return (<div className="profile">
        <div className="description">
            <img
                src={avatar}
                alt="user avatar"
                className="avatar"
            />
            <p className="name">{name}</p>
            <p className="tag">{tag}</p>
            <p className="location">{location}</p>
        </div>
        <Stats stats={user.stats}/>;
    </div>);
};
Profile.defaultProps = {
    user:{
        name: "test",
        tag: "",
        location: "",
        avatar: "./default.jpg"
    }

};

Profile.propTypes = {
    optionalObjectWithStrictShape: PropTypes.exact({
        name: PropTypes.string.isRequired,
        tag: PropTypes.string,
        location: PropTypes.string,
        avatar: PropTypes.string
    })
};

export default Profile;
