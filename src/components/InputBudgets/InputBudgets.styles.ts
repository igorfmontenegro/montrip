import styled from 'styled-components'

interface ContainerProps {
  widthInput: string
}

export const Container = styled.div<ContainerProps>`
  margin: 0 10px;
  padding: 15px 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  height: 80px;
  width: ${(props) => props.widthInput};
  background-color: #f5f5f5;
  color: #00405c;
  font-weight: 500;

  input {
    border: none;
    background-color: #f5f5f5;
    font-size: 16px;
    font-weight: 600;
    padding: 5px 0px;

    &::placeholder {
      font-weight: 500;
    }

    &:focus {
      outline: none;
    }
  }
`
