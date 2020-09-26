import React from 'react'
import SearchBar from './LandingPage'
import {
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles"

import theme from '../theme/defaultTheme'
const App = () => {
  
  return (
    <>
      <ThemeProvider theme={theme} >
         <SearchBar/>
        </ThemeProvider>
    </>
  )
}

export default App
