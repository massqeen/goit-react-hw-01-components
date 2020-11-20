import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProfileStatsItem.module.css';
const { item, label: labels, quantity: quantities } = styles;
const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

const ProfileStatsItem = ({ label, quantity }) => (
  <li className={item}>
    <span className={labels}>{capitalize(label)}</span>
    <span className={quantities}>{quantity}</span>
  </li>
);

ProfileStatsItem.propTypes = {
  label: PropTypes.string.isRequired,
  quantity: PropTypes.number,
};

ProfileStatsItem.defaultProps = {
  quantity: 0,
};

export default ProfileStatsItem;
