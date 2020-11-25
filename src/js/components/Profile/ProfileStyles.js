import styled from 'styled-components';

const StyledProfile = styled.div`
  background-color: #e7ecf2;
  min-height: 504px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  min-height: 330px;
  min-width: 250px;
  box-shadow: 0 1px 3px rgba(191, 205, 222, 0.75);
`;
const Description = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 256px;
`;
const Name = styled.p`
  color: #122236;
  font-size: 18px;
  font-weight: 700;
`;
const P = styled.p`
  color: #768696;
`;
const Img = styled.img`
  height: 128px;
  width: 128px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

export { StyledProfile, Wrapper, Description, Name, P, Img };
