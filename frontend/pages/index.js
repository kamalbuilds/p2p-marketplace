/* eslint-disable @next/next/no-img-element */
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
        {JSON.stringify(transactions)}
        <TransactionsList connected={connected} transactions={transactions} />
        {transactions && transactions.length === 0 && (
          <>
            <img
              src="/images/p2p.jpeg"
              className="m-auto mt-10 aspect-square h-[500px] w-[500px]"
              alt="helloworld"
            />
          </>
        )}
      </main>
    </div>
  );
};

export default Home;
