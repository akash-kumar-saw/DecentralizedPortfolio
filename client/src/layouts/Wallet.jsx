import {useState} from "react";
import ABI from "../ABI.json";
import { ethers } from 'ethers';
import blockchain from '../assets/blockchain.png';

const Wallet =({saveState})=>{
      const [connected,setConnected]=useState(true);
      const [accountAddress, setAccountAddress] = useState("");
      const isAndroid = /android/i.test(navigator.userAgent);

      const connectWallet =async()=>{
        try{
          const contractAddress = "0x258F818f774486B9f24a23e8F8a3805e71B4D02A";
          if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const accounts = await provider.send("eth_requestAccounts", []);

            const contract = new ethers.Contract(contractAddress, ABI, provider);

            setConnected(false);
            setAccountAddress(accounts[0]); 
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
            <img src={blockchain} alt="..." className="w-8 pr-2"/>
            <span className="font-semibold text-xl text-white tracking-tight">Decentralized Portfolio</span>
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow" >
              <p className="font-semibold text-x text-white">Account : {connected ? "Not Connected" : accountAddress}</p>
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