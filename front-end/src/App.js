import React from "react";
import Router from "./routes/router";
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './constants/theme'
import GlobalState from './contexts/GlobalState'

function App() {
 return (
  <GlobalState>
   <ThemeProvider theme={theme}>
    <Router />
   </ThemeProvider>
  </GlobalState>
 );
}

export default App;
