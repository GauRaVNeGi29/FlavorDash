import React from "react";
import { Separator } from "@/components/ui/separator";
import foodCategories from "../Data/Data";

const FoodMenu = () => {
  return (
    <div className="px-6 py-8 max-w-screen-xl mx-auto">
      {foodCategories.map((category, index) => (
        <div key={index}>
          <h2 className="px-10 text-4xl font-bold text-violet-300 mb-4">{category.category}</h2>
          <br />
          <div className="flex flex-wrap mx-10">
            {category.items.map((item, idx) => (
              <div key={idx} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-6 mb-20">
                  <a href={`/${category.category.toLowerCase()}/${item.name && item.name.toLowerCase()}`}>
                <div className="bg-violet-200 hover:bg-violet-400 border border-violet-300 hover:border-violet-600 shadow-xl shadow-violet-500/50 rounded-lg overflow-hidden shadow-md">
                    <img src={item.image} className="w-full h-32 object-cover" alt={item.name} />
                  <div className="p-4">
                      <a href={`/${category.category.toLowerCase()}/${item.name && item.name.toLowerCase()}`}>
                    <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-500">
                        {item.name}
                    </h3>
                    <p className="text-sm ">
                      <span className="text-green-800">&#9733;</span> {item.rating} <span className="mx-5">|</span> {item.price}
                    </p>
                      </a>
                    {/* <a href="/cart" className="block mt-2 text-sm font-semibold text-blue-500 hover:underline">Add to Cart</a> */}
                  </div>
                </div>
                  </a>
              </div>
            ))}
          </div>
          {index < foodCategories.length - 1 && <Separator />} 
          <br />
          <br />
        </div>
      ))}
    </div>
  );
};

export default FoodMenu;
