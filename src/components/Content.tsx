import styled from 'styled-components';
import { TweetCard } from './TweetCard';

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
  return (
    <ContentStyled id="content">
      <div className="content-header">
        <p>Página Inicial</p>
      </div>

      <div className="content-body">
        <TweetCard />
        <TweetCard />
        <TweetCard />
        <TweetCard />
        <TweetCard />
        <TweetCard />

      </div>
    </ContentStyled>
    )
    }

  
