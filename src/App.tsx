import { useMemo } from "react";
import "./App.css";
import * as walletadapter from "@solana/wallet-adapter-base";
import { clusterApiUrl } from "@solana/web3.js";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import AirDrop from "./components/airdrop";
import Showbalance from "./components/Showbalance";
import SendMoney from "./components/SendMoney";

function App() {
  const network = walletadapter.WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);


  return (
    <>
    <div style={{padding:"20px"}}>
    <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <WalletMultiButton />
              <WalletDisconnectButton />
            </div>
            <AirDrop/>
            <Showbalance/>
            <SendMoney/>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </div>
    </>
  );
}

export default App;
