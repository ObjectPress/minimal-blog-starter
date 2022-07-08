import React from 'react';
import { Heading, Text } from '@chakra-ui/react';
import Layout from '../components/layouts/Layout';
import Seo from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <Heading as="h2" pb="2" fontSize="2xl" fontWeight="600" lineHeight="32px">
      404 - Page Not Found
    </Heading>
    <Text fontSize="16px" fontWeight="400">
      Unfortunately we couldn't find what you were looking for :(
    </Text>
  </Layout>
);

export default NotFoundPage;
