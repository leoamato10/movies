import {StyledProps} from 'styled-components';
import styled from 'styled-components/native';

type TextProps = StyledProps<{
  color?: string;
  size?: string;
}>;

export const Parragraph = styled.Text<TextProps>`
color: ${props => props.color || props.theme.colors.primary}
font-size: ${props => props.size || props.theme.fontSize.medium}
font-weight: normal

`;
