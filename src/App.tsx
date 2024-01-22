import { Container } from "./components/Container";
import { Content } from "./components/Content";
import { LeftMenu } from "./components/LeftMenu";
import { RightMenu } from "./components/RightMenu";


function App() {

  return (
    <>
    <Container>
      <LeftMenu/>
      <Content />
      <RightMenu/>
    </Container>

  
    {/* <Header/>
    <Container>
    <h1>Hello world</h1>      
    </Container> */}


    </>
  )
}

export default App;
