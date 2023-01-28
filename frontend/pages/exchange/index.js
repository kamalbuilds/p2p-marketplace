import React from 'react'
// import Action from "../../components/header/Action";
// import NavMenu from "../../components/header/NavMenu";
// import Profile from "../../components/header/Profile";

// import NewTransactionModal from "../../components/transaction/NewTransactionModal";


// import TransactionQRModal from "../../components/transaction/TransactionQRModal";

const SimpleSwap = () => {
  return (
    <div>
    {/* <header className="flex w-[250px] flex-col bg-[blue] p-12">
        <Profile
          setModalOpen={setTransactionQRModalOpen}
          avatar={avatar}
          userAddress={userAddress}
          setQrCode={setQrCode}
        />
        <TransactionQRModal
          modalOpen={transactionQRModalOpen}
          setModalOpen={setTransactionQRModalOpen}
          userAddress={userAddress}
          setQrCode={setQrCode}
          myKey={publicKey}
        />

        <NavMenu connected={connected} publicKey={publicKey} />

        <Action setModalOpen={setNewTransactionModalOpen} />
        <NewTransactionModal
          modalOpen={newTransactionModalOpen}
          setModalOpen={setNewTransactionModalOpen}
          addTransaction={doTransaction}
        />
      </header> */}
      <h1 className='heading'>Exchange any tokens to Solana 🪙 and pay using solanaPay</h1> 
      <iframe align="centre"id="simpleswap-frame" name="SimpleSwap Widget" width="528px" height="392px" src="https://simpleswap.io/widget/3c8bcf66-8890-4fd6-bf7e-3b9ae89fd1d2" frameborder="0"></iframe>
    </div>
  )
}

export default SimpleSwap
