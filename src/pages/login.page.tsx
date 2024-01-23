import { LoginStyled } from "../components/Login";

export function Login() {
    return (
        <LoginStyled>
            <div id="esquerdo">
                <h1>Growtweet</h1>
                <h3>Trabalho final do bloco intermediário</h3>
                <p>O Growtweet é a plataforma definitiva para todos os apaixonados<br></br>
                    por redes sociais que buscam uma experiência familiar e poderosa,
                    semelhante ao Twitter, mas com um toque único. <br></br>Seja parte desta comunidade
                    que valoriza a liberdade de expressão, <br></br>a conexão com pessoas de todo o mundo
                    e a disseminação de ideias.
                </p>
            </div>

            <div id="direito">
                <h2>Entrar no Growtweet</h2>
                <form>
                    <input type="text" id="email" placeholder="Email" />
                    <input type="password" id="password" placeholder="Senha" />
                    <button type="submit">Entrar</button>
                </form>
            </div>
        </LoginStyled>
    );
}
