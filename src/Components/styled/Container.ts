import styled from 'styled-components/native';

export const Container = styled.View`
  ${props =>
    props.centered &&
    `
  justify-Content: center
  align-items: center
  flex:1
`};
`;
