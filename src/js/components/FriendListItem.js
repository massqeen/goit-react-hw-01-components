import PropTypes from 'prop-types';
import setAltAvatar from '../setAltAvatar';
import styled from 'styled-components';

const ListItem = styled.li`
  padding: 10px;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 9px 2px rgba(0, 0, 0, 0.75);
  width: 33%;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
const Status = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 20px;
  background-color: ${(props) => (props.isOnline ? '#23bf4a' : '#f3434a')};
`;
const Img = styled.img`
  height: 128px;
  width: 128px;
  border-radius: 8px;
  margin-right: 20px;
  background-size: contain;
`;
const Name = styled.p`
  font-weight: 700;
  font-size: 20px;
`;

const FriendListItem = ({ avatar, isOnline, name, noAvatar, id }) => (
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

FriendListItem.defaultProps = {
  isOnline: false,
  name: '',
};
FriendListItem.propTypes = {
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
  name: PropTypes.string,
  noAvatar: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default FriendListItem;
