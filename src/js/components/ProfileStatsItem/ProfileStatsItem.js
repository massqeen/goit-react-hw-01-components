import PropTypes from 'prop-types';
import { ListItem, Label, Quantity } from './ProfileStatsItemStyles';

const ProfileStatsItem = ({ label, quantity = 0 }) => (
  <ListItem>
    <Label>{label}</Label>
    <Quantity>{quantity}</Quantity>
  </ListItem>
);

ProfileStatsItem.propTypes = {
  label: PropTypes.string.isRequired,
  quantity: PropTypes.number,
};

export default ProfileStatsItem;
