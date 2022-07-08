import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import {
  Box,
  Divider,
  Heading,
  Text,
  Button,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';

const Article = (props) => {
  const color = useColorModeValue('blackAlpha.700', 'whiteAlpha.700');

  return (
    <Box pb="5" maxWidth={'862px'}>
      <Link
        as={GatsbyLink}
        to={`/blog/${props.slug}`}
        _hover={{
          textDecoration: 'none',
          color: useColorModeValue('brandBlue', 'blue.500'),
        }}
      >
        <Heading
          as="h2"
          pb="2"
          fontSize="24px"
          fontWeight="600"
          lineHeight="32px"
        >
          {props.title}
        </Heading>
      </Link>
      <Text fontSize="16px" fontWeight="400" color={color}>
        {props.date}
      </Text>
      <Divider
        pt="3"
        width={[
          '100%', // 0-30em
          '100%', // 30em-48em
          '100%', // 48em-62em
          '75%', // 62em+
        ]}
      />
      <Text
        py="3"
        fontSize="16px"
        fontWeight="400"
        color={color}
        width={[
          '100%', // 0-30em
          '100%', // 30em-48em
          '75%', // 48em-62em
          '75%', // 62em+
        ]}
      >
        {props.excerpt}
      </Text>
      <Link
        as={GatsbyLink}
        to={`/blog/${props.slug}`}
        _hover={{
          textDecoration: 'none',
          color: useColorModeValue('blue.500', 'blue.300'),
        }}
      >
        <Button
          color={useColorModeValue('brandBlue', 'blue.500')}
          variant="link"
          _hover={{
            textDecoration: 'none',
            color: useColorModeValue('blue.500', 'blue.300'),
          }}
        >
          Read More
        </Button>
      </Link>
    </Box>
  );
};

export default Article;
