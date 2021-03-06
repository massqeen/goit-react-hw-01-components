import styled from 'styled-components';

const Section = styled.section`
  background-color: #f0f3f6;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  max-width: 60%;
  box-shadow: 0 2px 2px rgba(2, 2, 2, 0.02);
  background-color: #fff;
  margin: 0 auto;
`;
const Title = styled.h2`
  display: ${(props) => (props.titleText ? 'flex' : 'none')};
  color: #475965;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 20px;
`;
const List = styled.ul`
  display: flex;
  width: 100%;
`;

export { Section, Wrapper, Title, List };
