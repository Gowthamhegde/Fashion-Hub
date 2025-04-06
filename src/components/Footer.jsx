import { Box, Container, Grid, Text, Link, Icon } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <Box bg="gray.100" py={12} mt={12}>
      <Container maxW="1200px">
        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }}
          gap={8}
          mb={8}
        >
          <Box>
            <Text fontWeight="bold" mb={4}>
              About Us
            </Text>
            <Text color="gray.600">
              Your one-stop destination for trendy and affordable fashion.
            </Text>
          </Box>
          <Box>
            <Text fontWeight="bold" mb={4}>
              Quick Links
            </Text>
            <VStack align="start" spacing={2}>
              <Link as={RouterLink} to="/">
                Home
              </Link>
              <Link as={RouterLink} to="/products">
                Products
              </Link>
              <Link as={RouterLink} to="/cart">
                Cart
              </Link>
            </VStack>
          </Box>
          <Box>
            <Text fontWeight="bold" mb={4}>
              Contact
            </Text>
            <VStack align="start" spacing={2}>
              <Text>Email: info@yourshop.com</Text>
              <Text>Phone: +1 234 567 890</Text>
              <Text>Address: 123 Fashion St, City</Text>
            </VStack>
          </Box>
          <Box>
            <Text fontWeight="bold" mb={4}>
              Follow Us
            </Text>
            <HStack spacing={4}>
              <Link href="#" isExternal>
                <Icon as={FaFacebook} boxSize={6} />
              </Link>
              <Link href="#" isExternal>
                <Icon as={FaInstagram} boxSize={6} />
              </Link>
              <Link href="#" isExternal>
                <Icon as={FaTwitter} boxSize={6} />
              </Link>
            </HStack>
          </Box>
        </Grid>
        <Text textAlign="center" color="gray.600">
          © {new Date().getFullYear()} Your Shop Name. All rights reserved.
        </Text>
      </Container>
    </Box>
  )
}

export default Footer 