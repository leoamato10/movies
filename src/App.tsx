import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from "./Theme/theme"
import { Provider } from 'react-redux';
import { store } from './Store/index';



import RootNavigator from './Navigators/RootNavigator';

const App = () => {

    return (
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <RootNavigator />
            </Provider>
        </ThemeProvider>
    )
}

export default App