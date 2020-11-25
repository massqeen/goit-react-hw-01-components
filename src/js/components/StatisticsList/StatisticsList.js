import PropTypes from 'prop-types';
import { Section, Wrapper, Title, List } from './StatisticsListStyles';
import StatisticItem from './StatisticItem/StatisticItem';
import hexColorGen from '../../hexColorGen';

const Statistics = ({ statistics, title }) => (
  <Section>
    <Wrapper>
      <Title titleText={title}>{title}</Title>
      <List>
        {statistics.map(({ label, percentage, id }) => (
          <StatisticItem
            label={label}
            percentage={percentage}
            key={id}
            color={hexColorGen()}
          />
        ))}
      </List>
    </Wrapper>
  </Section>
);

Statistics.propTypes = {
  statistics: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
};

export default Statistics;
