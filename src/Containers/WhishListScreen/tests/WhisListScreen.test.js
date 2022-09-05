import React from 'react';
import { render as rtlRender, screen } from '@testing-library/react-native';
import WhishListScreen from '../WhishListScreen';
import { Provider } from 'react-redux';
import { store } from '../../../Store';

const render = component =>
  rtlRender(<Provider store={store}>{component}</Provider>);

describe('WhisListScreen', () => {
  it('should display text on screen', () => {
    render(<WhishListScreen />);
    const initalText = screen.queryByText('Add movies to your wishlist');
    expect(initalText).toBeTruthy();
  });
});
