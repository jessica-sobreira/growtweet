import React, { useState, FormEvent, ChangeEvent } from "react";
import { LoginStyled } from "../components/Login";
import { ModalStyled } from "../components/Modal";
import axios from "axios";

export function Login() {
  const [nome, setNome] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalNome, setModalNome] = useState<string>("");
  const [modalUsername, setModalUsername] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3005/login", {
        email,
        senha,
      });

      console.log(response.data);

      window.location.href = "/tweets";
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };

  const criarUsuario = async () => {
    try {
      const response = await axios.post("http://localhost:3005/usuario", {
        nome: modalNome,
        username: modalUsername,
        email,
        senha,
      });
      console.log(response.data);

      setShowModal(true);
    } catch (error) {
      console.error("Erro ao criar o usuário:", error);
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
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          />
          <input
            type="password"
            id="password"
            placeholder="Senha"
            value={senha}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setSenha(e.target.value)}
          />
          <button type="submit">Entrar</button>
          <p className="cadastro">
            Ainda não tem acesso?
            <span onClick={criarUsuario}> Cadastre-se</span>
          </p>
        </form>
      </div>

      {showModal && (
        <ModalStyled>
          <h2>Cadastre-se</h2>
          <form onSubmit={criarUsuario}>
            <label>
              Nome:
              <input
                type="text"
                value={modalNome}
                onChange={(e) => setModalNome(e.target.value)}
              />
            </label>
            <label>
              Username:
              <input
                type="text"
                value={modalUsername}
                onChange={(e) => setModalUsername(e.target.value)}
              />
            </label>
            <label>
              Email:
              <input
                type="text"
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              />
            </label>
            <label>
              Senha:
              <input
                type="password"
                value={senha}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setSenha(e.target.value)}
              />
            </label>
            <button type="submit">Cadastrar</button>
          </form>
          <button onClick={() => setShowModal(false)}>Fechar</button>
        </ModalStyled>
      )}
    </LoginStyled>
  );
}
