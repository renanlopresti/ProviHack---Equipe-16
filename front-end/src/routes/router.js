import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "../pages/homePage/homePage";
import LoginPage from "../pages/loginPage/loginPage";


export default function Router() {

 return (
  <BrowserRouter>
   <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='*' element={<ErrorPage />} />
   </Routes>
  </BrowserRouter>
 )
}