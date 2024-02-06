import styled from 'styled-components'
import BackgroundImage from '../../assets/background.jpg'

export const Banner = styled.section`
  height: 100vh;
  background-image: url(${BackgroundImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;

  div {
    display: flex;
    align-items: center;
  }

  h1 {
    color: #1b4a78;
    text-align: center;
    font-size: 3.5em;
    letter-spacing: -2px;
    margin-top: -120px;

    @media (max-width: 1320px) {
      font-size: 2.5em;
    }

    @media (max-width: 1000px) {
      font-size: 2.5em;
    }

    @media (max-width: 930px) {
      font-size: 2em;
    }
  }

  span {
    color: #cbcbd7;
  }
`
