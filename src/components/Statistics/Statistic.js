import React from 'react';
import PropTypes from 'prop-types';

const Statistic = ({ label, percentage }) => (
  <>
    <span className="label">{label}</span>
    <span className="percentage">{percentage}%</span>
  </>
);
Statistic.defaultProps = {};
Statistic.propTypes = {};

export default Statistic;
