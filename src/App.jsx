import React from "react"
import { BrowserRouter,Route,Routes } from "react-router-dom"
import SignUp from "./pages/Signup"
import Login from "./pages/Login"
import Homepage from "./pages/Homepage"
import Cart from "./pages/Cart"
import Offers from "./pages/Offers"
import About from "./pages/About"
import ItemDetails from "./pages/ItemDetails"
import Contact from "./pages/Contact"

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/:categoryName/:itemName" element={<ItemDetails />}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/login"  element={<Login/>}></Route>
        <Route path="/cart"  element={<Cart/>}></Route>
        <Route path="/about"  element={<About/>}></Route>
        <Route path="/contact"  element={<Contact/>}></Route>
        <Route path="/offers"  element={<Offers/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
    )
}

export default App
