import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import {
  ThirdwebProvider,
  ConnectWallet,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  embeddedWallet,
} from "@thirdweb-dev/react";
//import "./styles/globals.css";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "arbitrum-goerli";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <ThirdwebProvider
      activeChain={activeChain}
      clientId="1a89a74f6ecbe74393203612be0349cc"
      supportedWallets={[
        metamaskWallet({ recommended: true }),
        coinbaseWallet(),
        walletConnect(),
        embeddedWallet({
          auth: {
            options: ["email", "google", "apple", "facebook"],
          },
        }),
      ]}
      dAppMeta={{
        name: "ABirdApp",
        description: "My ABird app description",
        logoUrl: "https://example.com/logo.png",
        url: "https://example.com",
        isDarkMode: true,
      }}
    >
      <App />
    </ThirdwebProvider>
  </React.StrictMode>
);
