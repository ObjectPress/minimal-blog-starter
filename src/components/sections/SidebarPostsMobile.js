import React from 'react';
import {
  Box,
  GridItem,
  Heading,
  UnorderedList,
  ListItem,
  Link,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link as GatsbyLink, graphql, useStaticQuery } from 'gatsby';
import dayjs from 'dayjs';

export const SidebarPostsMobile = () => {
  const color = useColorModeValue('blackAlpha.900', 'white');
  const descriptionTextColor = useColorModeValue(
    'blackAlpha.600',
    'whiteAlpha.600'
  );
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
  `);

  let blogContent = allPost.nodes.map((_) => {
    return {
      title: _.title,
      publishAt: _.publishAt,
      description: _.description,
      slug: _.slug,
    };
  });

  blogContent = blogContent.sort((a, b) =>
    b.publishAt.localeCompare(a.publishAt)
  );

  return (
    <GridItem w="100%" colSpan={3}>
      <Box h="100%" borderColor="blackAlpha.300" py="5">
        <Heading
          as="h2"
          fontSize={'24px'}
          color={color}
          fontFamily={'Georgia'}
          fontWeight="700"
        >
          Latest posts
        </Heading>
        <UnorderedList listStyleType="none" pt="3" m="0" spacing={2}>
          {blogContent.map((post) => {
            return (
              <ListItem pb="3" key={post.slug}>
                <Link
                  as={GatsbyLink}
                  to={`/blog/${post.slug}`}
                  _hover={{ textDecoration: 'none', color: 'brandBlue' }}
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
                <Text pt="3" fontSize="16px" fontWeight="400" color={color}>
                  {dayjs(post.publishAt).format('MMM DD, YYYY')}
                </Text>
              </ListItem>
            );
          })}
        </UnorderedList>
      </Box>
    </GridItem>
  );
};
