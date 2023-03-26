import React from "react";
import axios from "axios";

import { Cards,Container,ContainerCard,Info, Title} from "./styled.js"

const API = axios.create({
  baseURL: "https://rickandmortyapi.com/api/character"
});
export default class App extends React.Component {
  state = {
    info: []
  };

  //uma função assyncrona que por baixo dos panos ela recebe promessa implicita como resposta
  //vai pegar a API, MAPEAR, E ATUALIZAR O ESTADO COM AS INFORMAÇÕES DA API
  pegarPersonagens = async () => {
    const resposta = await API.get();
    console.log(resposta);

    //mapear array results da API
    const itensApi = resposta.data.results.map((item) => {
      return {
        ...item // spread operator
      };
    });

    this.setState({
      info: itensApi
    });
  };

  componentDidMount() {
    this.pegarPersonagens();
  }

  render() {
    return (
      <Container>
        <Title>Rick and Morty Api</Title>
        <ContainerCard>
          {this.state.info.map((item) => (
            <Cards>
              <img src={item.image} alt="" />
              <Info>
                <h3>{item.name}</h3>
                <p>{item.species}</p>
              </Info>
            </Cards>
          ))}
        </ContainerCard>
      </Container>
    );
  }
}