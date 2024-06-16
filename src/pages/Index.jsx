import { Container, VStack, Box, Heading, Text, Button, Flex } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Box bg="blue.700" color="white" py={10} textAlign="center">
        <Heading as="h1" size="2xl" mb={4}>Welcome to Our Landing Page</Heading>
        <Text fontSize="lg">We are excited to have you here. Explore our features and offerings.</Text>
      </Box>
      <Box py={10}>
        <VStack spacing={8}>
          <Box textAlign="center">
            <Heading as="h2" size="xl" mb={4}>Our Features</Heading>
            <Text fontSize="md">Discover the amazing features we offer to make your experience exceptional.</Text>
          </Box>
          <Flex justify="center" wrap="wrap" spacing={8}>
            <Box bg="gray.100" p={6} m={4} borderRadius="md" boxShadow="md" maxW="sm">
              <Heading as="h3" size="lg" mb={2}>Feature One</Heading>
              <Text>Detail about feature one. It is designed to provide the best experience.</Text>
            </Box>
            <Box bg="gray.100" p={6} m={4} borderRadius="md" boxShadow="md" maxW="sm">
              <Heading as="h3" size="lg" mb={2}>Feature Two</Heading>
              <Text>Detail about feature two. It is designed to provide the best experience.</Text>
            </Box>
            <Box bg="gray.100" p={6} m={4} borderRadius="md" boxShadow="md" maxW="sm">
              <Heading as="h3" size="lg" mb={2}>Feature Three</Heading>
              <Text>Detail about feature three. It is designed to provide the best experience.</Text>
            </Box>
          </Flex>
        </VStack>
      </Box>
      <Box bg="blue.700" color="white" py={10} textAlign="center">
        <Heading as="h2" size="xl" mb={4}>Get Started Now</Heading>
        <Button colorScheme="teal" size="lg" rightIcon={<FaRocket />}>Join Us</Button>
      </Box>
      <Box bg="gray.800" color="white" py={4} textAlign="center">
        <Text>&copy; 2023 Your Company. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;