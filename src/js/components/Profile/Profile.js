import PropTypes from 'prop-types';
import ProfileStats from '../ProfileStats/ProfileStats';
import setAltAvatar from '../../setAltAvatar';
import {
  StyledProfile,
  Wrapper,
  Description,
  Name,
  P,
  Img,
} from './ProfileStyles';

const Profile = ({
  name,
  tag = '',
  location = 'Earth',
  avatar,
  stats,
  noAvatar,
}) => {
  return (
    <StyledProfile>
      <Wrapper>
        <Description>
          <Img
            onError={() => {
              setAltAvatar('.profile-avatar');
            }}
            src={avatar}
            data-src={noAvatar}
            alt="avatar"
            className="profile-avatar"
          />
          <Name>{name}</Name>
          <P>@{tag}</P>
          <P>{location}</P>
        </Description>
        <ProfileStats stats={stats} />
      </Wrapper>
    </StyledProfile>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
  noAvatar: PropTypes.string.isRequired,
};

export default Profile;
