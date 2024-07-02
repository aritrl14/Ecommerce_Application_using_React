import React from 'react';
import { CartState } from '../Context/Context';

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const removeFromCart = (id) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: { id },
    });
  };

  const subtotal = cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0);

  return (
    <div className="cart">
      <h2>Cart</h2>
      <div className="cartItems">
        {cart.map((prod) => (
          <div key={prod.id} className="cartItem">
            <img src={prod.image} alt={prod.name} />
            <div>
              <h3>{prod.name}</h3>
              <p>${prod.price}</p>
              <button onClick={() => removeFromCart(prod.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <h3>Subtotal: ${subtotal.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;