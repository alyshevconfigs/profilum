// src/components/Header.jsx
import { useState } from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { Heart, ShoppingCart, User, Menu, Sun, Moon, X } from 'lucide-react';
import logo from '../images/avtohaus_logo.png';
import darklogo from '../images/avtohausblacktheme_logo.png';

const HeaderContainer = styled.header`
  background: ${props => props.theme.surface};
  padding: 1rem 1.5rem;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 8px ${props => props.theme.shadow};
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Logo = styled.img`
  height: 90px;
  cursor: pointer;

  @media (max-width: 768px) {
    height: 50px;
  }
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: ${props => (props.open ? 'flex' : 'none')};
    flex-direction: column;
    width: 100%;
    background: ${props => props.theme.surface};
    padding: 1rem 0;
    margin-top: 0.5rem;
  }
`;

const NavItem = styled(NavLink)`
  color: ${props => props.theme.text};
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 0.75rem;
  font-size: 0.95rem;

  &.active {
    color: ${props => props.theme.primary};
  }

  &:hover {
    color: ${props => props.theme.primary};
  }
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 768px) {
    order: 2;
    justify-content: center;
    width: 100%;
    margin-top: 0.5rem;
  }
`;

const ActionButton = styled(Link)`
  background: none;
  border: none;
  color: ${props => props.theme.text};
  cursor: pointer;
  padding: 0.4rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;

  &:hover {
    background: ${props => props.theme.surface};
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.text};
  cursor: pointer;
  padding: 0.4rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0.5rem;
  font-size: 1.1rem;

  &:hover {
    background: ${props => props.theme.surface};
  }
`;

const MobileMenuButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.text};
  cursor: pointer;
  padding: 0.4rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Header = ({ toggleTheme, theme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderContainer>
      <HeaderContent>
        <Link to="/">
          <Logo src={theme === 'light' ? logo : darklogo} alt="Avtohaus Logo" />
        </Link>

        <Navigation open={menuOpen}>
          <NavItem to="/" end>Главная</NavItem>
          <NavItem to="/search-parts">Запчасти</NavItem>
          <NavItem to="/diagnostics">Диагностика</NavItem>
          <NavItem to="/booking">Запись на ремонт</NavItem>
          <NavItem to="/services">Услуги</NavItem>
          <NavItem to="/about">О компании</NavItem>
          <NavItem to="/contacts">Контакты</NavItem>
        </Navigation>

        <HeaderActions>
          <ActionButton to="/favorites">
            <Heart size={20} />
          </ActionButton>
          <ActionButton to="/cart">
            <ShoppingCart size={20} />
          </ActionButton>
          <ActionButton to="/profile">
            <User size={20} />
          </ActionButton>

          <ThemeToggle onClick={toggleTheme}>
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </ThemeToggle>

          <MobileMenuButton onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </MobileMenuButton>
        </HeaderActions>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
