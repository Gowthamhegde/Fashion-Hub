import { useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  Box,
  Container,
  Grid,
  Image,
  Heading,
  Text,
  Button,
  Select,
  VStack,
  HStack,
  Divider,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)
const MotionButton = motion(Button)
const MotionImage = motion(Image)

// 3D Model Component
function ProductModel() {
  const { scene } = useGLTF('/product.glb')
  return <primitive object={scene} scale={0.5} />
}

const ProductDetail = () => {
  const { id } = useParams()
  const [quantity, setQuantity] = useState(1)
  const [size, setSize] = useState('M')

  // Mock product data
  const product = {
    id: id,
    name: `Product ${id}`,
    price: 99.99,
    description: 'This is a beautiful product description that highlights the features and benefits of the item.',
    image: `https://source.unsplash.com/random/600x800?fashion=${id}`,
    sizes: ['S', 'M', 'L', 'XL'],
  }

  const handleAddToCart = () => {
    // Add to cart functionality will be implemented later
    console.log('Added to cart:', { product, quantity, size })
  }

  return (
    <Container maxW="1200px" py={8}>
      <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={8}>
        <MotionBox
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <MotionImage
            src={product.image}
            alt={product.name}
            borderRadius="lg"
            width="100%"
            height="auto"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
        </MotionBox>
        <MotionBox
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <VStack align="stretch" spacing={6}>
            <Heading as="h1" size="xl">
              {product.name}
            </Heading>
            <Text fontSize="2xl" fontWeight="bold">
              ${product.price}
            </Text>
            <Text color="gray.600">{product.description}</Text>
            <Divider />
            <VStack align="stretch" spacing={4}>
              <Box>
                <Text mb={2}>Size</Text>
                <HStack spacing={2}>
                  {product.sizes.map((s) => (
                    <MotionButton
                      key={s}
                      variant={size === s ? 'solid' : 'outline'}
                      onClick={() => setSize(s)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {s}
                    </MotionButton>
                  ))}
                </HStack>
              </Box>
              <Box>
                <Text mb={2}>Quantity</Text>
                <Select
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  maxW="100px"
                >
                  {[1, 2, 3, 4, 5].map((q) => (
                    <option key={q} value={q}>
                      {q}
                    </option>
                  ))}
                </Select>
              </Box>
            </VStack>
            <MotionButton
              colorScheme="black"
              size="lg"
              onClick={handleAddToCart}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Add to Cart
            </MotionButton>
          </VStack>
        </MotionBox>
      </Grid>
    </Container>
  )
}

export default ProductDetail 