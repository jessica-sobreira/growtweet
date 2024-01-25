import styled from "styled-components";
import { useEffect, useState } from 'react';
import api from '../service/api.service';
import { Tweet } from "../model/tweet.model";


const ContentStyled = styled.div`
    overflow: auto;
    border: 1px solid darkgray;

    h1 {
        font-size: 1.2em;
        margin-left: 1em;
        margin-top: 1em;
        margin-bottom: 0.5em;
    }
`


export function PerfilContent() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const response = await api.get('/tweets');
        setTweets(response.data);
      } catch (error) {
        console.error('Erro ao obter tweets:', error);

      }
    };

    fetchTweets();
  }, []);

  return (
    <ContentStyled id="content">
      <h1>Perfil</h1>
      <hr></hr>
      <ul>
        {tweets.map((tweet: Tweet) => (
          <li key={tweet.id}>{tweet.conteudo}</li>
        ))}
      </ul>
    </ContentStyled>
  );
}
