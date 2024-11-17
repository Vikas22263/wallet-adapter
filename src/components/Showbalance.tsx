import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useEffect, useState } from "react";

const Showbalance = () => {
  const [balance, setbalance] = useState<number>(0);
  const { connection } = useConnection();
  const wallet = useWallet();
  async function ShowSolBalance() {
    if (wallet.publicKey) {
      const balance = await connection.getBalance(wallet.publicKey);
      setbalance(balance/LAMPORTS_PER_SOL);
    }
  }
  useEffect(() => {
    ShowSolBalance();
  }, []);

  return (
    <div>
      Balance<h1>{balance}</h1>
    </div>
  );
};

export default Showbalance;
