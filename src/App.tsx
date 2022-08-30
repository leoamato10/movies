import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { store } from './Store/index';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';

import theme from "./Theme/theme"
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