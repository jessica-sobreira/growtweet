import styled from "styled-components";

const RightMenuStyled = styled.div`
    background-color: lightgray;
    border-left: 1px solid darkgray;
    width: 280px;
    height: 280px;
    padding: 1em;
    border-radius: 15px;
    display: flex;
    align-items: start;
    flex-direction: column;
    margin-left: 3em;
    margin-right: 1em;
    margin-top: 2em;
    color: black;

    h3 {
        margin-bottom: 0.5em;
        font-size: 1em;
    }

    p {
        color: gray;
        font-size: 0.8em;
    }

    strong {
        font-size: 0.9em;

    }

    h4 {
        color: #1DA1F2;
        font-size: 0.8em;
        margin-top: -0.5em;
    }

`



export function RightMenu() {
    return (
        <RightMenuStyled>
            <h3>O que está acontecendo?</h3>
            <div>
                <p>Esportes - Há 45min</p>
                <strong>Assunto sobre esportes</strong>
            </div>
            <br />

            <div>
                <p>Assunto do Momento em Brasil</p>
                <strong>Assunto do Momento</strong>
            </div>
            <br />

            <div>
                <p>Música - Assunto do Momento</p>
                <strong>Assunto sobre música</strong>
            </div>
            <br />

            <div>
                <p>Cinema - Assunto do Momento</p>
                <strong>Assunto sobre Filmes e Cinema</strong>
            </div>
            <br />
            <h4>Mostrar mais</h4>

        </RightMenuStyled>
    )
}