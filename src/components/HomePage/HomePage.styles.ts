import styled from 'styled-components'
import BackgroundImage from '../../assets/background.jpg'

export const Banner = styled.section`
  height: 100vh;
  background-image: url(${BackgroundImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  h1 {
    color: #1b4a78;
    text-align: center;
    line-height: 90vh;
    font-size: 3.5em;
    letter-spacing: -2px;
  }

  span {
    color: #cbcbd7;
  }
`
