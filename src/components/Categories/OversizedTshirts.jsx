import { Box, Grid, Image, Text, Button, Badge, useToast } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const OversizedTshirts = () => {
  const toast = useToast()

  const products = [
    {
      id: 1,
      name: 'Too Fast Heavyweight T-shirt',
      price: 1199,
      originalPrice: 1499,
      discount: 20,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      description: 'Relaxed Fit T-Shirt: The Perfect Blend of Comfort & Style'
    },
    {
      id: 2,
      name: 'New World Energy Oversized T-Shirt',
      price: 899,
      originalPrice: 1199,
      discount: 25,
      image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      description: 'Premium quality oversized t-shirt with unique design'
    },
    {
      id: 3,
      name: 'Bleed Flex White Heavyweight T-shirt',
      price: 1199,
      originalPrice: 1499,
      discount: 20,
      image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      description: 'Classic white heavyweight t-shirt with bold graphics'
    },
    {
      id: 4,
      name: 'Dark Hours Oversized T-Shirt',
      price: 899,
      originalPrice: 1199,
      discount: 25,
      image: 'https://images.unsplash.com/photo-1556821840-3a6f7110caf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      description: 'Dark themed oversized t-shirt for a bold statement'
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
      <Text fontSize="2xl" fontWeight="bold" mb={4}>Oversized T-Shirts</Text>
      <Text color="gray.600" mb={8}>
        Relaxed Fit T-Shirts: The Perfect Blend of Comfort & Style
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

export default OversizedTshirts 