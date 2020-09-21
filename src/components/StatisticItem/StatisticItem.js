import React from 'react';
import PropTypes from 'prop-types';
import styles from './StatisticItem.module.css'
import HexColorGen from "../HexColorGen";

const StatisticItem = ({label, percentage}) => (
    <li className={styles.item} style={{backgroundColor: HexColorGen()}}>
        <span className={styles.label}>{label}</span>
        <span className={styles.percentage}>{percentage}%</span>
    </li>
);

StatisticItem.defaultProps = {label: '', percentage: 0};
StatisticItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
};

export default StatisticItem;
