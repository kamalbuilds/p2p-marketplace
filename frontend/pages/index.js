import { useState, useEffect } from "react";
import Action from "../components/header/Action";
import NavMenu from "../components/header/NavMenu";
import Profile from "../components/header/Profile";
import SearchBar from "../components/home/SearchBar";
import NewTransactionModal from "../components/transaction/NewTransactionModal";
import TransactionsList from "../components/transaction/TransactionsList";
import { useWallet } from "@solana/wallet-adapter-react";
import TransactionQRModal from "../components/transaction/TransactionQRModal";
import { useCashApp } from "../hooks/cashapp";
import Sidebar from "../components/sidebar";

const Home = () => {
  const { connected, publicKey } = useWallet();
  const [transactionQRModalOpen, setTransactionQRModalOpen] = useState(false);
  const [qrCode, setQrCode] = useState(false);

  const {
    avatar,
    userAddress,
    doTransaction,
    transactions, // can you fix it?/
    setNewTransactionModalOpen,
    newTransactionModalOpen,
  } = useCashApp();
  console.log(transactions);

  return (
    <div className="flex min-h-screen ">
      <Sidebar />

      <main className="flex flex-1 flex-col">
        <SearchBar />

        <TransactionsList connected={connected} transactions={transactions} />
      </main>
    </div>
  );
};

export default Home;
