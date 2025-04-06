import { Box, Container, Grid, Text, Link, Flex, Icon } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaPinterest } from 'react-icons/fa'

const Footer = () => {
  return (
    <Box bg="black" color="white" py={12}>
      <Container maxW="container.xl">
        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }}
          gap={8}
          mb={8}
        >
          {/* Quick Links */}
          <Box>
            <Text fontSize="lg" fontWeight="bold" mb={4}>
              Quick Links
            </Text>
            <Flex direction="column" gap={2}>
              <Link as={RouterLink} to="/products" color="gray.400" _hover={{ color: 'white' }}>
                All Products
              </Link>
              <Link as={RouterLink} to="/oversized-tshirts" color="gray.400" _hover={{ color: 'white' }}>
                Oversized T-Shirts
              </Link>
              <Link as={RouterLink} to="/bottom-trends" color="gray.400" _hover={{ color: 'white' }}>
                The Bottom Trends
              </Link>
              <Link as={RouterLink} to="/winter-essentials" color="gray.400" _hover={{ color: 'white' }}>
                Winter Essentials
              </Link>
              <Link as={RouterLink} to="/bowling-shirts" color="gray.400" _hover={{ color: 'white' }}>
                Bowling Shirts
              </Link>
              <Link as={RouterLink} to="/denims" color="gray.400" _hover={{ color: 'white' }}>
                Denims By WTF
              </Link>
            </Flex>
          </Box>

          {/* Customer Service */}
          <Box>
            <Text fontSize="lg" fontWeight="bold" mb={4}>
              Customer Service
            </Text>
            <Flex direction="column" gap={2}>
              <Link as={RouterLink} to="/contact" color="gray.400" _hover={{ color: 'white' }}>
                Contact Us
              </Link>
              <Link as={RouterLink} to="/exchange" color="gray.400" _hover={{ color: 'white' }}>
                Exchange Your Order
              </Link>
              <Link as={RouterLink} to="/refund-policy" color="gray.400" _hover={{ color: 'white' }}>
                Refund Policy
              </Link>
              <Link as={RouterLink} to="/privacy-policy" color="gray.400" _hover={{ color: 'white' }}>
                Privacy Policy
              </Link>
              <Link as={RouterLink} to="/terms" color="gray.400" _hover={{ color: 'white' }}>
                Terms of Service
              </Link>
              <Link as={RouterLink} to="/shipping" color="gray.400" _hover={{ color: 'white' }}>
                Shipping Policy
              </Link>
            </Flex>
          </Box>

          {/* Contact Information */}
          <Box>
            <Text fontSize="lg" fontWeight="bold" mb={4}>
              Contact Information
            </Text>
            <Flex direction="column" gap={2}>
              <Text color="gray.400">Email: support@wtflex.in</Text>
              <Text color="gray.400">Phone: +91 1234567890</Text>
              <Text color="gray.400">Address: 123 Fashion Street, Mumbai, India</Text>
            </Flex>
          </Box>

          {/* Social Media */}
          <Box>
            <Text fontSize="lg" fontWeight="bold" mb={4}>
              Follow Us
            </Text>
            <Flex gap={4}>
              <Link href="https://facebook.com" isExternal>
                <Icon as={FaFacebook} boxSize={6} color="gray.400" _hover={{ color: 'white' }} />
              </Link>
              <Link href="https://instagram.com" isExternal>
                <Icon as={FaInstagram} boxSize={6} color="gray.400" _hover={{ color: 'white' }} />
              </Link>
              <Link href="https://pinterest.com" isExternal>
                <Icon as={FaPinterest} boxSize={6} color="gray.400" _hover={{ color: 'white' }} />
              </Link>
            </Flex>
          </Box>
        </Grid>

        {/* Copyright */}
        <Box borderTop="1px" borderColor="gray.700" pt={8}>
          <Text textAlign="center" color="gray.400">
            © {new Date().getFullYear()} WHAT THE FLEX. All rights reserved.
          </Text>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer 