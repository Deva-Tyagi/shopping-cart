import React, { useEffect, useState } from 'react';
import './product.css';

const Product = ({ addCart = [], setAddCart }) => {
  const [product, setProduct] = useState([]);

  const fetchProduct = async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    setProduct(data);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const addToCart = (item) => {
    const presentItem = addCart.find((cartItem) => cartItem.id === item.id);
    if (presentItem) {
      setAddCart(
        addCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setAddCart([...addCart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setAddCart(addCart.filter((cartItem) => cartItem.id !== id));
  };

  return (
    <>
      <div className="container">
        <h1>Product List</h1>
        <ul>
          {product.map((item) => (
            <li key={item.id}>
              <img src={item.image} alt={item.title} style={{ width: '100px' }} />
              <h2>{item.title}</h2>
              <p>Price: ${item.price}</p>

              {addCart.some((cartItem) => cartItem.id === item.id) ? (
                <button className="cart-btn" onClick={() => removeFromCart(item.id)}>
                  Remove From Cart
                </button>
              ) : (
                <button className="cart-btn" onClick={() => addToCart(item)}>
                  Add To Cart
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Product;
