import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import home from '../images/home.png';
import offer from '../images/offer.png';
import cart from '../images/cart.png';
import login from '../images/login.png';


export default function Homebar() {
    return (
        <div className="flex items-center justify-between bg-violet-200 p-4">
            
            <div className="flex items-center">
                {/* <img src="o.png" alt="Logo" className="h-10 w-10" /> */}
                <Link to="/">
                    <Button className=" bg-violet-200 hover:bg-violet-200 text-3xl italic font-semibold text-blue-600 hover:text-blue-800">FlavorDash</Button>
                </Link>
            </div>

        
            {/* <div className="flex-grow mx-4">
                <Input id="search" type="text" placeholder="Search for anything" className="placeholder:italic text-violet-700 boder border-violet-500 hover:border-violet-700 h-10 w-3/5 " />
            </div> */}

            <div className="flex items-center bg-violet-200 rounded-full py-0 px-4 py-2 shadow-lg border shadow-blue-500/50 border-blue-800 h-10 w-1/3">
                <input
                    type="text"
                    className="flex-grow bg-transparent outline-none placeholder-gray-500 text-gray-700"
                    placeholder="Search..."
                />
                <button className="ml-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-2 py-1 rounded-full transition duration-300">
                    Search
                </button>
            </div>

        
            <div className="flex items-center space-x-8">
                <a href="/" >
                    <img src={home} alt="home" className="w-11 h-11" />
                </a>
                <a href="/offers" >
                    <img src={offer} alt="offer" className="w-12 h-12" />
                </a>
                <a href="/cart" >
                    <img src={cart} alt="cart" className="w-11 h-11" />
                </a>
                <a href="/login" >
                    <img src={login} alt="login" className="w-12 h-13" />
                </a>
            </div>
        </div>

        
    );
}
