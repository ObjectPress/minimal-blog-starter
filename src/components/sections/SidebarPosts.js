import React from "react"
import {
  Box,
  GridItem,
  Heading,
  UnorderedList,
  ListItem,
  Link,
  Text,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react"
import { Link as GatsbyLink, graphql, useStaticQuery } from "gatsby"
import dayjs from "dayjs"

export const SidebarPosts = () => {
  const color = useColorModeValue("blackAlpha.300", "whiteAlpha.300")
  const link = useColorModeValue("brandBlue", "blue.500")
  const descriptionTextColor = useColorModeValue(
    "blackAlpha.700",
    "whiteAlpha.700"
  )
  const { allPost } = useStaticQuery(graphql`
    query {
      allPost {
        nodes {
          title
          publishAt
          slug
          description
        }
      }
    }
  `)

  let blogContent = allPost.nodes.map(_ => {
    return {
      title: _.title,
      publishAt: _.publishAt,
      description: _.description,
      slug: _.slug,
    }
  })

  blogContent = blogContent.sort((a, b) =>
    b.publishAt.localeCompare(a.publishAt)
  )

  blogContent = blogContent.slice(0, 3)

  return (
    <GridItem w="100%" colSpan={3} h="max-content">
      <Box
        h="100%"
        borderLeft="1px"
        borderRight="1px"
        borderBottom="1px"
        px="5"
        py="6"
        borderColor={color}
      >
        <Heading
          as="h2"
          fontSize={"24px"}
          fontFamily={"Georgia"}
          fontWeight="700"
        >
          Latest posts
        </Heading>
        <UnorderedList listStyleType="none" m="0" pt="10" spacing={2}>
          {blogContent.map(post => {
            return (
              <ListItem pb="3" key={post.slug}>
                <Link
                  as={GatsbyLink}
                  to={`/blog/${post.slug}`}
                  _hover={{
                    textDecoration: "none",
                    color: link,
                  }}
                >
                  <Heading
                    as="h5"
                    fontSize="20px"
                    fontWeight="600"
                    lineHeight="27px"
                  >
                    {post.title}
                  </Heading>
                </Link>
                <Text
                  pt="3"
                  fontSize="16px"
                  fontWeight="400"
                  color={descriptionTextColor}
                >
                  {post.description}
                </Text>
                <Text pt="3" pb="5" fontSize="16px" fontWeight="400">
                  {dayjs(post.publishAt).format("MMM DD, YYYY")}
                </Text>
                <Divider bg={color} />
              </ListItem>
            )
          })}
        </UnorderedList>
      </Box>
    </GridItem>
  )
}
