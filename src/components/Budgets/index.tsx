import { useState, useEffect } from 'react'
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
import { useMediaQuery } from 'react-responsive'

import { ImAirplane, ImAlarm } from 'react-icons/im'
import { TbPigMoney } from 'react-icons/tb'
import { maskPhone } from '../Masks/mask'
import { Modal } from '../Modal'

export function Budgets() {
  const [selectedOption, setSelectedOption] = useState('ida')
  const [showPopup, setShowPopup] = useState(false)
  const [phone, setPhone] = useState('')
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors }
  } = useForm<FormData>()
  const isWideScreen = useMediaQuery({ minWidth: 551 })

  const today = new Date()
  const minDate = today.toISOString().split('T')[0]
  const [minDateBack, setMinDateBack] = useState('')

  const dataIda = watch('data_ida')
  const celularValue = watch('celular')
  const trechoValue = watch('trecho')

  useEffect(() => {
    setMinDateBack(dataIda)
  }, [dataIda])

  useEffect(() => {
    setPhone(maskPhone(celularValue))
  }, [celularValue])

  useEffect(() => {
    setSelectedOption(trechoValue)
  }, [trechoValue])

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

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log(data)
    setShowPopup(true)
    reset()
    setPhone('')
  }

  const handleShowPopup = () => {
    setShowPopup(false)
  }

  return (
    <Container id="budgets">
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

            <select {...register('trecho')} value={selectedOption}>
              <option value="ida"> Ida </option>
              <option value="ida_e_volta"> Ida e volta </option>
            </select>
          </Option>

          <Segment>
            <ContainerInput width="270px" haserror={errors.origem?.type}>
              <label> Origem </label>
              <input
                {...register('origem', { required: true })}
                type="text"
                placeholder="Cidade ou aeroporto"
              />
            </ContainerInput>
            <ContainerInput width="270px" haserror={errors.destino?.type}>
              <label> Destino </label>
              <input
                {...register('destino', { required: true })}
                type="text"
                placeholder="Cidade ou aeroporto"
              />
            </ContainerInput>
            <ContainerInput
              width={isWideScreen ? '200px' : '270px'}
              haserror={errors.data_ida?.type}
            >
              <label> Ida </label>
              <input
                {...register('data_ida', { required: true })}
                type="date"
                placeholder="Selecione a data"
                min={minDate}
                max="2024-12-31"
              />
            </ContainerInput>
            {selectedOption === 'ida_e_volta' && (
              <ContainerInput width={isWideScreen ? '200px' : '270px'}>
                <label> Volta </label>
                <input
                  {...register('data_volta')}
                  type="date"
                  placeholder="Selecione a data"
                  min={minDateBack}
                  max="2024-12-31"
                />
              </ContainerInput>
            )}
          </Segment>

          <Data>
            <ContainerInput
              width={isWideScreen ? '450px' : '270px'}
              haserror={errors.email?.type}
            >
              <label> E-mail </label>
              <input
                {...register('email', { required: true })}
                type="email"
                placeholder="Digite o seu e-mail"
              />
            </ContainerInput>
            <ContainerInput
              width={isWideScreen ? '250px' : '270px'}
              haserror={errors.celular?.type}
            >
              <label> Celular </label>
              <input
                {...register('celular', { required: true, minLength: 15 })}
                value={phone}
                type="tel"
                placeholder="(xx) xxxxx-xxxx"
              />
            </ContainerInput>

            <button type="submit"> Enviar </button>
          </Data>

          {showPopup && <Modal show={handleShowPopup} />}
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
