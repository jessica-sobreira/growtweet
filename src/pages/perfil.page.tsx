import { Container } from "../components/Container";
import { PerfilContent } from "../components/PerfilContent";
import { LeftMenu } from "../components/LeftMenu";
import { RightMenu } from "../components/RightMenu";



export function Perfil() {
    return (
        <Container>
        <LeftMenu/>
        <PerfilContent/>
        <RightMenu/>
      </Container>
    )
}