
import { Dimensions } from 'react-native';
const { height } = Dimensions.get('window');

const defaultTheme = {
    containers: {
        androidSafeArea: 50,
    },
    colors: {
        primary: "black"
    }
}

export default defaultTheme