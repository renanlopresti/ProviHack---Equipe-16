import React, { useState } from "react";
import { GlobalContext } from "./GlobalStateContext";


const GlobalState = (props) => {


 const states = {

 }
 const setters = {

 }
 const clears = {  }

 return (
  <GlobalContext.Provider value={{ states, setters, clears }}>
   {props.children}
  </GlobalContext.Provider>
 );
};

export default GlobalState;