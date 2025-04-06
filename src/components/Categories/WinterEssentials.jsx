import { Box, Grid, Image, Text, Button, Badge, useToast, Flex, Link } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const WinterEssentials = () => {
  const toast = useToast()

  const products = [
    {
      id: 1,
      name: 'Puffer Jacket - Black',
      price: 3999,
      originalPrice: 4999,
      discount: 20,
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      description: 'Warm and stylish black puffer jacket with hood'
    },
    {
      id: 2,
      name: 'Wool Sweater - Grey',
      price: 2499,
      originalPrice: 2999,
      discount: 17,
      image: 'https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      description: 'Comfortable grey wool sweater for cold days'
    },
    {
      id: 3,
      name: 'Thermal Hoodie - Navy',
      price: 1999,
      originalPrice: 2499,
      discount: 20,
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      description: 'Warm thermal hoodie with fleece lining'
    },
    {
      id: 4,
      name: 'Fleece Jacket - Red',
      price: 2799,
      originalPrice: 3499,
      discount: 20,
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      description: 'Cozy red fleece jacket for winter comfort'
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
      <Text fontSize="2xl" fontWeight="bold" mb={4}>Winter Essentials</Text>
      <Text color="gray.600" mb={8}>
        Stay warm and stylish with our winter collection
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

export default WinterEssentials 