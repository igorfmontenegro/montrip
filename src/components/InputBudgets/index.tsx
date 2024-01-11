import { Container } from './InputBudgets.styles'

interface InputBudgetsProps {
  label: string
  type: string
  name: string
  placeholder: string
  widthInput: string
}

export function InputBudgets(props: InputBudgetsProps) {
  return (
    <Container widthInput={props.widthInput}>
      <label> {props.label} </label>
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
      ></input>
    </Container>
  )
}
