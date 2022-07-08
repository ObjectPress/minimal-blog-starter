import * as React from "react"
import { Link as GatsbyLink } from "gatsby"
import {
  Icon,
  Flex,
  Stack,
  Text,
  Link,
  Box,
  Center,
  useColorModeValue,
} from "@chakra-ui/react"
import { FaGithub } from "react-icons/fa"
import { useWindowSize } from "../../hooks/useWindowSize"

const Footer = () => {
  const color = useColorModeValue("blackAlpha.600", "whiteAlpha.600")
  const size = useWindowSize()
  return (
    <Box w="100%" mx="auto" bg="blackAlpha.100">
      <Center>
        <Flex
          flexDirection={size.width > 1024 ? "row" : "column-reverse"}
          as="footer"
          role="contentinfo"
          minWidth="max-content"
          marginTop="auto"
          w="100%"
          maxW="6xl"
          align="center"
          justifyContent="space-between"
          px={[5, 10, 15]}
          py={{
            base: "4",
            md: "4",
          }}
        >
          <Link
            as={GatsbyLink}
            to="https://www.objectpress.io"
            _hover={{
              color: useColorModeValue("brandBlue", "blue.500"),
              textDecoration: "none",
            }}
          >
            <Text fontSize="sm" color="subtle" fontWeight="medium">
              &copy; {new Date().getFullYear()} by Object Press
            </Text>
          </Link>
          <Stack
            spacing={{
              base: "4",
              md: "5",
            }}
          >
            <Stack justify="space-between" direction="row" align="center">
              {/* Social Links */}
              <Flex align="center">
                <Link as={GatsbyLink} to="https://github.com/ObjectPress">
                  <Icon
                    as={FaGithub}
                    w={5}
                    h={5}
                    color={color}
                    verticalAlign="baseline"
                    _hover={{
                      color: useColorModeValue("brandBlue", "blue.500"),
                    }}
                  />
                </Link>
              </Flex>
            </Stack>
          </Stack>
        </Flex>
      </Center>
    </Box>
  )
}
export default Footer
