import React from "react";
// import { Input } from "@/components/ui/input";
import Homebar from "./Homebar";
import Scroll from "./Scroll";
import FoodMenu from "./FoodMenu";
import Footer from "./Footer";

  

export default function Homepage(){
    return(
        <div className="bg-slate-900" >
            <div>
            <Homebar/> 
            </div>
            
            <div className="mt-0">
            <Scroll/>

            </div>
            
            <div className="font-sans font-medium mt-4 left-1/4 right-1/4 absolute italic text-violet-600 " >
                <h3 className="text-center justify-center text-5xl ">Whats on your mind?</h3>
            </div>
            <div className="font-sans text-lg leading-6 mt-20 left-1/10 right-1/10">
              <p className="left-1/10 font-thin right-1/10 text-center justify-center text-violet-400">Welcome to FavorDash, where every craving meets its match! Embark on a culinary adventure like no<br/> other as you explore a world of flavors, convenience, and delightful surprises.<br/> Get ready to indulge in a symphony of tastes and discover new favorites with every click.</p>
            </div>
            
            <FoodMenu />

            <Footer/>

            

            
            
            
            




        </div>
    )
}

