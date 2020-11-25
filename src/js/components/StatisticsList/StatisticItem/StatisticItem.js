import PropTypes from 'prop-types';
import { ListItem, Label, Percentage } from './StatisticItemStyles';

const StatisticItem = ({ label = '', percentage = 0, color }) => (
  <ListItem color={color}>
    <Label>{label}</Label>
    <Percentage>{percentage}%</Percentage>
  </ListItem>
);

StatisticItem.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
  color: PropTypes.string.isRequired,
};

export default StatisticItem;
