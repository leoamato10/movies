import { StyledProps } from 'styled-components';
import styled from 'styled-components/native';

type ViewProps = StyledProps<{
  centered?: string;
}>;

export const Container = styled.View<ViewProps>`
  ${props =>
    props.centered &&
    `
  justify-Content: center
  align-items: center
  flex:1
  `};
`;
