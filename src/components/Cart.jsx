import { useState } from 'react'
import {
  Box,
  Container,
  Grid,
  Text,
  Button,
  Flex,
  Image,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Divider,
  useToast
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const Cart = () => {
  const toast = useToast()

  // Mock cart data (in a real app, this would come from a state management solution)
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Classic White T-Shirt',
      price: 29.99,
      image: 'https://source.unsplash.com/random/400x500/?tshirt',
      size: 'M',
      quantity: 2
    },
    {
      id: 2,
      name: 'Black Denim Jacket',
      price: 89.99,
      image: 'https://source.unsplash.com/random/400x500/?jacket',
      size: 'L',
      quantity: 1
    }
  ])

  const handleQuantityChange = (itemId, newQuantity) => {
    setCartItems(items =>
      items.map(item =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  const handleRemoveItem = (itemId) => {
    setCartItems(items => items.filter(item => item.id !== itemId))
    toast({
      title: 'Item removed',
      description: 'The item has been removed from your cart',
      status: 'success',
      duration: 3000,
      isClosable: true
    })
  }

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const handleCheckout = () => {
    // In a real app, this would redirect to a checkout page or process the order
    toast({
      title: 'Proceeding to checkout',
      description: 'You will be redirected to the checkout page',
      status: 'info',
      duration: 3000,
      isClosable: true
    })
  }

  return (
    <Container maxW="container.xl" py={8}>
      <Text fontSize="3xl" fontWeight="bold" mb={8}>
        Shopping Cart
      </Text>

      {cartItems.length === 0 ? (
        <Box textAlign="center" py={12}>
          <Text fontSize="xl" mb={4}>
            Your cart is empty
          </Text>
          <Button as={RouterLink} to="/products" colorScheme="black">
            Continue Shopping
          </Button>
        </Box>
      ) : (
        <Grid templateColumns={{ base: '1fr', md: '2fr 1fr' }} gap={8}>
          {/* Cart Items */}
          <Box>
            {cartItems.map((item) => (
              <Box key={item.id}>
                <Grid
                  templateColumns={{ base: '1fr', sm: 'auto 1fr auto' }}
                  gap={4}
                  py={4}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width="120px"
                    height="150px"
                    objectFit="cover"
                    borderRadius="md"
                  />
                  <Box>
                    <Text fontSize="lg" fontWeight="bold">
                      {item.name}
                    </Text>
                    <Text color="gray.600">Size: {item.size}</Text>
                    <Text color="gray.600">${item.price.toFixed(2)}</Text>
                    <Flex align="center" mt={2}>
                      <Text mr={2}>Quantity:</Text>
                      <NumberInput
                        value={item.quantity}
                        onChange={(value) => handleQuantityChange(item.id, parseInt(value))}
                        min={1}
                        max={10}
                        width="100px"
                      >
                        <NumberInputField />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    </Flex>
                  </Box>
                  <Flex direction="column" justify="space-between" align="flex-end">
                    <Text fontSize="lg" fontWeight="bold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </Text>
                    <Button
                      variant="ghost"
                      colorScheme="red"
                      size="sm"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      Remove
                    </Button>
                  </Flex>
                </Grid>
                <Divider my={4} />
              </Box>
            ))}
          </Box>

          {/* Order Summary */}
          <Box>
            <Box
              bg="gray.50"
              p={6}
              borderRadius="md"
              position="sticky"
              top={8}
            >
              <Text fontSize="xl" fontWeight="bold" mb={4}>
                Order Summary
              </Text>
              <Flex justify="space-between" mb={2}>
                <Text>Subtotal</Text>
                <Text>${calculateSubtotal().toFixed(2)}</Text>
              </Flex>
              <Flex justify="space-between" mb={2}>
                <Text>Shipping</Text>
                <Text>Free</Text>
              </Flex>
              <Divider my={4} />
              <Flex justify="space-between" mb={6}>
                <Text fontSize="lg" fontWeight="bold">
                  Total
                </Text>
                <Text fontSize="lg" fontWeight="bold">
                  ${calculateSubtotal().toFixed(2)}
                </Text>
              </Flex>
              <Button
                colorScheme="black"
                size="lg"
                width="100%"
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </Button>
              <Button
                as={RouterLink}
                to="/products"
                variant="outline"
                size="lg"
                width="100%"
                mt={4}
              >
                Continue Shopping
              </Button>
            </Box>
          </Box>
        </Grid>
      )}
    </Container>
  )
}

export default Cart 