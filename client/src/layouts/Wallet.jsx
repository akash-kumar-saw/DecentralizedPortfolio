import {useState} from "react";
import ABI from "../ABI.json";
import { ethers } from 'ethers';
import blockchain from '../assets/blockchain.png';

const Wallet =({saveState, state})=>{
      const [connected,setConnected]=useState(true);

      const connectWallet =async()=>{
        try{
          const contractAddress = "0x5441536C344f1023f8C970c3E39AB6C4Fe39D938";
          if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const accounts = await provider.send("eth_requestAccounts", []);

            const contract = new ethers.Contract(contractAddress, ABI, provider);

            setConnected(false);
            saveState({web3:provider,contract:contract,address:accounts[0]});

            window.ethereum.on('accountsChanged', (accounts) => {
              saveState({web3:provider,contract:contract,address:accounts[0]});
            });

          } else {
            console.error('No Ethereum provider found');
          }
        }catch(error){
          alert(error);
        }  
      }

      return (
      <>
        <nav className="flex items-center justify-between flex-wrap bg-dark_primary p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <img src={blockchain} alt="..." className="w-8 pr-2"/>
            <span className="font-semibold text-xl text-white tracking-tight">Decentralized Portfolio</span>
          </div>
          <div className="w-full block flex-grow md:flex md:items-center md:w-auto">
            <div className="text-sm md:flex-grow" >
              <p className="font-semibold text-x text-white">Account : {connected ? "Not Connected" : state.address}</p>
            </div>
            <a href="#" onClick={connectWallet} className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-dark_primary hover:bg-white mt-4 md:mt-0">{connected? "Connect to Metamask":"Connected"}</a>
          </div>
        </nav>
      </>
      )
}
export default Wallet;