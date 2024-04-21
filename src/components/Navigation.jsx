import { Box, Flex, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Flex as="nav" justify="flex-end" wrap="wrap" p={4} position="sticky" top={0} bg="white">
      <Box>
        <Link to="/" as={ChakraLink}>
          Home
        </Link>
      </Box>
      <Box>
        <Link to="/work" as={ChakraLink}>
          Work
        </Link>
      </Box>
    </Flex>
  );
};

export default Navigation;
