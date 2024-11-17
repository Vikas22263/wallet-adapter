import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

const AirDrop = () => {
  const wallet = useWallet();
  const { connection } = useConnection();

  const handledrop = async () => {
    const amount = document.getElementById("amount").value 
    await connection.requestAirdrop(
      wallet.publicKey,
      amount * LAMPORTS_PER_SOL
    );
    alert("airdrop completed");
  };

  return (
    <div>
      <label htmlFor="drop">Airdrop sol</label>
      <input type="text" name="drop" id="amount" />
      <button onClick={handledrop}>Airdrop</button>
    </div>
  );
};

export default AirDrop;
