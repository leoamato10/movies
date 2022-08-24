import React from 'react'
import { GlobalProvider } from './Context/Store';

import RootNavigator from './Navigators/RootNavigator';

const App = () => {
    return (

        <GlobalProvider>
            <RootNavigator />
        </GlobalProvider>

    )
}

export default App