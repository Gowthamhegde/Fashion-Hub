import { Box, Grid, Image, Text, Button, Badge, useToast, Flex, Link } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const Denims = () => {
  const toast = useToast()

  const products = [
    {
      id: 1,
      name: 'Slim Fit Jeans - Blue',
      price: 2999,
      originalPrice: 3499,
      discount: 14,
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      description: 'Classic blue slim fit jeans with stretch comfort'
    },
    {
      id: 2,
      name: 'Ripped Jeans - Black',
      price: 2799,
      originalPrice: 3299,
      discount: 15,
      image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      description: 'Trendy black ripped jeans with distressed details'
    },
    {
      id: 3,
      name: 'Straight Fit Jeans - Light Blue',
      price: 2599,
      originalPrice: 3099,
      discount: 16,
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      description: 'Comfortable light blue straight fit jeans'
    },
    {
      id: 4,
      name: 'Denim Jacket - Blue',
      price: 3499,
      originalPrice: 3999,
      discount: 13,
      image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      description: 'Classic blue denim jacket with metal buttons'
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
      <Text fontSize="2xl" fontWeight="bold" mb={4}>Denims By WTF</Text>
      <Text color="gray.600" mb={8}>
        Premium denim collection for every style
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

export default Denims 