import { Container, Content } from './Modal.styles'

interface ModalProps {
  show: () => void
}

export function Modal(props: ModalProps) {
  return (
    <Container>
      <Content>
        <h1> Orçamento solicitado com sucesso! </h1>
        <p>
          Você receberá nossa resposta por e-mail e whatsapp em até 24 horas.
        </p>
        <button onClick={props.show}> Fechar </button>
      </Content>
    </Container>
  )
}
