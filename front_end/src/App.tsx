import React from 'react';
import { DAppProvider, ChainId } from "@usedapp/core"
function App() {
  return (
    <DAppProvider config={{
      supportedChains: [ChainId.Kovan, ChainId.Rinkeby]
    }}>
      <App /> {/* Wrap your app with the Provider */}
    </DAppProvider>
  );
}

export default App;
