import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 100;
`

export const Content = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 250px;
  background-color: #fff;
  color: #00405c;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  p {
    text-align: center;
    width: 350px;
  }

  button {
    border: none;
    font-size: 1em;
    padding: 15px;
    border-radius: 5px;
    background-color: #00405c;
    color: #fff;
    cursor: pointer;
  }
`
