import { Container, Text, VStack, Box, Heading, Flex, Spacer, Link } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="blue.500" color="white" p={4} align="center">
        <Box p="2">
          <Heading size="md">MyApp</Heading>
        </Box>
        <Spacer />
        <Box>
          <Link p={2} href="#">Home</Link>
          <Link p={2} href="#">About</Link>
          <Link p={2} href="#">Contact</Link>
        </Box>
      </Flex>
      <Container centerContent maxW="container.md" height="80vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <VStack spacing={4}>
          <Heading as="h1" size="2xl">Hello World</Heading>
          <Text fontSize="lg">Welcome to your new web application!</Text>
        </VStack>
      </Container>
    </Container>
  );
};

export default Index;