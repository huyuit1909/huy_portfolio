import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const HeaderContainer = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 0;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(motion.div)`
  font-size: 2rem;
  font-weight: 800;
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(135deg, #4f46e5, #7c3aed, #ec4899);
    background-size: 200% 200%;
    border-radius: 14px;
    z-index: -1;
    opacity: 0.4;
    filter: blur(1px);
    animation: logoGradient 4s ease-in-out infinite;
  }
  
  @keyframes logoGradient {
    0%, 100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }
`;

const LogoLetter = styled.span`
  display: inline-block;
  position: relative;
  transition: all 0.3s ease;
  font-weight: 900;
  text-shadow: 0 0 10px currentColor;
  
  &:nth-child(1) {
    color: #4f46e5;
    transform: rotate(-5deg);
    background: linear-gradient(135deg, #4f46e5, #60a5fa);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  &:nth-child(2) {
    color: #7c3aed;
    transform: rotate(5deg);
    background: linear-gradient(135deg, #7c3aed, #a855f7);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  &:nth-child(3) {
    color: #ec4899;
    transform: rotate(-3deg);
    background: linear-gradient(135deg, #ec4899, #f472b6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  &:hover {
    transform: scale(1.3) rotate(0deg);
    text-shadow: 0 0 30px currentColor;
    filter: brightness(1.2);
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
  
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    background: rgba(10, 10, 10, 0.98);
    backdrop-filter: blur(20px);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease;
  }
`;

const NavLink = styled(motion.li)`
  a {
    color: #ffffff;
    text-decoration: none;
    font-weight: 500;
    position: relative;
    transition: color 0.3s ease;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background: linear-gradient(135deg, #4f46e5, #7c3aed);
      transition: width 0.3s ease;
    }
    
    &:hover::after {
      width: 100%;
    }
    
    &:hover {
      color: #4f46e5;
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #ffffff;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1001;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'ホーム', href: '#home' },
    { name: 'プロフィール', href: '#about' },
    { name: 'スキル', href: '#skills' },
    { name: '職務経歴', href: '#experience' },
    { name: 'プロジェクト', href: '#projects' },
    { name: '資格・学歴', href: '#certifications' },
    { name: 'お問い合わせ', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <HeaderContainer
      scrolled={scrolled}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Nav>
        <Logo
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <LogoLetter>L</LogoLetter>
          <LogoLetter>Q</LogoLetter>
          <LogoLetter>H</LogoLetter>
        </Logo>
        
        <NavLinks isOpen={isMenuOpen}>
          {navItems.map((item, index) => (
            <NavLink
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <a
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
              >
                {item.name}
              </a>
            </NavLink>
          ))}
        </NavLinks>
        
        <MobileMenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
