import React from 'react';
import './cart.css'

const Cart = ({ addCart, setAddCart }) => {
  
  const increaseQuantity = (id) => {
    const updatedCart = addCart.map(item => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setAddCart(updatedCart);
  };

  
  const decreaseQuantity = (id) => {
    const updatedCart = addCart.map(item => {
        if (item.id === id) {
          const newQuantity = item.quantity - 1;
          return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
        }
        return item;
      }).filter(item => item !== null); 

    setAddCart(updatedCart);
  };

  
  const subTotal = () => {
    return addCart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <>
      <h1>My Cart</h1>
      <h3>Sub-Total: ${subTotal()}</h3>
      <div className="cartItem">
        {
          addCart.map((item) => (
            <div key={item.id}>
              <img src={item.image} alt={item.title} style={{ width: '100px' }} />
              <h2>{item.title}</h2>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => decreaseQuantity(item.id)}>-</button>
              <button onClick={() => increaseQuantity(item.id)}>+</button>
            </div>
          ))
        }
      </div>
    </>
  );
};

export default Cart;
