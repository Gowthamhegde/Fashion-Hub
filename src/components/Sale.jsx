import { Box, Grid, Image, Text, Button, Badge, useToast } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const Sale = () => {
  const toast = useToast()

  // Sample sale products
  const saleProducts = [
    {
      id: 9,
      name: 'Oversized Hoodie',
      price: 1999,
      originalPrice: 2999,
      discount: 33,
      image: 'https://images.unsplash.com/photo-1556821840-3a6f7110caf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'Hoodies'
    },
    {
      id: 10,
      name: 'Slim Fit Chinos',
      price: 1499,
      originalPrice: 2499,
      discount: 40,
      image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'Pants'
    },
    {
      id: 11,
      name: 'Polo T-Shirt',
      price: 799,
      originalPrice: 1299,
      discount: 38,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'T-Shirts'
    },
    {
      id: 12,
      name: 'Casual Blazer',
      price: 3999,
      originalPrice: 5999,
      discount: 33,
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'Blazers'
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
      <Text fontSize="2xl" fontWeight="bold" mb={8}>Sale</Text>
      <Grid
        templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
        gap={6}
      >
        {saleProducts.map((product) => (
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

export default Sale 