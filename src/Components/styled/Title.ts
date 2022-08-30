import {StyledProps} from 'styled-components';
import styled from 'styled-components/native';

type TextProps = StyledProps<{
  color?: string;
  size?: string;
  isInWishlist?: boolean;
}>;

export const Title = styled.Text<TextProps>`
color: ${props => props.color || props.theme.colors?.primary}
font-size: ${props => props.size || props.theme.fontSize?.large}
font-weight: bold
${({isInWishlist}) => isInWishlist && `color: gold`}
`;
