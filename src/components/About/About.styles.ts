import styled from 'styled-components'
import Travel from '../../assets/mantravel.png'

export const Container = styled.section`
  background-color: #f9fdff;
  height: 100vh;
  background-image: url(${Travel});
  background-repeat: no-repeat;

  background-position: right;

  @media (max-width: 1340px) {
    background-image: url();
  }

  @media (max-width: 1000px) {
    height: auto;
    padding-bottom: 50px;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  max-width: 1380px;
  height: 100%;
  margin: auto;
  padding: 0px 50px;
  color: #1b4a78;

  h1 {
    margin: 70px 0;
    font-size: 2em;
  }

  p {
    font-size: 1.2em;
    line-height: 1.8;
    max-width: 900px;
    text-align: justify;

    span {
      font-weight: 700;
    }
  }

  @media (max-width: 1000px) {
    align-items: center;

    h1 {
      font-size: 1.8em;
    }
    p {
      font-size: 1em;
      max-width: 450px;
    }
  }
`
