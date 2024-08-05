import {
  Box,
  Container,
  Flex,
  Text,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@yamada-ui/react';
import { FaBars } from 'react-icons/fa';
import PropTypes from 'prop-types';
import './Header.css';

function Header({ show, onNavClick }) {
  return (
    <Box
      as='header'
      className={`header ${show ? 'show' : 'hide'}`}
      bg='rgba(0, 0, 0, 0.8)'
      backdropFilter='blur(10px)'
      position='fixed'
      top='0'
      left='0'
      right='0'
      zIndex='1000'
    >
      <Container maxW='container.xl' py='4' px={{ base: 4, md: 8 }}>
        <Flex justify='space-between' alignItems='center'>
          <Text
            fontSize={{ base: 'lg', md: 'xl' }}
            fontWeight='bold'
            color='white'
          >
            Jou Okuyama
          </Text>
          <Box>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<FaBars />}
                variant='outline'
                color='white'
                _hover={{ bg: 'whiteAlpha.200' }}
                size={{ base: 'sm', md: 'md' }}
              />
              <MenuList bg='gray.900' borderColor='gray.700'>
                {['About', 'Skills', 'Career', 'Strengths'].map(item => (
                  <MenuItem
                    key={item}
                    onClick={() => onNavClick(item)}
                    _hover={{ bg: 'gray.800' }}
                    color='white'
                  >
                    {item}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

Header.propTypes = {
  show: PropTypes.bool.isRequired,
  onNavClick: PropTypes.func.isRequired,
};

export default Header;
