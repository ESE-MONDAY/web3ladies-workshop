import {Web3} from 'web3';
import { useState} from 'react';
import './App.css';

function App() {
    const [contract, setContract] = useState(null);
    const [account, setAccount] = useState(null);
    const [name, setName] = useState('');
    const [formattedAccount, setFormattedAccount] = useState(null);
    const [storedName, setStoredName] = useState('');
 

    const contractAddress = '0xC15C70261CC88687eC162f28085C070Da60574b6'; // Your contract address
    const contractABI = [
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "_name",
            "type": "string"
          }
        ],
        "name": "setName",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getName",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "name",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ] // Your contract ABI



  function formatWalletAddress(address) {
    if (!address) {
      return ""; // Return an empty string instead of a message
    }
    const firstPart = address.slice(0, 6);
    const lastPart = address.slice(-4);
    return `${firstPart}...${lastPart}`;
  }


const connectWallet = async () => {
  if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const chainId = await window.ethereum.request({ method: 'eth_chainId' });

      const targetChainId = '0x8274f'; // Target chain ID in hex format

      if (chainId !== targetChainId) {
        try {
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: targetChainId }],
          });
        } catch (error) {
          if (error.code === 4902) {
            // Chain not recognized, add it
            await window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [{
                chainId: targetChainId,
                chainName: 'Scroll Sepolia',
                rpcUrls: ['https://sepolia-rpc.scroll.io'],
                nativeCurrency: {
                  name: 'Ethereum',
                  symbol: 'ETH',
                  decimals: 18,
                },
                blockExplorerUrls: ['https://sepolia.scrollscan.com/'],
              }],
            });
          } else {
            console.error('Error switching chains:', error);
          }
        }
      }
      
      const shortenedWalletAddress = formatWalletAddress(accounts[0]);
      setFormattedAccount(shortenedWalletAddress)
      setAccount(accounts[0]);
      const signature = signMessage("Welcome to web3ladies!");
      console.log(accounts[0], chainId, signature);
    } catch (err) {
      console.error(err.message);
    }
  } else {
    console.log("Please install MetaMask");
  }
};

const signMessage = async (message) => {
  // Check if window.ethereum is available
  if (!window.ethereum) {
    alert("Ethereum provider is not available. Please install MetaMask or enable the provider.");
    return;
  }

  // Request accounts
  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });

  if (!accounts || accounts.length === 0) {
    throw new Error("No account connected");
  }

  try {
    // Initialize Web3 with the provider from window.ethereum
    const web3Instance = new Web3(window.ethereum);
    const signature = await web3Instance.eth.personal.sign(message, accounts[0], '');
    
    // Your contract ABI
    const contract = new web3Instance.eth.Contract(contractABI, contractAddress);
    
    setContract(contract);
    return signature;
  } catch (error) {
    console.error('Failed to sign message:', error);
  }
};



const handleSubmit = async (event) => {
  event.preventDefault(); // Prevent default form submission behavior
  if (!contract || !account) return;

  try {
    // Ensure 'name' is properly set
    await contract.methods.setName(name).send({ from: account });
    
    alert("Name stored on the blockchain!");
  } catch (error) {
    console.error('Failed to set name:', error);
  }
};



const getName = async () => {
  try {
    const name = await contract.methods.getName().call();
    setStoredName(name);
  } catch (err) {
    console.error("Error fetching name", err);
  }
};





  return (
    <div className="bg-full p-4  max-w-[400px] mx-auto ">
      
      <div className='w-full flex justify-between border-1 border-b-purple-300'>
        <h2 className='font-bold text-xl '>BlockGuess</h2>
        { !formattedAccount && (
             <button onClick={connectWallet} className='bg-purple-600 text-sm rounded-md border-none px-4 py-2 text-white hover:bg-purple-400'>
              Connect Wallet</button>
        )}
   
      </div>
      <p className="text-xl font-medium mt-4">
      Hello web3ladies! Welcome to BlockGuess

      
      </p>
      {formattedAccount && (
        <p>Connected account: {formattedAccount}</p>
      )}
    
      { account ? (
        <div className="mt-8">
        <button className="bg-purple-600 text-sm rounded-md border-none p-4 text-white hover:bg-purple-400" onClick={getName}>
          Get Stored Name
        </button>
        {storedName && <p className="mt-2">Stored Name: {storedName}</p>}
      </div>
      ) :(
        <p className="mt-4">Connect your wallet to get started!</p>
      )}
      


      <div className='mt-4  flex flex-col gap-2'>
        <form className='mt-4  flex flex-col gap-2 p-2 max-w-[400px]'>
          <input name='name' className='border-purple-600 w-full border-2' value={name} onChange={(e) => setName(e.target.value)} />
          <button onClick={handleSubmit} disabled={!formattedAccount} className='bg-purple-600 text-sm rounded-md border-none p-4 text-white hover:bg-purple-400 disabled:cursor-not-allowed'>Store Name</button>

        </form>
      </div>

   
      
      
    </div>
  );
}

export default App;
