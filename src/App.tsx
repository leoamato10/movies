import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components'
import theme from "./Theme/theme"
import { store } from './Store/index';
import { Provider } from 'react-redux';

import RootNavigator from './Navigators/RootNavigator';

const App = () => {

    return (

        <SafeAreaProvider>
            <ThemeProvider theme={theme}>
                <Provider store={store}>
                    <RootNavigator />
                </Provider>
            </ThemeProvider>
        </SafeAreaProvider>

    )
}

export default App