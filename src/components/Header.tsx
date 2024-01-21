import styled from "styled-components";
import logoGrowtweet from "../assets/LOGO_GROWTWEET.svg";

export const HeaderStyled = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    padding: 1rem;

    color: blue;
    font-size: 2rem;
    background-color: pink;

    img{
        width: 160px;
        height: auto;
    }
`

export function Header() {
    return (
        <HeaderStyled>
            <img src={logoGrowtweet} alt="logo Growtweet" />
        </HeaderStyled>

    )
}