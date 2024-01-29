import styled from 'styled-components';
import { TweetCard } from './TweetCard';
import { tweet1, tweet10, tweet11, tweet12, tweet2, tweet3, tweet4, tweet5, tweet6, tweet7, tweet8, tweet9 } from '../database/tweet.db';
import { Tweet } from '../model/tweet.model';
import { useEffect, useState } from 'react';
import api from '../service/api.service';

const ContentStyled = styled.main`
overflow: auto;
scrollbar-width: thin;
border-right: 1px solid gray;


.content-header {
  padding: 1em;
  font-weight: bold;
  border-bottom: 2px solid darkgray;
  font-size: 1.2em;
}

.content-body {

  
    p {
      margin-bottom: 1em;
      margin-top: 1em;
    }
  }
`

export function Content() {

  const [tweets, setTweets] = useState<Tweet[]>([]);

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const response = await api.get('/tweets');
        setTweets(response.data.data);
      } catch (error) {
        console.error('Erro ao obter tweets:', error);
      }
    };
    fetchTweets();
  }, []);



  return (
    <ContentStyled id="content">
      <div className="content-header">
        <p>Página Inicial</p>
      </div>

      <div className="content-body">
        <TweetCard tweet={tweet1} />
        <TweetCard tweet={tweet5} />
        <TweetCard tweet={tweet3} />
        <TweetCard tweet={tweet2} />
        <TweetCard tweet={tweet4} />
        <TweetCard tweet={tweet6} />
        <TweetCard tweet={tweet7} />
        <TweetCard tweet={tweet8} />
        <TweetCard tweet={tweet9} />
        <TweetCard tweet={tweet10} />
        <TweetCard tweet={tweet11} />
        <TweetCard tweet={tweet12} />

        {
          tweets.map((item => <TweetCard key={item.id} tweet={item} />))

        }


      </div>
    </ContentStyled>
    )
    }

  
