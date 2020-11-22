import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px 20px;
  background-color: ${(props) => props.color};
`;
const Span = styled.label`
  color: #fff;
  line-height: 20px;
`;
const Label = styled(Span)`
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 0.3px;
  margin-bottom: 4px;
`;
const Percentage = styled(Span)`
  font-size: 18px;
  letter-spacing: 0.45px;
`;

const StatisticItem = ({ label, percentage, color }) => (
  <ListItem color={color}>
    <Label>{label}</Label>
    <Percentage>{percentage}%</Percentage>
  </ListItem>
);

StatisticItem.defaultProps = { label: '', percentage: 0 };
StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export default StatisticItem;
