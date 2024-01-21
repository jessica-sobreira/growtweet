import { Container } from "./components/Container";
import { Content } from "./components/Content";
import { LeftMenu } from "./components/LeftMenu";
import { RightMenu } from "./components/RightMenu";

// import { LeftMenu } from './components/LeftMenu';
// import { Content } from './components/Content';
// import { RightMenu } from './components/RightMenu';
// import { Header } from './components/Header';


function App() {

  return (
    <>
    <Container>
      <LeftMenu />
      <Content />
      <RightMenu />
    </Container>

      


    {/* <Header/>
    <Container>
    <h1>Hello world</h1>      
    </Container> */}


    </>
  )
}

export default App;
