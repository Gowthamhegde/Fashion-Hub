import {
  Box,
  Container,
  VStack,
  HStack,
  Text,
  Button,
  Image,
  Divider,
  Heading,
  IconButton,
} from '@chakra-ui/react'
import { FiTrash2 } from 'react-icons/fi'

const Cart = () => {
  // Mock cart items
  const cartItems = [
    {
      id: 1,
      name: 'Product 1',
      price: 99.99,
      quantity: 1,
      size: 'M',
      image: 'https://source.unsplash.com/random/200x300?fashion=1',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 79.99,
      quantity: 2,
      size: 'L',
      image: 'https://source.unsplash.com/random/200x300?fashion=2',
    },
  ]

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )
  const shipping = 10
  const total = subtotal + shipping

  return (
    <Container maxW="1200px" py={8}>
      <Heading as="h1" size="xl" mb={8}>
        Shopping Cart
      </Heading>
      <VStack spacing={8} align="stretch">
        {cartItems.map((item) => (
          <Box key={item.id}>
            <HStack spacing={4} align="start">
              <Image
                src={item.image}
                alt={item.name}
                boxSize="100px"
                objectFit="cover"
                borderRadius="md"
              />
              <VStack align="start" flex={1}>
                <Text fontWeight="bold">{item.name}</Text>
                <Text>Size: {item.size}</Text>
                <Text>Quantity: {item.quantity}</Text>
                <Text>${(item.price * item.quantity).toFixed(2)}</Text>
              </VStack>
              <IconButton
                icon={<FiTrash2 />}
                aria-label="Remove item"
                variant="ghost"
                colorScheme="red"
              />
            </HStack>
            <Divider my={4} />
          </Box>
        ))}

        <VStack align="stretch" spacing={4}>
          <HStack justify="space-between">
            <Text>Subtotal</Text>
            <Text>${subtotal.toFixed(2)}</Text>
          </HStack>
          <HStack justify="space-between">
            <Text>Shipping</Text>
            <Text>${shipping.toFixed(2)}</Text>
          </HStack>
          <Divider />
          <HStack justify="space-between" fontWeight="bold">
            <Text>Total</Text>
            <Text>${total.toFixed(2)}</Text>
          </HStack>
        </VStack>

        <Button colorScheme="black" size="lg">
          Proceed to Checkout
        </Button>
      </VStack>
    </Container>
  )
}

export default Cart 