import React from 'react';
import PropTypes from 'prop-types';
import styles from './StatisticsList.module.css';
import StatisticItem from '../StatisticItem/StatisticItem';
const { statistics: section, wrapper, title: header, list } = styles;

const Statistics = ({ statistics, title }) => (
  <section className={section}>
    <div className={wrapper}>
      {title && <h2 className={header}>{title}</h2>}
      <ul className={list}>
        {statistics.map(({ label, percentage, id }) => (
          <StatisticItem label={label} percentage={percentage} key={id} />
        ))}
      </ul>
    </div>
  </section>
);

Statistics.propTypes = {
  statistics: PropTypes.any.isRequired,
  title: PropTypes.any.isRequired,
};

export default Statistics;
