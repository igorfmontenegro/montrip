import { useEffect, useState } from 'react'
import {
  Button,
  Container,
  ContainerSidebar,
  Content,
  ImgLogo,
  MenuDesktop,
  MenuMobile,
  NavMenu,
  OverlayMenu
} from './Header.styles'

import { GrFormClose } from 'react-icons/gr'
import { FaBars } from 'react-icons/fa'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuActive, setMenuActive] = useState(false)

  useEffect(() => {
    function handleScroll() {
      const scrollTop = document.documentElement.scrollTop
      if (scrollTop > 80 && scrolled === false) {
        setScrolled(true)
      } else if (scrollTop < 80 && scrolled === true) {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled])

  return (
    <Container scrolled={scrolled}>
      <Content>
        <a href="#home">
          <ImgLogo />
        </a>

        <MenuDesktop>
          <NavMenu>
            <ul>
              <li>
                <a href="#home"> Home </a>
              </li>
              <li>
                <a href="#about"> Sobre </a>
              </li>
              <li>
                <a href="#budgets"> Orçamentos </a>
              </li>
              <li>
                <a href="#destiny"> Destinos </a>
              </li>
            </ul>
          </NavMenu>
          <div>
            <a href="#">
              <Button> CONTATO </Button>
            </a>
          </div>
        </MenuDesktop>

        <ContainerSidebar scrolled={scrolled}>
          <FaBars
            onClick={() => {
              setMenuActive(true)
            }}
          />
        </ContainerSidebar>

        <MenuMobile open={menuActive}>
          <GrFormClose
            onClick={() => {
              setMenuActive(false)
            }}
          />
          <NavMenu>
            <ul>
              <li>
                <a href="#home"> Home </a>
              </li>
              <li>
                <a href="#about"> Sobre </a>
              </li>
              <li>
                <a href="#budgets"> Orçamentos </a>
              </li>
              <li>
                <a href="#destiny"> Destinos </a>
              </li>
            </ul>
          </NavMenu>
        </MenuMobile>

        <OverlayMenu
          open={menuActive}
          onClick={() => {
            setMenuActive(false)
          }}
        />
      </Content>
    </Container>
  )
}
