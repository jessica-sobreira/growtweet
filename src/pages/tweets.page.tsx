import { Container } from "../components/Container";
import { Content } from "../components/Content";
import { LeftMenu } from "../components/LeftMenu";
import { RightMenu } from "../components/RightMenu";



export function Tweets() {
    return (
        <Container>
        <LeftMenu />
        <Content />
        <RightMenu/>
      </Container>
    )
}