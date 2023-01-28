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

  const { transactions } = useCashApp();
  console.log("loop index page");

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
