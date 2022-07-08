import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { useWindowSize } from "../../hooks/useWindowSize"
import {
  Flex,
  Box,
  Spacer,
  Link,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react"
import { FaEnvelope, FaGithub } from "react-icons/fa"
import { StaticImage } from "gatsby-plugin-image"
import Toggle from "../ui/DarkModeToggle/Toggle"

const Navigation = () => {
  const size = useWindowSize()
  const color = useColorModeValue("blackAlpha.700", "white")
  const border = useColorModeValue("blackAlpha.300", "whiteAlpha.300")

  return (
    <Flex
      minWidth="max-content"
      minW="100%"
      h="80px"
      justifyContent="space-between"
      alignItems="center"
      borderBottom="1px"
      borderBottomColor={border}
    >
      <Box
        as={GatsbyLink}
        to="/"
        h="45px"
        w="45px"
        sx={{
          borderRadius: "100%",
          background: "transparent",
          overflow: "hidden",
        }}
      >
        <StaticImage
          src="../../images/logo.webp"
          alt="Object Press"
          placeholder="blurred"
          height={45}
          width={45}
        />
      </Box>
      {size.width > 1024 ? <Spacer /> : null}

      {/* Menu Links */}
      <Flex align="center">
        <Link
          as={GatsbyLink}
          to="/"
          mr="5"
          fontSize="lg"
          fontWeight={700}
          color={color}
          activeStyle={{ color: useColorModeValue("brandBlue", "blue.500") }}
          _hover={{
            textDecoration: "none",
            color: useColorModeValue("brandBlue", "blue.500"),
          }}
        >
          About
        </Link>
        <Link
          as={GatsbyLink}
          to="/blog"
          mr="5"
          fontSize="lg"
          fontWeight={700}
          color={color}
          activeStyle={{ color: useColorModeValue("brandBlue", "blue.500") }}
          _hover={{
            textDecoration: "none",
            color: useColorModeValue("brandBlue", "blue.500"),
          }}
        >
          Blog
        </Link>

        <Link as={GatsbyLink} to="https://github.com/ObjectPress" mr="5">
          <Icon
            as={FaGithub}
            w={5}
            h={5}
            mt={1}
            color={color}
            verticalAlign="baseline"
            _hover={{
              textDecoration: "none",
              color: useColorModeValue("brandBlue", "blue.500"),
            }}
          />
        </Link>

        <a href="mailto:vincent@objectpress.io" style={{ marginRight: 12 }}>
          <Icon
            as={FaEnvelope}
            w={5}
            h={5}
            mt={1}
            color={color}
            verticalAlign="baseline"
            _hover={{
              textDecoration: "none",
              color: useColorModeValue("brandBlue", "blue.500"),
            }}
          />
        </a>

        <Toggle />
      </Flex>
    </Flex>
  )
}

export default Navigation
