import React from 'react'
import { LinksContainer, LogoContainer, LogoImg, NavBarContainer, NavLinkStyled, NavMenuStyled, NavCartStyled, NavLinksLiStyled } from './NabBar.Styles'
import Logo from '../../Images/img/Logo_Circ.png'
import { HiViewGrid } from 'react-icons/hi'
import { TiShoppingCart } from 'react-icons/ti'

const NavBar = () => {
  return (
    <NavBarContainer>
      <LogoContainer>
        <LogoImg>
          <img src={Logo}/>Money<span>NET</span></LogoImg>
      </LogoContainer>
      <LinksContainer>
      <NavLinksLiStyled><a href="#">Beneficios</a></NavLinksLiStyled>
      <NavLinksLiStyled><a href="#">Crypto</a></NavLinksLiStyled>
      <NavLinksLiStyled><a href="#">About Us</a></NavLinksLiStyled>
      <NavLinksLiStyled><a href="#">Contactenos</a></NavLinksLiStyled>
      </LinksContainer>
      <LinksContainer>
      <li><NavMenuStyled><HiViewGrid/></NavMenuStyled></li>
      <li><NavCartStyled><TiShoppingCart/></NavCartStyled></li>
      </LinksContainer>
    </NavBarContainer>
  )
}

export default NavBar