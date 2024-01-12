import styled from 'styled-components'

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  height: 330px;
  width: 280px;
  border-radius: 25px;
  background-color: #fff;
  box-shadow: 2px 2px 15px #645f5f;

  div {
    height: 270px;
  }

  &:hover {
    transform: scale(1.05);
  }

  img {
    position: absolute;
    height: 250px;
    width: 100%;
    border-radius: 25px 25px 0 0;
    top: 0;
    left: 0;
  }

  p {
    color: #00405c;
    width: 200px;
  }
`
