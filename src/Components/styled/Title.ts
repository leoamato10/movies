import styled from 'styled-components/native';

export const Title = styled.Text`
color: ${props => props.color || props.theme.colors.primary}
font-size: ${props => props.size || props.theme.fonts.fontSizes.large}
font-weight: bold
${({isInWishlist}) => isInWishlist && `color: gold`}
`;
