import {
  Button,
  Flex,
  IconButton,
  Link,
  Switch,
  useColorMode,
} from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const [display, setDisplay] = useState('none');
  //   const display = 'none';
  return (
    <Flex>
      {/* Navbar */}
      <Flex pos="fixed" top="1rem" right="1rem" align="center">
        <Flex display={['none', 'none', 'flex', 'flex']}>
          <Link to="/home">
            <Button as="a" variant="ghost" aria-label="Home" w="100%">
              Home
            </Button>
          </Link>
          <Link to="/about">
            <Button as="a" variant="ghost" aria-label="About" w="100%">
              About
            </Button>
          </Link>
          <Link to="/contact">
            <Button as="a" variant="ghost" aria-label="Contact" w="100%">
              Contact
            </Button>
          </Link>
        </Flex>
        <IconButton
          aria-label="Open Menu"
          size="lg"
          mr={2}
          icon={<FaBars />}
          display={['flex', 'flex', 'none', 'none']}
          onClick={() => setDisplay('flex')}
        />
        <Switch color="green" isChecked={isDark} onChange={toggleColorMode} />
      </Flex>
      <Flex
        w="100vw"
        bgColor="gray.50"
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflow="auto"
        flexDir="column"
        display={display}
      >
        <Flex justify="flex-end">
          <IconButton
            mt={2}
            mr={2}
            aria-label="Close Menu"
            size="lg"
            icon={<FaTimes />}
            onClick={() => setDisplay('none')}
          />
        </Flex>
        <Flex flexDir="column" align="center">
          <Link to="/home">
            <Button as="a" variant="ghost" aria-label="Home" w="100%">
              Home
            </Button>
          </Link>
          <Link to="/about">
            <Button as="a" variant="ghost" aria-label="About" w="100%">
              About
            </Button>
          </Link>
          <Link to="/contact">
            <Button as="a" variant="ghost" aria-label="Contact" w="100%">
              Contact
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
