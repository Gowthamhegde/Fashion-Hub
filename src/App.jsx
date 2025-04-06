import { Box, Container } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Products from './components/Products'
import ProductDetail from './components/ProductDetail'
import Cart from './components/Cart'
import Footer from './components/Footer'
import Login from './components/Auth/Login'
import Signup from './components/Auth/Signup'
import OversizedTshirts from './components/Categories/OversizedTshirts'
import BottomTrends from './components/Categories/BottomTrends'
import WinterEssentials from './components/Categories/WinterEssentials'
import BowlingShirts from './components/Categories/BowlingShirts'
import Denims from './components/Categories/Denims'

const App = () => {
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Navbar />
      <Container maxW="container.xl" flex="1" py={8}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/oversized-tshirts" element={<OversizedTshirts />} />
          <Route path="/bottom-trends" element={<BottomTrends />} />
          <Route path="/winter-essentials" element={<WinterEssentials />} />
          <Route path="/bowling-shirts" element={<BowlingShirts />} />
          <Route path="/denims" element={<Denims />} />
        </Routes>
      </Container>
      <Footer />
    </Box>
  )
}

export default App
