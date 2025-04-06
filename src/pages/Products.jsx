import { useState } from 'react'
import {
  Box,
  Container,
  Grid,
  Heading,
  Select,
  SimpleGrid,
  Image,
  Text,
  Button,
  Flex,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const Products = () => {
  const [sortBy, setSortBy] = useState('newest')

  // Mock products data
  const products = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    price: 99.99,
    image: `https://source.unsplash.com/random/300x400?fashion=${i + 1}`,
  }))

  return (
    <Container maxW="1200px" py={8}>
      <Flex justify="space-between" align="center" mb={8}>
        <Heading as="h1" size="xl">
          All Products
        </Heading>
        <Select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          maxW="200px"
        >
          <option value="newest">Newest First</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
        </Select>
      </Flex>

      <Grid templateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }} gap={6}>
        {products.map((product) => (
          <Box
            key={product.id}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            transition="transform 0.2s"
            _hover={{ transform: 'scale(1.02)' }}
          >
            <Image
              src={product.image}
              alt={product.name}
              height="300px"
              width="100%"
              objectFit="cover"
            />
            <Box p={4}>
              <Heading as="h3" size="md" mb={2}>
                {product.name}
              </Heading>
              <Text color="gray.600" mb={4}>
                ${product.price}
              </Text>
              <Button
                as={RouterLink}
                to={`/product/${product.id}`}
                colorScheme="black"
                width="full"
              >
                View Details
              </Button>
            </Box>
          </Box>
        ))}
      </Grid>
    </Container>
  )
}

export default Products 