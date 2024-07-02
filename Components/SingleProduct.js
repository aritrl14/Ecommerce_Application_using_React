import React from 'react';
import { CartState } from '../Context/Context';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import PropTypes from 'prop-types';

const SingleProduct = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const navigate = useNavigate(); // Initialize navigate function

  const addToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: prod,
    });
    navigate('/cart'); // Use navigate function to redirect
  };

  return (
    <div className="singleProduct">
      <img src={prod.image} alt={prod.name} />
      <h3>{prod.name}</h3>
      <p>${prod.price}</p>
      <p>{prod.inStock ? 'In Stock' : 'Out of Stock'}</p>
      <p>{prod.fastDelivery ? 'Fast Delivery' : 'Standard Delivery'}</p>
      <p>Rating: {prod.ratings}</p>
      {cart.some((p) => p.id === prod.id) ? (
        <button disabled>Added to Cart</button>
      ) : (
        <button onClick={addToCart}>Add to Cart</button>
      )}
    </div>
  );
};

SingleProduct.propTypes = {
  prod: PropTypes.object.isRequired,
};

export default SingleProduct;
