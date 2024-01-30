import { useNavigate } from "react-router-dom";
import { LoginStyled } from "../components/Login";
import { login } from "../service/api.service";

export function Login() {

  const navigate = useNavigate();

  const submitLogin = async (event: any) => {
    event.preventDefault();

    const body = {
      email: event.target.email.value,
      senha: event.target.password.value,
    };

    const result = await login(body);

    if(result) {
      localStorage.setItem("usuario", JSON.stringify(result));

      navigate("/");

    }

  };

  return (
    <LoginStyled>
      <div id="esquerdo">
        <h1>Growtweet</h1>
        <h3>Trabalho final do bloco intermediário</h3>
        <p>
          O Growtweet é a plataforma definitiva para todos os apaixonados
          <br></br> por redes sociais que buscam uma experiência familiar e
          poderosa, semelhante ao Twitter, mas com um toque único. <br></br>Seja
          parte desta comunidade que valoriza a liberdade de expressão, <br></br>
          a conexão com pessoas de todo o mundo e a disseminação de ideias.
        </p>
      </div>

      <div id="direito">
        <h2>Entrar no Growtweet</h2>
        <form onSubmit={submitLogin}>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Senha"
            required
          />
          <button type="submit">Entrar</button>
          <p className="cadastro">
            Ainda não tem acesso?
            <span> Cadastre-se</span>
          </p>
        </form>
      </div>
    </LoginStyled>
  );
}
