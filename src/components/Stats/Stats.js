import React from "react";
import PropTypes from "prop-types";

const Stats = ({stats: {followers, views, likes}}) => (
    <ul className="stats">
        <li>
            <span className="label">Followers</span>
            <span className="quantity">{followers}</span>
        </li>
        <li>
            <span className="label">Views</span>
            <span className="quantity">{views}</span>
        </li>
        <li>
            <span className="label">Likes</span>
            <span className="quantity">{likes}</span>
        </li>
    </ul>
);

export default Stats;
