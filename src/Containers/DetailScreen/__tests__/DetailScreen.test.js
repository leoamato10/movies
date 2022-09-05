import React from 'react';
import { fireEvent, render as rtlRender, screen } from '@testing-library/react-native';
import DetailScreen from '../DetailScreen';
import { Provider } from 'react-redux';
import { store } from '../../../Store';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';
import theme from '../../../Theme/theme';


const render = component =>
    rtlRender(<ThemeProvider theme={theme}>
        <Provider store={store}>
            <NavigationContainer>
                {component}
            </NavigationContainer>
        </Provider>
    </ThemeProvider>)

describe('HomeScreen', () => {

    fit('add movie to wishlist', async () => {

        const mockedRoute = { params: { movie: { id: 1 }, filmCategory: "" } }
        render(<DetailScreen route={mockedRoute} />)

        const addToWishlistButton = await screen.findByText('Add to wishlist')
        fireEvent.press(addToWishlistButton)
        const removeButton = screen.getByText('Remove')
        expect(removeButton).toBeDefined()

    })

})