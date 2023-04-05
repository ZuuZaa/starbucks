import { HeaderLinkStyled, LinkList, SosialLinkStyled } from "styled/links";
import { FaYoutube } from 'react-icons/fa';
import { Header } from "components/header";

function App() {
  return (
    <>
      <div className="App">
        <Header/>
        <br/>
        <HeaderLinkStyled to="/">hello </HeaderLinkStyled>
        <LinkList>
        <SosialLinkStyled><FaYoutube/></SosialLinkStyled>
        <SosialLinkStyled><FaYoutube/></SosialLinkStyled>
        </LinkList>
      </div>
    </>

  );
}

export default App;
