import { useEffect, useState } from "react"
// Function that gets random avatar based on wallet address
import { getAvatarUrl } from "../functions/getAvatarUrl"
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { clusterApiUrl, Connection, Keypair, LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
import BigNumber from 'bignumber.js';


// returned object from this hook will be pulled in the dapp to display

export const useCustomhook = () =>{

    
}