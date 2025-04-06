import { Box, Flex, Button, Link, IconButton, Text, useColorModeValue } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { FaShoppingCart, FaUser, FaSearch } from 'react-icons/fa'

const Navbar = () => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'

  return (
    <Box
      bg="white"
      position="sticky"
      top={0}
      zIndex={10}
      borderBottom="1px"
      borderColor="gray.200"
    >
      <Flex maxW="container.xl" mx="auto" px={4} py={4} justify="space-between" align="center">
        {/* Logo */}
        <Link as={RouterLink} to="/">
          <Text fontSize="2xl" fontWeight="bold" color="black">
            WHAT THE FLEX
          </Text>
        </Link>
        
        {/* Desktop Navigation */}
        <Flex display={{ base: 'none', md: 'flex' }} gap={8} align="center">
          <Link as={RouterLink} to="/products" color="gray.600" _hover={{ color: 'black' }}>
            All Products
          </Link>
          <Link as={RouterLink} to="/oversized-tshirts" color="gray.600" _hover={{ color: 'black' }}>
            Oversized T-Shirts
          </Link>
          <Link as={RouterLink} to="/bottom-trends" color="gray.600" _hover={{ color: 'black' }}>
            The Bottom Trends
          </Link>
          <Link as={RouterLink} to="/winter-essentials" color="gray.600" _hover={{ color: 'black' }}>
            Winter Essentials
          </Link>
          <Link as={RouterLink} to="/bowling-shirts" color="gray.600" _hover={{ color: 'black' }}>
            Bowling Shirts
          </Link>
          <Link as={RouterLink} to="/denims" color="gray.600" _hover={{ color: 'black' }}>
            Denims By WTF
          </Link>
          <IconButton
            icon={<FaSearch />}
            variant="ghost"
            aria-label="Search"
            color="gray.600"
            _hover={{ color: 'black' }}
          />
          <Link as={RouterLink} to="/cart">
            <IconButton
              icon={<FaShoppingCart />}
              variant="ghost"
              aria-label="Shopping Cart"
              color="gray.600"
              _hover={{ color: 'black' }}
            />
          </Link>
          {isAuthenticated ? (
            <Button
              leftIcon={<FaUser />}
              variant="ghost"
              onClick={() => {
                localStorage.removeItem('isAuthenticated')
                window.location.reload()
              }}
            >
              Logout
            </Button>
          ) : (
            <Flex gap={2}>
              <Button
                as={RouterLink}
                to="/login"
                variant="ghost"
              >
                Login
              </Button>
              <Button
                as={RouterLink}
                to="/signup"
                colorScheme="black"
                variant="solid"
              >
                Sign Up
              </Button>
            </Flex>
          )}
        </Flex>

        {/* Mobile Menu Button */}
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          icon={<FaSearch />}
          variant="ghost"
          aria-label="Open Menu"
          color="gray.600"
          _hover={{ color: 'black' }}
        />
      </Flex>
    </Box>
  )
}

export default Navbar 