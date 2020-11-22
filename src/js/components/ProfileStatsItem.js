import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListItem = styled.li`
  flex-basis: 33%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 74px;

  &:not(:last-child) {
    border-right: 1px solid #e4e9f0;
  }
`;
const Label = styled.span`
  color: #768696;
  font-size: 12px;
  line-height: 1.5;
  text-transform: capitalize;
`;
const Quantity = styled.span`
  color: #1f3349;
  font-weight: 700;
  line-height: 1.5;
`;

const ProfileStatsItem = ({ label, quantity }) => (
  <ListItem>
    <Label>{label}</Label>
    <Quantity>{quantity}</Quantity>
  </ListItem>
);

ProfileStatsItem.propTypes = {
  label: PropTypes.string.isRequired,
  quantity: PropTypes.number,
};
ProfileStatsItem.defaultProps = {
  quantity: 0,
};

export default ProfileStatsItem;
