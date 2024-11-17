import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";

const SendMoney = () => {
  const wallet = useWallet();
  const { connection } = useConnection();

  async function sendSol() {
    let to = document.getElementById("to").value;
    let amount = document.getElementById("amount").value;
    const transaction = new Transaction();
    transaction.add(
      SystemProgram.transfer({
        fromPubkey: wallet.publicKey,
        toPubkey: new PublicKey(to),
        lamports: amount * LAMPORTS_PER_SOL,
      })
    );
    await wallet.sendTransaction(transaction, connection);
    alert("sended");
  }

  return (
    <div>
      <input id="to" type="text" placeholder="To" />
      <input id="amount" type="text" placeholder="Amount" />
      <button onClick={sendSol}>Send</button>
    </div>
  );
};

export default SendMoney;
