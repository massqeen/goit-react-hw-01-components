import React from 'react';
import PropTypes from 'prop-types';
import styles from './StatisticsList.module.css'
import StatisticItem from '../StatisticItem/StatisticItem';
import HexColorGen from '../HexColorGen';

const Statistics = ({statistics, title}) => (
    <section className={styles.statistics}>
        <div className={styles.wrapper}>
            {title && <h2 className={styles.title}>{title}</h2>}
            {console.log(title)}
            <ul className={styles.list}>
                {statistics.map((statistic) => (
                    <li
                        className={styles.item}
                        key={statistic.id}
                        style={{backgroundColor: HexColorGen()}}
                    >
                        <StatisticItem
                            label={statistic.label}
                            percentage={statistic.percentage}
                        />
                    </li>
                ))}
            </ul>
        </div>
    </section>
);

Statistics.propTypes = {
    statistics: PropTypes.array
};

export default Statistics;
