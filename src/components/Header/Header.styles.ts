import styled, { css } from 'styled-components'
import Logo from '../../assets/logo_montrip_branco.png'
import LogoWhite from '../../assets/logo_montrip.png'

interface ContainerProps {
  scrolled: boolean | string
}

interface MenuMobileProps {
  open: boolean
}

export const ImgLogo = styled.img`
  width: 100px;
`

export const Container = styled.div<ContainerProps>`
  width: 100%;
  padding: 50px 4%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 997;

  a {
    color: #fff;
    font-size: 1.1em;
    text-decoration: none;
  }

  ${ImgLogo} {
    content: url(${Logo});

    &:hover {
      transform: scale(1.05);
    }
  }

  ${(props) =>
    props.scrolled &&
    css`
      background-color: #fff;
      padding: 25px 4%;

      a {
        color: #5f8dc9;
      }

      ${ImgLogo} {
        content: url(${LogoWhite});
      }

      transition: 0.3s;
    `}
`

export const Content = styled.div`
  max-width: 1280px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const NavMenu = styled.nav`
  ul {
    list-style-type: none;
  }
  li {
    display: inline-block;
    margin: 0 40px;

    :hover {
      color: #00405c;
    }
  }
`

export const MenuDesktop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;

  @media (max-width: 964px) {
    display: none;
  }
`

export const Button = styled.button`
  padding: 10px 25px;
  font-family: 'Poppins', sans-serif;
  background-color: #5f8dc9;
  border: none;
  color: #fff;
  cursor: pointer;
`

export const ContainerSidebar = styled.div<ContainerProps>`
  display: none;
  svg {
    color: ${(props) => (props.scrolled ? '#5f8dc9' : '#fff')};
    font-size: 40px;
  }

  @media (max-width: 964px) {
    display: block;
  }
`

export const OverlayMenu = styled.div<MenuMobileProps>`
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 998;
  display: ${(props) => (props.open ? 'block' : 'none')};
`

export const MenuMobile = styled.div<MenuMobileProps>`
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  background-color: #fff;
  z-index: 999;
  width: ${(props) => (props.open ? '70%' : '0%')};
  overflow: hidden;
  transition: 0.2s;

  ul {
    text-align: right;
    display: flex;
    flex-direction: column;
    line-height: 50px;
    margin-top: 80px;
  }

  li {
    margin: 0;
  }

  a {
    color: #000;
    font-size: 1.2em;
    display: block;
    padding: 20px 8%;

    &:hover {
      background: #5f8dc9;
      color: #fff;
    }
  }

  svg {
    color: #5f8dc9;
    font-size: 60px;
    margin: 20px 4%;
  }
`
