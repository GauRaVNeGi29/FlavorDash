import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Homebar from './Homebar';
import Footer from './Footer';
import foodCategories from '../Data/Data';
import { Separator } from '@/components/ui/separator';
import delivery from '../images/delivery.png';
import recieve from '../images/recieve.png';



const ItemDetail = () => {
  const { categoryName, itemName } = useParams();
  const navigate = useNavigate();

  const category = foodCategories.find(category => category.category.toLowerCase() === categoryName.toLowerCase());
  const item = category.items.find(item => item.name.toLowerCase() === itemName.toLowerCase());

  if (!item) {
    return <div>Item not found!</div>;
  }

  const deliveryTime = '30 min';
  const deliveryDistance = '4 km';
  const [isHovering, setIsHovering] = useState(false);

  const getCart = () => {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
  };
  
  const saveCart = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  
  const addToCart = (item) => {
    const cart = getCart();
    const existingItemIndex = cart.findIndex(i => i.name === item.name);
  
    if (existingItemIndex !== -1) {
      cart[existingItemIndex].quantity += 1;
    } else {
      cart.push({ ...item, quantity: 1 });
    }
  
    saveCart(cart);
    navigate("/cart");
  };

  return (
    <div className="bg-slate-900">
      <Homebar />
      <h1 className="left-1/5 ml-20 mt-5 text-5xl text-violet-300 font-bold mb-2">{item.name}</h1>
      <div className="flex ">
        <div className="w-1/2 ml-10 m-5 border border-violet-600 shadow-xl shadow-violet-500/50 rounded-lg overflow-hidden ">
          <img src={item.image} alt={item.name} className={`w-full h-full ${isHovering ? 'hidden' : 'block'}`} />
          <video
            src={item.video}
            className={`absolute top-0 left-0 w-full h-full object-cover ${isHovering ? 'block' : 'hidden'}`}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            autoPlay
            muted
            loop
          />
        </div>
        <div className="w-1/2 mr-10 my-5 p-4 flex flex-col justify-between bg-slate-800 border border-violet-300 rounded-lg">
          <div>
            <p className="text-lg text-blue-300 mb-2">{item.description}</p>
            <p className="text-lg text-blue-300 mb-2">Price: {item.price}</p>
            <p className="text-lg text-blue-300 mb-2">Rating: {item.rating}</p>
          </div>
          <div>
            <button 
              onClick={() => addToCart(item)}
              className='mt-4 text-blue-300 border border-violet-500 hover:bg-slate-800 p-3 rounded-lg shadow-md shadow-violet-500/50'>
              Add to Cart
            </button>
          </div>
          <div className="flex items-center mt-6">
            <div className="mr-4">
              <img src={delivery} alt="Delivery" className="w-10 h-10" />
            </div>
            <div>
              <p className="text-lg text-blue-300">Estimated Delivery Time: {deliveryTime}</p>
            </div>
          </div>
          <div className="flex items-center mt-2">
            <div className="mr-4">
              <img src={recieve} alt="Receiving" className="w-10 h-10" />
            </div>
            <div>
              <p className="text-lg text-blue-300">Delivery Distance: {deliveryDistance}</p>
            </div>
          </div>
        </div>
      </div>

      <br /><br />
      <div className='mx-10'>
        <Separator />
      </div>
      <br /><br />
      <h2 className="px-10 text-4xl font-bold text-violet-300 mb-10">Recommended</h2>

      <div className="flex flex-wrap mx-10">
        {category.items.map((item, idx) => (
          <div key={idx} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-6 mb-20">
            <a href={`/${category.category.toLowerCase()}/${item.name && item.name.toLowerCase()}`}>
              <div className="bg-violet-200 hover:bg-violet-400 border border-violet-300 hover:border-violet-600 shadow-xl shadow-violet-500/50 rounded-lg overflow-hidden shadow-md">
                <img src={item.image} className="w-full h-32 object-cover" alt={item.name} />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-500">{item.name}</h3>
                  <p className="text-sm "><span className="text-green-800">&#9733;</span> {item.rating} <span className="mx-5">|</span> {item.price}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
      <br /><br /><br /><br />
      <Footer />
    </div>
  );
};

export default ItemDetail;
