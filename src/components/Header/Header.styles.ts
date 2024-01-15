import styled, { css } from 'styled-components'
import Logo from '../../assets/logo_montrip_branco.png'
import LogoWhite from '../../assets/logo_montrip.png'

interface ContainerProps {
  scrolled: boolean | string
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

  a {
    color: #fff;
    font-size: 1.1em;
    text-decoration: none;
  }

  ${ImgLogo} {
    content: url(${Logo});
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

  a:hover {
    transform: scale(1.05);
  }
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

export const Button = styled.button`
  padding: 10px 25px;
  font-family: 'Poppins', sans-serif;
  background-color: #5f8dc9;
  border: none;
  color: #fff;
  cursor: pointer;
`
