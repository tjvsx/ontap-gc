import { DAppProvider, Config, DEFAULT_SUPPORTED_CHAINS } from "@usedapp/core";
import type { AppProps } from "next/app";
import "../styles/globals.css";

function App({ Component, pageProps }: AppProps) {

  const config: Config = {
        networks: [...DEFAULT_SUPPORTED_CHAINS],
      }

  return (
    <DAppProvider config={config}>
      <Component {...pageProps} />
    </DAppProvider>
  );
}

export default App;
