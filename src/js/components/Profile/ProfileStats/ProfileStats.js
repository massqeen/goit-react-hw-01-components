import PropTypes from 'prop-types';
import ProfileStatsItem from './ProfileStatsItem/ProfileStatsItem';
import List from './ProfileStatsStyles';

const ProfileStats = ({ stats }) => (
  <List>
    {Object.entries(stats).map((entry, index) => (
      <ProfileStatsItem key={index} label={entry[0]} quantity={entry[1]} />
    ))}
  </List>
);

ProfileStats.propTypes = {
  stats: PropTypes.object.isRequired,
};

export default ProfileStats;
