import './App.css';
import { ethers } from "ethers";
import { useEffect, useState } from 'react';

import Home from './pages/home';
import Dashboard from './pages/dashboard';
import { Wallet } from './services/wallet.service'

function App() {
  const [address, setAddress] = useState("")
  const [error, setErrror] = useState("")
  const [balance, setBalance] = useState("")
  const [value, setValue] = useState("")

  const provider = new ethers.providers.Web3Provider(((window as any).ethereum), 'any')

  const getBalance = async (wallet: string) => {
    let balance: ethers.BigNumberish = await provider.getBalance(wallet);
    // I use the code below to convert the balance from wei to eth
    balance = ethers.utils.formatEther(balance);
    let ethBalance = Number.parseFloat(balance).toFixed(2)
    setBalance(ethBalance)
  }

  const getWallet = async (wallet: string) => {
    Wallet.validateAddress(wallet).then(async (data) => {
      setAddress(data)
      getBalance(data)
    }).catch(err => {
      setErrror("Invalid wallet address")
    })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    getWallet(value)
    setValue("")
  }

  useEffect(() => {
    setTimeout(() => {
      setErrror("")
    }, 5000)
  }, [error])

  return (
    <div>
      {address && error === "" ? (
        <Dashboard address={address} balance={balance} />
      ) : (
        <Home handleSubmit={handleSubmit} error={error} value={value} setValue={setValue} />
      )}
    </div>
  );
}

export default App;
