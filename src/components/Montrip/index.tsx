import { Header } from '../Header'
import { Container } from './Montrip.styles'
import { HomePage } from '../HomePage'
import { About } from '../About'
import { Budgets } from '../Budgets'

export function Montrip() {
  return (
    <Container>
      <Header />
      <HomePage />
      <About />
      <Budgets />
    </Container>
  )
}
