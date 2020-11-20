import React from 'react';
import PropTypes from 'prop-types';
import styles from './StatisticItem.module.css';
import HexColorGen from '../HexColorGen';
const { item, label: labels, percentage: percentages } = styles;

const StatisticItem = ({ label, percentage }) => (
  <li className={item} style={{ backgroundColor: HexColorGen() }}>
    <span className={labels}>{label}</span>
    <span className={percentages}>{percentage}%</span>
  </li>
);

StatisticItem.defaultProps = { label: '', percentage: 0 };
StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticItem;
