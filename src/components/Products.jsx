import { useState } from 'react'
import { Box, Container, Grid, Text, Select, Flex, Button, Image, Badge, useToast } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const Products = () => {
  const [sortBy, setSortBy] = useState('newest')
  const [filter, setFilter] = useState('all')
  const toast = useToast()

  // Mock product data
  const products = [
    {
      id: 1,
      name: 'Classic White T-Shirt',
      price: 999,
      category: 'T-Shirts',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      isNew: true
    },
    {
      id: 2,
      name: 'Black Denim Jacket',
      price: 89.99,
      category: 'men',
      image: 'https://source.unsplash.com/random/400x500/?jacket',
      isNew: false
    },
    {
      id: 3,
      name: 'Floral Summer Dress',
      price: 49.99,
      category: 'women',
      image: 'https://source.unsplash.com/random/400x500/?dress',
      isNew: true
    },
    {
      id: 4,
      name: 'Leather Crossbody Bag',
      price: 59.99,
      category: 'accessories',
      image: 'https://source.unsplash.com/random/400x500/?bag',
      isNew: false
    },
    {
      id: 5,
      name: 'Slim Fit Jeans',
      price: 2499,
      category: 'Jeans',
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      isNew: true
    },
    {
      id: 6,
      name: 'Silk Blouse',
      price: 79.99,
      category: 'women',
      image: 'https://source.unsplash.com/random/400x500/?blouse',
      isNew: false
    },
    {
      id: 7,
      name: 'Wool Scarf',
      price: 39.99,
      category: 'accessories',
      image: 'https://source.unsplash.com/random/400x500/?scarf',
      isNew: true
    },
    {
      id: 8,
      name: 'Canvas Sneakers',
      price: 59.99,
      category: 'men',
      image: 'https://source.unsplash.com/random/400x500/?sneakers',
      isNew: false
    }
  ]

  // Filter and sort products
  const filteredProducts = products
    .filter(product => filter === 'all' || product.category === filter)
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price
      if (sortBy === 'price-high') return b.price - a.price
      return 0
    })

  const handleAddToCart = (product) => {
    toast({
      title: 'Added to cart',
      description: `${product.name} has been added to your cart`,
      status: 'success',
      duration: 3000,
      isClosable: true
    })
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(price)
  }

  return (
    <Container maxW="container.xl" py={8}>
      {/* Header and Filters */}
      <Flex justify="space-between" align="center" mb={8} direction={{ base: 'column', md: 'row' }} gap={4}>
        <Text fontSize="2xl" fontWeight="bold">
          All Products
        </Text>
        <Flex gap={4}>
          <Select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            width="200px"
          >
            <option value="all">All Categories</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="accessories">Accessories</option>
          </Select>
          <Select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            width="200px"
          >
            <option value="newest">Newest First</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </Select>
        </Flex>
      </Flex>

      {/* Product Grid */}
      <Grid
        templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
        gap={8}
      >
        {filteredProducts.map((product) => (
          <Box
            key={product.id}
            bg="white"
            p={4}
            borderRadius="md"
            boxShadow="sm"
            _hover={{ boxShadow: 'md', transform: 'translateY(-4px)', transition: 'all 0.3s' }}
          >
            <Box position="relative">
              <Image
                src={product.image}
                alt={product.name}
                width="100%"
                height="300px"
                objectFit="cover"
                borderRadius="md"
              />
              {product.isNew && (
                <Badge
                  position="absolute"
                  top={2}
                  right={2}
                  colorScheme="green"
                  fontSize="sm"
                >
                  New
                </Badge>
              )}
            </Box>
            <Text mt={4} fontSize="lg" fontWeight="medium">
              {product.name}
            </Text>
            <Text color="gray.600" fontSize="lg" fontWeight="bold">
              {formatPrice(product.price)}
            </Text>
            <Button
              as={RouterLink}
              to={`/product/${product.id}`}
              mt={4}
              width="100%"
              colorScheme="black"
              variant="outline"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </Button>
          </Box>
        ))}
      </Grid>
    </Container>
  )
}

export default Products 