import React from 'react';
import { fireEvent, render as rtlRender, screen } from '@testing-library/react-native';
import HomeScreen from '../HomeScreen';
import { Provider } from 'react-redux';
import { store } from '../../../Store';
import { NavigationContainer } from '@react-navigation/native';


const render = component =>
  rtlRender(<Provider store={store}>
    <NavigationContainer>
      {component}
    </NavigationContainer>
  </Provider>);

describe('HomeScreen', () => {

  test('should navigate to wishlist screen', async () => {
    const navigate = jest.fn()
    render(<HomeScreen navigation={{ navigate }} />)

    const navigationButton = await screen.findByText('View wishlist')
    fireEvent.press(navigationButton, navigate)

    expect(navigate).toHaveBeenCalledWith("WhishListScreen");

  })

})