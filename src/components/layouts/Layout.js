import * as React from 'react';
// Custom Theme
import theme from '../../theme';
// useMediaQuery Hook from ChakraUI is full of bugs
import { useWindowSize } from '../../hooks/useWindowSize';
import Navigation from '../sections/Navigation';
import Footer from '../sections/Footer';
import {
  Container,
  Grid,
  GridItem,
  Heading,
  ChakraProvider,
} from '@chakra-ui/react';
import { SidebarPosts } from '../sections/SidebarPosts';

const Layout = ({ title, latestPosts, children }) => {
  const size = useWindowSize();

  return (
    <ChakraProvider theme={theme}>
      <Container minH="100vh" maxW="6xl" px={[15, 10, 5]} pb="5">
        <Navigation />

        {/* Title */}

        {/* Main Content */}
        {size.width > 1024 ? (
          <Grid w="100%" mx="auto" templateColumns="repeat(12, 1fr)" gap={2}>
            <GridItem w="100%" colSpan={9} py="5">
              <Heading as="h1" fontSize={'32px'} fontFamily={'Georgia'} pb="8">
                {title}
              </Heading>
              <main>{children}</main>
            </GridItem>
            {/* Desktop Sidebar */}
            {latestPosts ? <SidebarPosts /> : <div />}
          </Grid>
        ) : (
          <>
            {/* Sidebar Mobile */}
            {/* Content Mobile */}
            {latestPosts ? (
              <>
                <Heading
                  as="h1"
                  fontSize={'32px'}
                  fontFamily={'Georgia'}
                  py="5"
                >
                  {title}
                </Heading>
                <main>{children}</main>
              </>
            ) : (
              <>
                <Heading
                  as="h1"
                  fontSize={'32px'}
                  fontFamily={'Georgia'}
                  py="5"
                >
                  {title}
                </Heading>
                <main>{children}</main>
              </>
            )}
          </>
        )}
      </Container>
      <Footer />
    </ChakraProvider>
  );
};

export default Layout;
