import styled from 'styled-components/native';

export const Parragraph = styled.Text`
color: ${props => props.color || props.theme.colors.primary}
font-size: ${props => props.size || props.theme.fonts.fontSize.medium}
font-weight: normal

`;
