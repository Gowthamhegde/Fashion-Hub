import { useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  Box,
  Container,
  Grid,
  Image,
  Text,
  Button,
  Flex,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Divider,
  Badge
} from '@chakra-ui/react'

const ProductDetail = () => {
  const { id } = useParams()
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState('M')

  // Mock product data (in a real app, this would come from an API)
  const product = {
    id: 1,
    name: 'Classic White T-Shirt',
    price: 29.99,
    description: 'A timeless classic white t-shirt made from 100% organic cotton. Perfect for everyday wear and layering.',
    category: 'men',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Black', 'Gray'],
    images: [
      'https://source.unsplash.com/random/800x1000/?tshirt1',
      'https://source.unsplash.com/random/800x1000/?tshirt2',
      'https://source.unsplash.com/random/800x1000/?tshirt3'
    ],
    features: [
      '100% Organic Cotton',
      'Regular Fit',
      'Machine Washable',
      'Made in USA'
    ],
    isNew: true
  }

  const handleAddToCart = () => {
    // In a real app, this would add the product to the cart
    console.log('Added to cart:', {
      productId: product.id,
      quantity,
      size: selectedSize
    })
  }

  return (
    <Container maxW="container.xl" py={8}>
      <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={8}>
        {/* Image Gallery */}
        <Box>
          <Image
            src={product.images[0]}
            alt={product.name}
            width="100%"
            height="600px"
            objectFit="cover"
            borderRadius="md"
          />
          <Grid templateColumns="repeat(3, 1fr)" gap={4} mt={4}>
            {product.images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`${product.name} ${index + 1}`}
                width="100%"
                height="150px"
                objectFit="cover"
                borderRadius="md"
                cursor="pointer"
                _hover={{ opacity: 0.8 }}
              />
            ))}
          </Grid>
        </Box>

        {/* Product Info */}
        <Box>
          {product.isNew && (
            <Badge colorScheme="green" mb={2}>
              New
            </Badge>
          )}
          <Text fontSize="3xl" fontWeight="bold" mb={2}>
            {product.name}
          </Text>
          <Text fontSize="2xl" color="gray.600" mb={4}>
            ${product.price.toFixed(2)}
          </Text>
          <Text color="gray.600" mb={6}>
            {product.description}
          </Text>

          <Divider my={6} />

          {/* Size Selection */}
          <Text fontWeight="bold" mb={2}>
            Size
          </Text>
          <Flex gap={2} mb={6}>
            {product.sizes.map((size) => (
              <Button
                key={size}
                variant={selectedSize === size ? 'solid' : 'outline'}
                onClick={() => setSelectedSize(size)}
                minW="40px"
              >
                {size}
              </Button>
            ))}
          </Flex>

          {/* Quantity Selection */}
          <Text fontWeight="bold" mb={2}>
            Quantity
          </Text>
          <NumberInput
            value={quantity}
            onChange={(value) => setQuantity(parseInt(value))}
            min={1}
            max={10}
            mb={6}
            width="120px"
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>

          {/* Add to Cart Button */}
          <Button
            colorScheme="black"
            size="lg"
            width="100%"
            mb={6}
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>

          {/* Product Features */}
          <Box>
            <Text fontWeight="bold" mb={2}>
              Product Features
            </Text>
            <Grid templateColumns="repeat(2, 1fr)" gap={2}>
              {product.features.map((feature, index) => (
                <Text key={index} color="gray.600">
                  • {feature}
                </Text>
              ))}
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Container>
  )
}

export default ProductDetail 