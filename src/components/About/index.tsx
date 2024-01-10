import { Container, Content } from './About.styles'

export function About() {
  return (
    <Container>
      <Content>
        <h1> Bem vindo à Montrip!</h1>
        <p>
          <span>Na Montrip</span>, acreditamos que{' '}
          <span>viajar vai além de simplesmente explorar novos lugares;</span> é
          uma jornada que transforma, enriquece e cria memórias duradouras.
          Somos mais do que uma agência de viagens,{' '}
          <span>
            somos seus parceiros na busca por experiências extraordinárias
          </span>{' '}
          ao redor do mundo.
        </p>
        <p>
          Nossa equipe dedicada está aqui para{' '}
          <span>transformar seus sonhos de viagem em realidade</span>, seja você
          um explorador ávido ou alguém em busca de relaxamento à beira-mar.
          Explore, descubra e deixe a Montrip ser sua guia em uma jornada única.{' '}
          <span>
            Estamos ansiosos para fazer parte das suas histórias de viagem.
          </span>{' '}
          Sua próxima aventura aguarda.
        </p>{' '}
        <br />
        <p>
          {' '}
          <span>Vamos viajar juntos!</span>
        </p>
      </Content>
    </Container>
  )
}
