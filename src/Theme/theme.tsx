
import { Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

const defaultTheme = {
    dimensions: {
        screenWidth: width,
        screenHeight: height,
        defaultMargin: "10px",
        defaultPadding: "10px",
    },
    colors: {
        primary: "black",
        secondary: "gold",
    },
    fonts: {
        fontFamily: "leo",
        fontSizes: {
            small: "14px",
            medium: "18px",
            large: "22px"
        }
    }
}

export default defaultTheme