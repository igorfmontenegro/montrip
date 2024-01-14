import { useState, ChangeEvent } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import {
  Box,
  Card,
  CardIcon,
  CardsContainer,
  Container,
  ContainerInput,
  Content,
  Data,
  Option,
  Segment
} from './Budgets.styles'

import { ImAirplane, ImAlarm } from 'react-icons/im'
import { TbPigMoney } from 'react-icons/tb'
import { maskPhone } from '../Masks/mask'

export function Budgets() {
  const [selectedOption, setSelectedOption] = useState('ida')
  const [phone, setPhone] = useState('')

  const handleOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value)
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPhone(maskPhone(event.target.value))
  }

  const { register, handleSubmit } = useForm<FormData>()

  interface FormData {
    passageiros: number
    trecho: string
    origem: string
    destino: string
    data_ida: string
    data_volta: string
    email: string
    celular: string
  }

  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data)

  return (
    <Container>
      <Content>
        <h2> SOLICITE O SEU ORÇAMENTO! </h2>

        <Box onSubmit={handleSubmit(onSubmit)}>
          <Option>
            <select {...register('passageiros')}>
              <option value="1"> 01 Passageiro </option>
              <option value="2"> 02 Passageiros </option>
              <option value="3"> 03 Passageiros </option>
              <option value="4"> 04 Passageiros </option>
              <option value="5"> 05 Passageiros </option>
              <option value="5+"> Outra quantidade </option>
            </select>

            <select
              {...register('trecho')}
              value={selectedOption}
              onChange={handleOptionChange}
            >
              <option value="ida"> Ida </option>
              <option value="ida_e_volta"> Ida e volta </option>
            </select>
          </Option>

          <Segment>
            <ContainerInput width="270px">
              <label> Origem </label>
              <input
                {...register('origem', { required: true })}
                type="text"
                placeholder="Cidade ou aeroporto"
              />
            </ContainerInput>
            <ContainerInput width="270px">
              <label> Destino </label>
              <input
                {...register('destino', { required: true })}
                type="text"
                placeholder="Cidade ou aeroporto"
              />
            </ContainerInput>
            <ContainerInput width="200px">
              <label> Ida </label>
              <input
                {...register('data_ida', { required: true })}
                type="date"
                placeholder="Selecione a data"
              />
            </ContainerInput>
            {selectedOption === 'ida_e_volta' && (
              <ContainerInput width="200px">
                <label> Volta </label>
                <input
                  {...register('data_volta')}
                  type="date"
                  placeholder="Selecione a data"
                />
              </ContainerInput>
            )}
          </Segment>

          <Data>
            <ContainerInput width="450px">
              <label> E-mail </label>
              <input
                {...register('email', { required: true })}
                type="email"
                placeholder="Digite o seu e-mail"
              />
            </ContainerInput>
            <ContainerInput width="250px">
              <label> Celular </label>
              <input
                {...register('celular', { required: true, minLength: 15 })}
                value={phone}
                onChange={handleInputChange}
                type="tel"
                placeholder="(xx) xxxxx-xxxx"
              />
            </ContainerInput>

            <button type="submit"> Enviar </button>
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
            <p> Viajar não precisa ser caro! Opções que cabem no seu bolso. </p>
          </Card>
        </CardsContainer>
      </Content>
    </Container>
  )
}
