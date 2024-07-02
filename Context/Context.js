import React, { createContext, useReducer, useContext } from 'react';
import { cartReducer, productReducer } from './reducer';
import { faker } from '@faker-js/faker';

const Cart = createContext();

const Context = ({ children }) => {
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: parseFloat(faker.commerce.price()),
    image: faker.image.fashion(),
    inStock: faker.datatype.boolean(),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.datatype.number({ min: 1, max: 5 }),
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    sort: '',
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: '',
  });

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};