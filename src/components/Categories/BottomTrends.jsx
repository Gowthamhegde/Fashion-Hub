import { Box, Grid, Image, Text, Button, Badge, useToast } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const BottomTrends = () => {
  const toast = useToast()

  const products = [
    {
      id: 1,
      name: 'Cargo Pants - Black',
      price: 1999,
      originalPrice: 2499,
      discount: 20,
      image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      description: 'Classic black cargo pants with multiple pockets'
    },
    {
      id: 2,
      name: 'Jogger Pants - Grey',
      price: 1499,
      originalPrice: 1999,
      discount: 25,
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      description: 'Comfortable grey jogger pants with elastic waistband'
    },
    {
      id: 3,
      name: 'Track Pants - Navy',
      price: 1799,
      originalPrice: 2299,
      discount: 22,
      image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      description: 'Stylish navy track pants with side stripes'
    },
    {
      id: 4,
      name: 'Cargo Shorts - Khaki',
      price: 1299,
      originalPrice: 1699,
      discount: 24,
      image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      description: 'Casual khaki cargo shorts for summer wear'
    }
  ]

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
    <Box>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>The Bottom Trends</Text>
      <Text color="gray.600" mb={8}>
        Discover our latest collection of trendy bottom wear
      </Text>
      <Grid
        templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
        gap={6}
      >
        {products.map((product) => (
          <Box
            key={product.id}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            _hover={{ transform: 'translateY(-4px)', transition: 'all 0.2s' }}
          >
            <Link as={RouterLink} to={`/products/${product.id}`}>
              <Image
                src={product.image}
                alt={product.name}
                height="300px"
                width="100%"
                objectFit="cover"
              />
            </Link>
            <Box p={4}>
              <Badge colorScheme="red" mb={2}>
                {product.discount}% OFF
              </Badge>
              <Text fontWeight="semibold" fontSize="lg" mb={2}>
                {product.name}
              </Text>
              <Text color="gray.600" fontSize="sm" mb={2}>
                {product.description}
              </Text>
              <Flex align="center" gap={2} mb={4}>
                <Text color="gray.600" textDecoration="line-through">
                  {formatPrice(product.originalPrice)}
                </Text>
                <Text color="red.500" fontWeight="bold">
                  {formatPrice(product.price)}
                </Text>
              </Flex>
              <Button
                colorScheme="black"
                width="100%"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </Button>
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  )
}

export default BottomTrends 