import styled from 'styled-components/native';
import defaultTheme from '../../Theme/theme';

import { Title, Container, Button } from '../../Components/styled';
import { StyleSheet } from 'react-native';
const { screenHeight } = defaultTheme.screenDimensions;

export const CustomContainer = styled(Container)`
  margin: 10px;
  width: 45%;
  height: ${screenHeight * 0.3 + 'px'};
  justify-content: space-between;
`;

export const CustomButton = styled(Button)`
  ${({ filmCategory }) =>
    filmCategory === 'Top Rated' && `background-color: #d13f51`}
  ${({ isInWishlist }) => isInWishlist && `background-color: black`}
`;

export const CustomButtonText = styled(Title)`
  ${({ filmCategory }) => filmCategory === 'Top Rated' && `color: white`}
  ${({ isInWishlist }) => isInWishlist && `background-color: black`}
`;

export const styles = StyleSheet.create({
  imageContainer: {
    margin: 10,
    width: '45%',
    height: screenHeight * 0.3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,

    elevation: 9,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25
  },
  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderRadius: 25
  },
  posterImage: {
    flex: 1
  },

  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20
  },
  subTitle: {
    fontSize: 16,
    opacity: 0.8
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  buttonContainer: {
    position: 'absolute',
    zIndex: 999,
    elevation: 9,
    top: 45,
    paddingHorizontal: 20
  },
  infoAreaContainer: { height: screenHeight / 2, justifyContent: 'center' }
});
