import {useState} from "react";
import ABI from "../ABI.json";
import { ethers } from 'ethers';

const Wallet =({saveState})=>{
      const [connected,setConnected]=useState(true);
      const isAndroid = /android/i.test(navigator.userAgent);

      const connectWallet =async()=>{
        try{
          const contractAddress = "0xA5903D66c9c03824015854115E2C73591E5b55E2";
          if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            await provider.send("eth_requestAccounts", []);

            const contract = new ethers.Contract(contractAddress, ABI, provider);

            setConnected(false);
            saveState({web3:provider,contract:contract});
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
        <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
        <span className="font-semibold text-xl text-white tracking-tight">Decentralized Portfolio</span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          
        </div>
        <div>
          {isAndroid  ? <a href="https://metamask.app.link/dapp/sriche.netlify.app/" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-dark_primary hover:bg-white mt-4 lg:mt-0">FOR SMARTPHONE USERS </a> :
            <a href="#" onClick={connectWallet} className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-dark_primary hover:bg-white mt-4 lg:mt-0">{connected? "Connect to Metamask":"Connected"}</a>}
        </div>
        </div>
      </nav>
      </>
      )
}
export default Wallet;