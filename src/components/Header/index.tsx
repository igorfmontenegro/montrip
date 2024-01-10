import { useEffect, useState } from 'react'
import { Button, Container, Content, ImgLogo, NavMenu } from './Header.styles'

export function Header() {
  const [scrolled, setScrolled] = useState(false)

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
        <a href="#">
          <ImgLogo />
        </a>

        <NavMenu>
          <ul>
            <li>
              <a href="#"> Home </a>
            </li>
            <li>
              <a href="#"> Sobre </a>
            </li>
            <li>
              <a href="#"> Orçamentos </a>
            </li>
            <li>
              <a href="#"> Destinos </a>
            </li>
          </ul>
        </NavMenu>

        <div>
          <a href="#">
            <Button> CONTATO </Button>
          </a>
        </div>
      </Content>
    </Container>
  )
}
