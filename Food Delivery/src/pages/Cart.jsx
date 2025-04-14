import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Homebar from './Homebar';
import Footer from './Footer';

const getCart = () => {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
};

const saveCart = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);  
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setCartItems(getCart());
  }, []);

  const incrementQuantity = (index) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity += 1;
    setCartItems(updatedCart);
    saveCart(updatedCart);
  };

  const decrementQuantity = (index) => {
    const updatedCart = [...cartItems];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
    } else {
      updatedCart.splice(index, 1);
    }
    setCartItems(updatedCart);
    saveCart(updatedCart);
  };

  const removeItem = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
    saveCart(updatedCart);
  };

  const totalPrice = cartItems.reduce((total, item) => total + (parseFloat(item.price) * item.quantity), 0);

  const clearCart = () => {
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 4000);
    localStorage.removeItem("cart");
    setCartItems([]);
  };

  return (
    <div className="bg-slate-900 min-h-screen">
      <Homebar />
      <div className="container mx-auto px-6 py-8 min-h-screen">
        <h1 className="text-4xl font-bold text-violet-300 mb-6">Your Cart</h1>
        {cartItems.length === 0 ? (
          <div className="text-center mt-20">
            <p className="text-blue-300 text-2xl mb-4">Your cart is empty!</p>
            <Link to="/">
              <button className="px-6 py-3 bg-violet-500 text-white rounded-lg hover:bg-violet-600 text-lg shadow-md shadow-violet-500/50">
                Go to Home & Shop More
              </button>
            </Link>
          </div>
        ) : (
          <div>
            {cartItems.map((item, index) => (
              <div key={index} className="flex items-center justify-between bg-slate-800 border border-violet-300 rounded-lg p-4 mb-4">
                <div className="flex items-center">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded mr-4" />
                  <div>
                    <h2 className="text-xl font-semibold text-violet-200">{item.name}</h2>
                    <p className="text-blue-300">Price: {item.price}</p>
                    <p className="text-blue-300">Quantity: {item.quantity}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button onClick={() => decrementQuantity(index)} className="px-3 py-1 bg-violet-500 text-white rounded hover:bg-violet-600">-</button>
                  <button onClick={() => incrementQuantity(index)} className="px-3 py-1 bg-violet-500 text-white rounded hover:bg-violet-600">+</button>
                  <button onClick={() => removeItem(index)} className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">Remove</button>
                </div>
              </div>
            ))}
            {/* <div className="text-right text-violet-200 text-2xl font-semibold mt-6">
              Total: ₹{totalPrice.toFixed(2)}
            </div> */}
          </div>
        )}

      </div>
        {cartItems.length > 0 && (
          <div className="text-center mb-8">
            <button
              onClick={clearCart}
              className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 text-lg shadow-md shadow-green-500/50"
            >
              Check out
            </button>
          </div>
        )}
         {showModal && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
              <div className="bg-slate-800 p-8 rounded-lg text-center max-w-sm mx-auto">
                <h2 className="text-3xl font-semibold text-violet-300 mb-4">Thank You for Your Purchase!</h2>
                <p className="text-lg text-blue-300 mb-4">Your order has been successfully placed. Here are your order details:</p>
                <ul className="text-left text-blue-300 mb-4">
                  {cartItems.map((item, index) => (
                    <li key={index} className="mb-2">
                      {item.name} - ₹{(parseFloat(item.price) * item.quantity).toFixed(2)} (x{item.quantity})
                    </li>
                  ))}
                </ul>
                <p className="text-xl font-semibold text-violet-200">Total: ₹{totalPrice.toFixed(2)}</p>
                <div className="mt-4">
                  <button
                    onClick={() => setShowModal(false)}
                    className="px-6 py-2 bg-violet-500 text-white rounded-lg hover:bg-violet-600"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
      <Footer />
    </div>
  );
};

export default Cart;
