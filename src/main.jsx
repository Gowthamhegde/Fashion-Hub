import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

// Extend the theme to include custom colors, fonts, etc
const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'black'
      }
    }
  },
  components: {
    Button: {
      variants: {
        solid: {
          bg: 'black',
          color: 'white',
          _hover: {
            bg: 'gray.800'
          }
        },
        outline: {
          borderColor: 'black',
          color: 'black',
          _hover: {
            bg: 'black',
            color: 'white'
          }
        }
      }
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
)
