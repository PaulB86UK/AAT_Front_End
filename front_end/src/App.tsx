import React from 'react';
import { DAppProvider, ChainId } from "@usedapp/core"
import { Header } from "./components/Header"
import {Container} from "@material-ui/core"

function App() {
  return (
    <DAppProvider config={{
      supportedChains: [ChainId.Kovan, ChainId.Rinkeby]
    }}>
      <Header />
      <Container maxWidth="md">
        <div>Mi primera pagina web con TypeScript!</div>
      </Container>
    </DAppProvider>
  );
}

export default App;
