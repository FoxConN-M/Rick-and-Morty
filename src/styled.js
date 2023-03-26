import styled from "styled-components";


export const  Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #011526;

`
export const  Title = styled.h1`
  font-size: 40px;
  text-transform: uppercase;
  color: #04B2D9;
`


export const  ContainerCard = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

`
export const  Cards = styled.div`
  width: 40vh;
  border: 1px solid #fff;
  border-color: #04B2D9;
  border-radius: 8px;
  margin: 10px 1px;
  transition: all 0.5s ease-in-out;
  color: #04B2D9;

  img {
    width: 100%;
    height: 250px;
    border-radius: 8px 8px 0 0;
    opacity: .5;
    transition: all 0.5s ease-in;

    &:hover {
      opacity: 1;
    }
  }

  &:hover {
    transform: translateY(-15px);
  }
`
export const  Info = styled.div`
  h3 {
    text-transform: uppercase;
  }

`