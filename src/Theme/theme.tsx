
import { Dimensions } from 'react-native';
const { height, width } = Dimensions.get('screen');

const defaultTheme = {
    screenDimensions: {
        screenWidth: width,
        screenHeight: height,
    },
    colors: {
        primary: "black",
        secondary: "gold",
    },
    fonts: {
        fontFamily: "leo",
        fontSizes: {
            small: "12px",
            medium: "16px",
            large: "22px"
        }
    }
}

export default defaultTheme