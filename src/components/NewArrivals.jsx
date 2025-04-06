import { Box, Grid, Image, Text, Button, useToast } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const NewArrivals = () => {
  const toast = useToast()

  // Sample new arrival products
  const newProducts = [
    {
      id: 5,
      name: 'Printed T-Shirt',
      price: 1299,
      image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'T-Shirts'
    },
    {
      id: 6,
      name: 'Denim Jacket',
      price: 3499,
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'Jackets'
    },
    {
      id: 7,
      name: 'Striped Shirt',
      price: 1799,
      image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'Shirts'
    },
    {
      id: 8,
      name: 'Cargo Pants',
      price: 2799,
      image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'Pants'
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
      <Text fontSize="2xl" fontWeight="bold" mb={8}>New Arrivals</Text>
      <Grid
        templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
        gap={6}
      >
        {newProducts.map((product) => (
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
              <Text fontWeight="semibold" fontSize="lg" mb={2}>
                {product.name}
              </Text>
              <Text color="gray.600" mb={4}>
                {formatPrice(product.price)}
              </Text>
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

export default NewArrivals 