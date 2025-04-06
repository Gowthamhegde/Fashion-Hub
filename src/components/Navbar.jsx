import { Box, Flex, Link, IconButton, useColorModeValue } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { FiShoppingCart, FiMenu } from 'react-icons/fi'

const Navbar = () => {
  return (
    <Box bg={useColorModeValue('white', 'gray.800')} px={4} py={4} boxShadow="sm">
      <Flex maxW="1200px" mx="auto" justify="space-between" align="center">
        <Link as={RouterLink} to="/" fontSize="xl" fontWeight="bold">
          Your Shop Name
        </Link>
        
        <Flex display={{ base: 'none', md: 'flex' }} gap={8}>
          <Link as={RouterLink} to="/">Home</Link>
          <Link as={RouterLink} to="/products">Products</Link>
          <Link as={RouterLink} to="/cart">
            <IconButton
              icon={<FiShoppingCart />}
              variant="ghost"
              aria-label="Shopping Cart"
            />
          </Link>
        </Flex>

        <IconButton
          display={{ base: 'flex', md: 'none' }}
          icon={<FiMenu />}
          variant="ghost"
          aria-label="Open Menu"
        />
      </Flex>
    </Box>
  )
}

export default Navbar 