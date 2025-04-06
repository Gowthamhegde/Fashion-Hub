import { Box, Grid, Image, Text, Button, Badge, useToast, Flex, Link } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const BowlingShirts = () => {
  const toast = useToast()

  const products = [
    {
      id: 1,
      name: 'Classic Bowling Shirt - Blue',
      price: 2499,
      originalPrice: 2999,
      discount: 17,
      image: 'https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      description: 'Classic blue bowling shirt with contrast trim'
    },
    {
      id: 2,
      name: 'Retro Bowling Shirt - Red',
      price: 2299,
      originalPrice: 2799,
      discount: 18,
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      description: 'Vintage style red bowling shirt with retro pattern'
    },
    {
      id: 3,
      name: 'Modern Bowling Shirt - Black',
      price: 2699,
      originalPrice: 3299,
      discount: 18,
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      description: 'Contemporary black bowling shirt with modern fit'
    },
    {
      id: 4,
      name: 'Casual Bowling Shirt - White',
      price: 2199,
      originalPrice: 2699,
      discount: 19,
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      description: 'Casual white bowling shirt perfect for everyday wear'
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
      <Text fontSize="2xl" fontWeight="bold" mb={4}>Bowling Shirts</Text>
      <Text color="gray.600" mb={8}>
        Classic and modern bowling shirts for every occasion
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

export default BowlingShirts 