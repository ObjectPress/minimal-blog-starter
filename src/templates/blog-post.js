import * as React from "react"
import { Link as GatsbyLink } from "gatsby"

import Layout from "../components/layouts/Layout"
import Seo from "../components/seo"

import {
  Box,
  Heading,
  Text,
  Flex,
  Spacer,
  Link,
  useColorModeValue,
} from "@chakra-ui/react"
import dayjs from "dayjs"
import "./styles.css"
const showdown = require("showdown")
const converter = new showdown.Converter()

const BlogPostTemplate = ({ pageContext: post, location }) => {
  return (
    <Layout location={location} pb="10" latestPosts={true}>
      <Seo title={post.title} description={post.description} />
      <Box w={{ sm: "100%", md: "95%", lg: "80%" }}>
        <article itemScope itemType="http://schema.org/Article">
          <header>
            <Heading itemProp="headline" pt={[4, 4, 0, 0, 0]} pb="2">
              {post.title}
            </Heading>
            <Flex>
              <Text size="md" fontWeight="medium">
                {dayjs(post.publishAt).format("MMM DD, YYYY")}
              </Text>
              <Spacer />
            </Flex>
          </header>

          {/*
          <Box px={[2, 0]} py={[4, 8, 10]}>
            <img
              src={post.images[0]}
              alt={post.title}
              height="125px"
              width="125px"
            />
          </Box>
          */}

          <Box px={[2, 0]} maxW="100vw">
            <Box
              className="markdown"
              dangerouslySetInnerHTML={{
                __html: converter.makeHtml(post.content),
              }}
            />
          </Box>

          <Box mt={7}>
            <Link
              as={GatsbyLink}
              to="/blog"
              fontWeight={700}
              activeStyle={{
                color: useColorModeValue("brandBlue", "blue.500"),
              }}
              _hover={{
                textDecoration: "none",
                color: useColorModeValue("brandBlue", "blue.500"),
              }}
            >
              Back to Blog
            </Link>
          </Box>
        </article>
      </Box>
    </Layout>
  )
}

export default BlogPostTemplate
