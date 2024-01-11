import styled from 'styled-components'
import Travel from '../../assets/mantravel.png'

export const Container = styled.section`
  background-color: #f9fdff;
  height: 100vh;
  background-image: url(${Travel});
  background-repeat: no-repeat;

  background-position: right;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  max-width: 1340px;
  height: 100%;
  margin: auto;
  padding: 0px 30px;
  color: #1b4a78;

  h1 {
    line-height: 20vh;
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
`
