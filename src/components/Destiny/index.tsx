import { CardDestiny } from '../CardDestiny'
import { CardContainer, Container, Content, Subtitle } from './Destiny.styles'

import RiodeJaneiroRJ from '../../assets/riodejaneiro_rj.png'
import Gramado from '../../assets/gramado.png'
import FozdoIguacu from '../../assets/fozdoiguacu.png'
import Bonito from '../../assets/bonito.png'
import Londres from '../../assets/londres.png'
import Paris from '../../assets/paris.png'
import Roma from '../../assets/roma.png'
import Madrid from '../../assets/madrid.png'

export function Destiny() {
  return (
    <Container id="destiny">
      <Content>
        <Subtitle>
          <span> Os mais vendidos</span>
          <h3> DESTINOS IMPERDÍVEIS! </h3>
        </Subtitle>

        <CardContainer>
          <CardDestiny src={RiodeJaneiroRJ} city={'Rio de Janeiro/RJ'} />
          <CardDestiny src={Gramado} city={'Gramado/RS'} />
          <CardDestiny src={FozdoIguacu} city={'Foz do Iguaçu/PR'} />
          <CardDestiny src={Bonito} city={'Bonito/MS'} />
        </CardContainer>

        <CardContainer>
          <CardDestiny src={Londres} city={'Londres, UK'} />
          <CardDestiny src={Paris} city={'Paris, FR'} />
          <CardDestiny src={Roma} city={'Roma, IT'} />
          <CardDestiny src={Madrid} city={'Madrid, ES'} />
        </CardContainer>
      </Content>
    </Container>
  )
}
