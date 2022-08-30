import { Dimensions, } from 'react-native';
const { height, width } = Dimensions.get('screen');


export interface ScreenDimension {
    screenWidth: number;
    screenHeight: number;
}

export interface Color {
    primary: string;
    secondary: string;
}

export interface Font {
    primary: string;
}

export interface FontSize {
    small: string;
    medium: string;
    large: string;
}

export interface ThemeInterface {
    screenDimensions: ScreenDimension;
    colors: Color;
    fonts: Font;
    fontSize?: FontSize;
}


const theme: ThemeInterface = {
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

    },
    fontSize: {
        small: "12px",
        medium: "16px",
        large: "22px"
    }
}

export default theme


