import styled from 'styled-components';
import { Header } from './Header';
import casinha from '../assets/PAGINA_INICIAL_STROKE.svg';
import explorar from '../assets/EXPLORAR_STROKE.svg';
import perfil from '../assets/PERFIL_STROKE.svg';

interface UsuarioProps {
    photo: string;
    nome: string;
    username: string;
}


const LeftMenuStyled = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-right: 1px solid gray;

    #topo {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #menu {
        list-style: none;
        align-items: center;
        gap: 1.4em;
        font-size: 1.2em;
    }

    #icone {
        margin-right: 0.5em;
        width: 20px;
    }

    #item {
        margin-bottom: 0.8em;
    }

    #tweetar {
        background-color: #1DA1F2;
        color: white;
        border: none;
        border-radius: 20px;
        padding: 0.5em 2.5em;
        font-size: 1em;
        align-items: center;
    }


    #rodape {
        display: flex;
        flex-direction: column;
        margin-bottom: 1.5em;
    }

    #sair {
        background-color: transparent;
        border: none;
        color: white;
        font-weight: bold;
        font-size: 1em;
        cursor: pointer;
        align-self: start;


    }

`

export function LeftMenu() {
    return (
        <LeftMenuStyled id="left">
            <div id="topo">
                <Header />
                <ul id="menu">
                    <li id="item">
                        <img src={casinha} alt="Página Inicial ícone" id="icone"/>
                        <span>Página Inicial</span>
                    </li>

                    <li id="item">
                        <img src={explorar} alt="Explorar ícone" id="icone"/>
                        <span>Explorar</span>
                    </li>

                    <li id="item">
                        <img src={perfil} alt="Perfil ícone" id="icone"/>
                        <span>Perfil</span>
                    </li>
                </ul>

                <button id="tweetar">Tweetar</button>
            </div>

            <div id="rodape">
                <div>
                    <img src="" alt="" />
                    <span>Nome Usuário</span>
                    <span>@username</span>
                </div>
                <button id="sair">Sair</button>
            </div>
        </LeftMenuStyled>
    )
}