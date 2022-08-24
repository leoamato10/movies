import React, { createContext, useReducer, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Reducer from './Reducer';



const initialState = {
  wishlist: []
};

export const GlobalContext = createContext(initialState);

const storeData = async (state) => {
  try {
    const jsonValue = JSON.stringify(state.wishlist)
    await AsyncStorage.setItem('wishlist', jsonValue)
  } catch (e) {
    console.log('e', e);
  }
}

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('wishlist')
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log('e', e);
  }
}




export const GlobalProvider = props => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  useEffect(() => {
    async function rehydrate() {
      const storedState = await getData()
      if (storedState) {
        console.log('storedState', storedState);
        dispatch({ type: "REHYDRATE", payload: storedState });
      }
    }

    rehydrate()
  }, []);




  const addToWishlist = movie => {
    dispatch({ type: 'ADD_TO_WISHLIST', payload: movie });
  };

  const removeFromWishlist = id => {
    dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: id });
  };


  return (
    <GlobalContext.Provider
      value={{
        wishlist: state.wishlist,
        addToWishlist,
        removeFromWishlist,
      }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
