import { Container } from "../components/Container";
import { Content } from "../components/Content";
import { LeftMenu } from "../components/LeftMenu";
import { RightMenu } from "../components/RightMenu";


export function Home() {
    return (
        <>
        <Container>
            <LeftMenu />
            <Content />
            <RightMenu/>
        </Container>

        </>
    )
}


