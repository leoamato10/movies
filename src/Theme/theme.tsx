
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
            small: "12px",
            medium: "16px",
            large: "22px"
        }
    }
}

export default defaultTheme