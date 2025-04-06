import { Box, Container, Grid, Image, Text, Button, Badge, Flex, useToast } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const Home = () => {
  const toast = useToast()

  const featuredProducts = [
    {
      id: 1,
      name: 'Too Fast Heavyweight T-shirt',
      price: 1199,
      originalPrice: 1499,
      discount: 20,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'Oversized T-Shirts'
    },
    {
      id: 2,
      name: 'Blue Denim Oversized Jeans',
      price: 1799,
      originalPrice: 2199,
      discount: 18,
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'Denims'
    },
    {
      id: 3,
      name: 'DID I IMAGINE IT? VARSITY JACKET',
      price: 2499,
      originalPrice: 2999,
      discount: 16,
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'Winter Essentials'
    }
  ]

  const categories = [
    {
      name: 'Oversized Tshirts',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      link: '/oversized-tshirts'
    },
    {
      name: 'The Bottom Trends',
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      link: '/bottom-trends'
    },
    {
      name: 'Winter Essentials',
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      link: '/winter-essentials'
    },
    {
      name: 'Bowling Shirts',
      image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      link: '/bowling-shirts'
    },
    {
      name: 'Denims By WTF',
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      link: '/denims'
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
      {/* Hero Section */}
      <Box position="relative" mb={12}>
        <Image
          src="https://images.unsplash.com/photo-1446825599848-335def95d42f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
          alt="Hero"
          width="100%"
          height="600px"
          objectFit="cover"
        />
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          textAlign="center"
          color="white"
        >
          <Text fontSize="4xl" fontWeight="bold" mb={4}>
            WHAT THE FLEX
          </Text>
          <Text fontSize="xl" mb={6}>
            Premium Streetwear Collection
          </Text>
          <Button
            as={RouterLink}
            to="/products"
            colorScheme="black"
            size="lg"
          >
            Shop Now
          </Button>
        </Box>
      </Box>

      {/* Featured Products */}
      <Container maxW="container.xl" mb={12}>
        <Text fontSize="2xl" fontWeight="bold" mb={8}>Featured Products</Text>
        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
          gap={6}
        >
          {featuredProducts.map((product) => (
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
      </Container>

      {/* Categories */}
      <Container maxW="container.xl" mb={12}>
        <Text fontSize="2xl" fontWeight="bold" mb={8}>Shop by Category</Text>
        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(5, 1fr)' }}
          gap={6}
        >
          {categories.map((category) => (
            <Box
              key={category.name}
              position="relative"
              borderRadius="lg"
              overflow="hidden"
              _hover={{ transform: 'translateY(-4px)', transition: 'all 0.2s' }}
            >
              <Link as={RouterLink} to={category.link}>
                <Image
                  src={category.image}
                  alt={category.name}
                  height="200px"
                  width="100%"
                  objectFit="cover"
                />
                <Box
                  position="absolute"
                  bottom={0}
                  left={0}
                  right={0}
                  bg="rgba(0, 0, 0, 0.5)"
                  p={4}
                >
                  <Text color="white" fontWeight="bold">
                    {category.name}
                  </Text>
                </Box>
              </Link>
            </Box>
          ))}
        </Grid>
      </Container>

      {/* Newsletter */}
      <Box bg="gray.100" py={12}>
        <Container maxW="container.md" textAlign="center">
          <Text fontSize="2xl" fontWeight="bold" mb={4}>
            Subscribe to our newsletter
          </Text>
          <Text color="gray.600" mb={6}>
            Get updates on new products and special offers
          </Text>
          <Flex maxW="400px" mx="auto">
            <Input
              placeholder="Enter your email"
              size="lg"
              mr={2}
            />
            <Button colorScheme="black" size="lg">
              Subscribe
            </Button>
          </Flex>
        </Container>
      </Box>
    </Box>
  )
}

export default Home 