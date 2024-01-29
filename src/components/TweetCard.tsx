import styled from "styled-components";
import curtir from "../assets/ICONE_CURTIDAS.svg";
import comentario from "../assets/ICONE_COMENTARIOS_STROKE.svg";
import { Tweet } from "../model/tweet.model";


const TweetStyled = styled.div`
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid gray;
    padding: 1em; 

    .foto {
        margin-right: 0.8em;
        img {
            height: 60px;
            width: 60px;
            position: center;
            border-radius: 50%;
        }
        

    }

    .conteudo-tweet {
        flex: 1;

    }

    .tweet-titulo {
        display: flex;
        flex-direction: row;


        h1{
            font-weight: bold;
            font-size: 1em;
            margin-right: 0.5em;
        }

        span {
            margin-right: 0.5em;
        }
    }

    .tweet-botao {
        display: flex;
        flex-direction: row;
        margin-top: 0.5em;

        .botao {
            margin-right: 2em;

        }
    }

`

export interface TweetProps {
    tweet: Tweet;

}


export function TweetCard(props: TweetProps) {
    
    return (
        <TweetStyled>
            <div className="foto">
                <img src={props.tweet.usuario.photo} alt={props.tweet.usuario.nome} />
            </div>
            <div className="conteudo-tweet">
                <div className="tweet-titulo">
                    <h1>{props.tweet.usuario.nome}</h1>
                    <span>@{props.tweet.usuario.username}</span>
                    <span>◽2h</span>
                </div>
                <div className="tweet-texto">{props.tweet.conteudo}</div>
                <div className="tweet-botao">
                    <div className="botao"><img src={comentario} alt="comentário" /></div>
                    <div className="botao"><img src={curtir} alt="curtir" /></div>
                </div>
            </div>
        </TweetStyled>
    )
}