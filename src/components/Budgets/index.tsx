import { InputBudgets } from '../InputBudgets'
import {
  Box,
  Card,
  CardsContainer,
  Container,
  Content,
  Data,
  Option,
  Segment
} from './Budgets.styles'

export function Budgets() {
  return (
    <Container>
      <Content>
        <h2> Solicite o seu orçamento! </h2>

        <Box>
          <Option>
            <select name="passageiros">
              <option value="1"> 01 Passageiro </option>
              <option value="2"> 02 Passageiros </option>
              <option value="3"> 03 Passageiros </option>
              <option value="4"> 04 Passageiros </option>
              <option value="5"> 05 Passageiros </option>
              <option value="5+"> Outra quantidade </option>
            </select>

            <select name="trecho">
              <option value="Ida"> Ida </option>
              <option value="Ida_e_volta"> Ida e volta </option>
            </select>
          </Option>

          <Segment>
            <InputBudgets
              label="Origem"
              type="text"
              name="origem"
              placeholder="Cidade ou aeroporto"
              widthInput="270px"
            />
            <InputBudgets
              label="Destino"
              type="text"
              name="destino"
              placeholder="Cidade ou aeroporto"
              widthInput="270px"
            />
            <InputBudgets
              label="Ida"
              type="text"
              name="data_ida"
              placeholder="Selecione a data"
              widthInput="200px"
            />
            <InputBudgets
              label="Volta"
              type="text"
              name="data_volta"
              placeholder="Selecione a data"
              widthInput="200px"
            />
          </Segment>

          <Data>
            <InputBudgets
              label="E-mail"
              type="email"
              name="email"
              placeholder="Digite o seu e-mail"
              widthInput="450px"
            />
            <InputBudgets
              label="Celular"
              type="number"
              name="celular"
              placeholder="Digite o seu celular"
              widthInput="250px"
            />
            <button> Enviar </button>
          </Data>
        </Box>

        <CardsContainer>
          <Card>
            <div></div>
            <div></div>
          </Card>
          <Card>
            <div></div>
            <div></div>
          </Card>
          <Card>
            <div></div>
            <div></div>
          </Card>
        </CardsContainer>
      </Content>
    </Container>
  )
}
