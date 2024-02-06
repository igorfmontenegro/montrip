import styled from 'styled-components'

export const Container = styled.section`
  height: auto;
  background-color: #f9fdff;
  color: #1b4a78;
  padding-bottom: 100px;
`

export const Content = styled.div`
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: auto;
`

export const Subtitle = styled.div`
  margin-top: 60px;
  text-align: center;

  h3 {
    font-size: 2em;
  }
`

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 280px);
  margin-top: 60px;
  gap: 50px;
  justify-content: center;
`
