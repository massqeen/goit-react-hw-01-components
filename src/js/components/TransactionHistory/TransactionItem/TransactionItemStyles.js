import styled from 'styled-components';

const Tr = styled.tr`
  color: #5c6975;
  font-size: 15px;
  font-weight: 300;
  line-height: 30px;
  letter-spacing: 0.45px;
  &:nth-child(even) {
    background-color: #ecf2f3;
`;
const Data = styled.td`
  color: #5c6975;
  font-size: 15px;
  font-weight: 300;
  line-height: 30px;
  letter-spacing: 0.45px;
  padding: 10px;
  text-align: center;
  border: 2px solid #e0e6e7;
`;
const Type = styled(Data)`
  text-transform: capitalize;
`;
const Currency = styled(Data)`
  text-transform: uppercase;
`;

export { Tr, Data, Type, Currency };
