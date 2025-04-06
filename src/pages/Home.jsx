import { Box, Container, Grid, Heading, Text, Image, Button } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)
const MotionButton = motion(Button)
const MotionImage = motion(Image)

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        bg="gray.100"
        py={20}
        position="relative"
        overflow="hidden"
      >
        <Container maxW="1200px">
          <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={8}>
            <MotionBox
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Heading as="h1" size="2xl" mb={4}>
                Welcome to Your Fashion Destination
              </Heading>
              <Text fontSize="xl" mb={8}>
                Discover the latest trends and styles for every occasion
              </Text>
              <MotionButton
                as={RouterLink}
                to="/products"
                colorScheme="black"
                size="lg"
                bg="black"
                _hover={{ bg: 'gray.800' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Shop Now
              </MotionButton>
            </MotionBox>
            <MotionBox
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Fashion Hero"
                borderRadius="lg"
                width="100%"
                height="400px"
                objectFit="cover"
              />
            </MotionBox>
          </Grid>
        </Container>
      </Box>

      {/* Featured Products */}
      <Container maxW="1200px" py={16}>
        <Heading as="h2" size="xl" mb={8} textAlign="center">
          Featured Products
        </Heading>
        <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={8}>
          {[1, 2, 3].map((item, index) => (
            <MotionBox
              key={item}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
            >
              <MotionImage
                src={`https://source.unsplash.com/random/300x400?fashion=${item}`}
                alt={`Product ${item}`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <Box p={6}>
                <Heading as="h3" size="md" mb={2}>
                  Product {item}
                </Heading>
                <Text color="gray.600" mb={4}>
                  $99.99
                </Text>
                <MotionButton
                  as={RouterLink}
                  to={`/product/${item}`}
                  colorScheme="black"
                  width="full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Details
                </MotionButton>
              </Box>
            </MotionBox>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Home 