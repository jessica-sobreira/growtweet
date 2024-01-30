import { useEffect, useState } from "react";
import { Container } from "../components/Container";
import { Content } from "../components/Content";
import { LeftMenu } from "../components/LeftMenu";
import { RightMenu } from "../components/RightMenu";
import { Usuario } from "../model/usuario.model";
import { useNavigate } from "react-router-dom";
import { listarTweets } from "../service/api.service";
import { Tweet } from "../model/tweet.model";


export function Perfil() {
    const [usuario, setUsuario] = useState<Usuario>();
    const [tweets, setTweets] = useState<Tweet[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const usuarioStorage = localStorage.getItem("usuario");

        if(!usuarioStorage) {
            alert("Sessão expirada, faça login novamente");
            navigate("/login");
            return;
        }

        setUsuario(JSON.parse(usuarioStorage));

    }, [])

    useEffect(() => {
        if(!usuario) {
            return;
        }

        listarTweets(usuario.id, usuario.token!).then(result =>{
            setTweets(result);
        })

    }, [usuario]);



    return (
        <>
        <Container>
            <LeftMenu />
            <Content tweets={tweets} />
            <RightMenu/>
        </Container>

        </>
    )
}


