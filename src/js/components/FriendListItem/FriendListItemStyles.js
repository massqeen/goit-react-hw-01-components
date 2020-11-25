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

export { ListItem, Status, Img, Name };
