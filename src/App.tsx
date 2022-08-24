import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from "./Theme/theme"
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { GlobalProvider } from './Context/Store';


import RootNavigator from './Navigators/RootNavigator';

const App = () => {

    return (

        <ThemeProvider theme={theme}>
            <GlobalProvider>
                <RootNavigator />
            </GlobalProvider>
        </ThemeProvider>

    )
}

export default App