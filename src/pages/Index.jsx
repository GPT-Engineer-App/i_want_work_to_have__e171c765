import { Box, Button, Container, Flex, Heading, Icon, Image, Input, Stack, Text, Textarea, useColorModeValue, VStack } from "@chakra-ui/react";
import { FaEnvelope, FaPhone, FaPlayCircle, FaRegPaperPlane } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex alignItems="center" justifyContent="space-between" flexDirection={{ base: "column", md: "row" }} mb={8}>
        <VStack align="start" spacing={3} mb={{ base: 4, md: 0 }}>
          <Heading as="h1" size="xl">
            Professional Video Editing Services
          </Heading>
          <Text fontSize="lg" color={useColorModeValue("gray.600", "gray.200")}>
            Bringing your vision to life with top-tier editing and post-production services.
          </Text>
          <Button leftIcon={<Icon as={FaPlayCircle} />} colorScheme="teal" size="lg" mt={3}>
            View Our Work
          </Button>
        </VStack>
        <Box>
          <Image src="https://images.unsplash.com/photo-1497015289639-54688650d173?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGVkaXRpbmclMjBzZXR1cHxlbnwwfHx8fDE3MDQ3MzkxNjF8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" boxShadow="xl" />
        </Box>
      </Flex>

      <Flex direction={{ base: "column", md: "row" }} alignItems="center" justifyContent="space-between" py={10}>
        <Box flex={1} mb={{ base: 5, md: 0 }}>
          <Heading as="h2" size="lg" mb={4}>
            Featured Projects
          </Heading>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Image src="https://images.unsplash.com/photo-1528109966604-5a6a4a964e8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2plY3QlMjBzaG93Y2FzZXxlbnwwfHx8fDE3MDQ3MzkxNjJ8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" boxShadow="lg" w="100%" />
            <Image src="https://images.unsplash.com/photo-1459184070881-58235578f004?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHx2aWRlbyUyMHByb2plY3QlMjBzaG93Y2FzZXxlbnwwfHx8fDE3MDQ3MzkxNjJ8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" boxShadow="lg" w="100%" />
            <Image src="https://images.unsplash.com/photo-1682506456442-a051e8dae813?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwzfHx2aWRlbyUyMHByb2plY3QlMjBzaG93Y2FzZXxlbnwwfHx8fDE3MDQ3MzkxNjJ8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" boxShadow="lg" w="100%" />
          </Stack>
        </Box>
      </Flex>

      <Box as="section" py={10}>
        <Heading as="h3" size="lg" mb={6} textAlign="center">
          Get in Touch
        </Heading>
        <Stack direction={{ base: "column", md: "row" }} spacing={4} justifyContent="center" alignItems="center">
          <Flex alignItems="center">
            <Icon as={FaPhone} mr={2} />
            <Text>+123 456 7890</Text>
          </Flex>
          <Flex alignItems="center">
            <Icon as={FaEnvelope} mr={2} />
            <Text>contact@videoeditpro.com</Text>
          </Flex>
        </Stack>
        <Box mt={10} maxW="3xl" mx="auto">
          <Stack spacing={4}>
            <Input placeholder="Your name" />
            <Input placeholder="Your email" />
            <Textarea placeholder="Your message" rows={5} />
            <Button rightIcon={<FaRegPaperPlane />} colorScheme="blue" w={{ base: "full", sm: "auto" }}>
              Send Message
            </Button>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};

export default Index;
