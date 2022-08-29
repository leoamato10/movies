import { Dimensions, Platform } from 'react-native';
const { height, width } = Dimensions.get('screen');

const theme = {
    screenDimensions: {
        screenWidth: width,
        screenHeight: height,
    },
    colors: {
        primary: "black",
        secondary: "gold",
    },
    fonts: {
        primary: 'QTTheatre',
        fontSize: {
            small: "12px",
            medium: "16px",
            large: "22px"
        }
    }
}

export default theme