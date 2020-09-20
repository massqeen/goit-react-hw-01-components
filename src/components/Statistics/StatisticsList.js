import React from 'react';
import PropTypes from 'prop-types';
import Statistic from './Statistic';
import HexColorGen from '../HexColorGen';

const Statistics = ({ statistics, title }) => (
  <section className="statistics">
    {{ title } && <h2 className="title">{title}</h2>}
    <ul className="stat-list">
      {statistics.map((statistic) => (
        <li
          className="item"
          key={statistic.id}
          style={{ backgroundColor: HexColorGen() }}
        >
          <Statistic
            label={statistic.label}
            percentage={statistic.percentage}
          />
        </li>
      ))}
    </ul>
  </section>
);

Statistics.defaultProps = {};
Statistics.propTypes = {};

export default Statistics;
