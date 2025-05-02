import React from 'react';
import Homebar from './Homebar';
import Footer from './Footer';
import { Separator } from '@/components/ui/separator';

const Offers = () => {
  return (
      <div className='bg-slate-900'>
        <Homebar/>
          <div className="container mx-auto mt-8">
              <h1 className="text-4xl px-10 font-bold text-violet-300 mb-4">Special Offers</h1>
              
              <br />
              <div className="mx-30 grid grid-cols-1 sm:grid-cols-1 gap-6">
                  <div className="mx-20 p-7 w-1/2 flex bg-violet-200 hover:bg-violet-300 border border-violet-300 hover:border-violet-600 shadow-xl shadow-violet-500/50 rounded-lg overflow-hidden shadow-md">
                      <img
                          className="w-24 h-24 rounded-full object-cover mr-4"
                          src="burger.jpg"
                          alt="Burger"
                      />
                      <div>
                          <h2 className="text-xl font-bold mb-2">50% Off on Family Meals</h2>
                          <p className="text-gray-700">
                              Enjoy a delicious family meal at half the price! This offer includes a variety of
                              dishes to satisfy everyone's taste buds. Don't miss out!
                          </p>
                          <p className="text-gray-500">Valid until: 31/12/2024 <a href="/cart" className='px-10 mt-2 text-sm font-semibold text-blue-500 hover:underline'>Add to Cart</a> </p>
                      </div>
                  </div>
                  <div className="mx-20 p-7 w-1/2 flex bg-violet-200 hover:bg-violet-300 border border-violet-300 hover:border-violet-600 shadow-xl shadow-violet-500/50 rounded-lg overflow-hidden shadow-mdlex">
                      <img
                          className="w-24 h-24 rounded-full object-cover mr-4"
                          src="combo.jpg"
                          alt="Combo"
                      />
                      <div>
                          <h2 className="text-xl font-bold mb-2">Combo Deal: Burger + Fries</h2>
                          <p className="text-gray-700">
                              Get a mouthwatering burger and a side of crispy fries at an unbeatable price! Perfect
                              for a quick and satisfying meal on the go.
                          </p>
                          <p className="text-gray-500">Valid until: 28/02/2024 <a href="/cart" className='px-10 mt-2 text-sm font-semibold text-blue-500 hover:underline'>Add to Cart</a> </p>
                      </div>
                  </div>
                  <div className="mx-20 p-7 w-1/2 flex bg-violet-200 hover:bg-violet-300 border border-violet-300 hover:border-violet-600 shadow-xl shadow-violet-500/50 rounded-lg overflow-hidden shadow-mdlex">
                      <img
                          className="w-24 h-24 rounded-full object-cover mr-4"
                          src="happy-hour.jpg"
                          alt="Happy Hour"
                      />
                      <div>
                          <h2 className="text-xl font-bold mb-2">Happy Hour Specials</h2>
                          <p className="text-gray-700">
                              Join us during our happy hour for discounted drinks and appetizers. It's the perfect
                              way to unwind after a long day!
                          </p>
                          <p className="text-gray-500">Valid until: 30/06/2024 <a href="/cart" className='px-10 mt-2 text-sm font-semibold text-blue-500 hover:underline'>Add to Cart</a> </p>
                      </div>
                  </div>
                  <div className="mx-20 p-7 w-1/2 flex bg-violet-200 hover:bg-violet-300 border border-violet-300 hover:border-violet-600 shadow-xl shadow-violet-500/50 rounded-lg overflow-hidden shadow-mdlex">
                      <img
                          className="w-24 h-24 rounded-full object-cover mr-4"
                          src="brunch.jpg"
                          alt="Brunch"
                      />
                      <div>
                          <h2 className="text-xl font-bold mb-2">Weekend Brunch Buffet</h2>
                          <p className="text-gray-700">
                              Indulge in our lavish weekend brunch buffet featuring an array of delectable dishes,
                              desserts, and beverages. A feast fit for royalty!
                          </p>
                          <p className="text-gray-500">Valid until: 31/03/2024 <a href="/cart" className='px-10 mt-2 text-sm font-semibold text-blue-500 hover:underline'>Add to Cart</a> </p>
                      </div>
                  </div>
              </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          
      <Footer />    
      </div>
  );
};

export default Offers;
