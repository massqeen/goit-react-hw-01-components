import React from "react";
import PropTypes from "prop-types";
import Stats from "../Stats/Stats";

const Profile = ({user}) => {
const {name,tag,location,avatar}=user
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
export default Profile;
