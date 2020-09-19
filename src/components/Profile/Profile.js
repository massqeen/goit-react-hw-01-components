import React from "react";
import PropTypes from "prop-types";
import Stats from "../Stats/Stats";

const Profile = (props) => (
    <div className="profile">
        <div className="description">
            <img
                src="https://i.pinimg.com/originals/a0/40/66/a04066a2d1fcf25df39c599e093995c8.jpg"
                alt="user avatar"
                className="avatar"
            />
            <p className="name">Petra Marica</p>
            <p className="tag">@pmarica</p>
            <p className="location">Salvador, Brasil</p>
        </div>
        <Stats/>;
    </div>
);
export default Profile;
