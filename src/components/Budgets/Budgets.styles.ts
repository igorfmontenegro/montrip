import styled from 'styled-components'

export const Container = styled.section`
  height: 100vh;
  background-color: #1b4a78;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 1280px;
  height: 100%;
  margin: auto;

  h2 {
    color: #f9fdff;
    font-size: 2rem;
    line-height: 20vh;
  }
`

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 300px;

  background-color: #fff;
  border-radius: 20px 20px;
  box-shadow: 2px 2px 4px #000;
`

export const Option = styled.div`
  display: flex;
  margin-left: 30px;

  select {
    background-color: #f5f5f5;
    color: #00405c;
    font-size: 1em;
    font-weight: 600;
    margin: 0 10px;
    padding-left: 15px;
    width: 200px;
    height: 60px;
    border: none;
    border-radius: 10px;
  }
`

export const Segment = styled.div`
  display: flex;
  margin: 0 30px;
`

export const Data = styled.div`
  display: flex;
  margin: 0 30px;

  button {
    border: none;
    width: 100px;
    background-color: #00405c;
    color: #f5f5f5;
    font-size: 1em;
    font-weight: 600;
    border-radius: 10px;
    height: 80px;
  }
`

export const CardsContainer = styled.div`
  display: flex;
  width: 80%;
  margin-top: 60px;
  justify-content: space-evenly;
`

export const Card = styled.div`
  height: 230px;
  width: 250px;
  border-radius: 25px;
  background-color: #fff;
  box-shadow: 2px 2px 5px #000;
`
