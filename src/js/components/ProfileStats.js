import PropTypes from 'prop-types';
import ProfileStatsItem from './ProfileStatsItem';
import styled from 'styled-components';

const List = styled.ul`
  border: 1px solid #e4e9f0;
  background-color: #f3f6f9;
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  height: 100%;
`;

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
