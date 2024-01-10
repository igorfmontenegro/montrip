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
  max-width: 1340px;
  margin: auto;
  padding: 150px 30px 0px 30px;
  color: #1b4a78;

  h1 {
    line-height: 25vh;
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
