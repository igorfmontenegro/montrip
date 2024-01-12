import { useState, ChangeEvent } from 'react'
import { InputBudgets } from '../InputBudgets'
import {
  Box,
  Card,
  CardIcon,
  CardsContainer,
  Container,
  Content,
  Data,
  Option,
  Segment
} from './Budgets.styles'

import { ImAirplane, ImAlarm } from 'react-icons/im'
import { TbPigMoney } from 'react-icons/tb'

export function Budgets() {
  const [selectedOption, setSelectedOption] = useState('ida')

  const handleOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value)
  }

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

            <select
              name="trecho"
              value={selectedOption}
              onChange={handleOptionChange}
            >
              <option value="ida"> Ida </option>
              <option value="ida_e_volta"> Ida e volta </option>
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
            {selectedOption === 'ida_e_volta' && (
              <InputBudgets
                label="Volta"
                type="text"
                name="data_volta"
                placeholder="Selecione a data"
                widthInput="200px"
              />
            )}
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
            <CardIcon>
              <ImAirplane />
            </CardIcon>
            <p> Passagens áreas para qualquer lugar do mundo!</p>
          </Card>
          <Card>
            <CardIcon>
              <ImAlarm />
            </CardIcon>
            <p>Agilidade! Receba seu orçamento em poucas horas.</p>
          </Card>
          <Card>
            <CardIcon>
              <TbPigMoney />
            </CardIcon>
            <p> Variedade de passagens que cabem no seu bolso! </p>
          </Card>
        </CardsContainer>
      </Content>
    </Container>
  )
}
