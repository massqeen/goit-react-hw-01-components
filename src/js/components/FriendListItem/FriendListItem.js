import PropTypes from 'prop-types';
import setAltAvatar from '../../setAltAvatar';
import { ListItem, Status, Img, Name } from './FriendListItemStyles';

const FriendListItem = ({
  avatar,
  isOnline = false,
  name = 'John Doe',
  noAvatar,
  id,
}) => (
  <ListItem>
    <Status isOnline={isOnline} />
    <Img
      onError={() => {
        setAltAvatar(`.friend-avatar[data-id='${id}']`);
      }}
      src={avatar}
      data-src={noAvatar}
      data-id={id}
      alt="avatar"
      className="friend-avatar"
    />
    <Name>{name}</Name>
  </ListItem>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
  name: PropTypes.string,
  noAvatar: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default FriendListItem;
