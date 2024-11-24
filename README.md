

# BlockGuess - A Web3-based Blockchain App

**BlockGuess** is a simple Web3-based decentralized application (dApp) that interacts with the blockchain using the Web3.js library. The app allows users to store and retrieve a name on the blockchain. This project was developed as part of a **Web3Ladies** workshop to introduce blockchain development and smart contracts to beginners.

### Workshop Overview

This project was created for the **Web3Ladies** and **Web3.js Ambassadors** workshop, which focused on teaching how to build decentralized applications (dApps) using the Web3.js library. Participants learned the basics of blockchain development, how to interact with the Ethereum blockchain via MetaMask, and how to build a simple decentralized app that stores and retrieves data from the blockchain.

---

## Features
- **Connect Wallet**: The app allows users to connect their MetaMask wallet to interact with the blockchain.
- **Store Name**: Users can store a name on the blockchain, which is saved to a smart contract.
- **Retrieve Name**: Users can retrieve the name stored on the blockchain.
- **Blockchain Interaction**: The app interacts with the Scroll Sepolia blockchain using the Web3.js library to execute smart contract functions like `setName` (store a name) and `getName` (retrieve the stored name).

---

## Prerequisites

Before running the app, make sure you have the following:

- **MetaMask**: A browser extension for managing your Ethereum accounts and interacting with the blockchain.
- **Scroll Sepolia**: The app is deployed on the Scroll Sepolia blockchain (a Layer 2 solution for Ethereum). You'll need to configure your MetaMask to connect to the Sepolia network.
- **Web3.js**: A library used to interact with the Ethereum blockchain.

---

## Setup Instructions

### 1. Install MetaMask
- Download and install the MetaMask browser extension from [here](https://metamask.io/).
- Create or import an Ethereum wallet.

### 2. Connect to Scroll Sepolia
- Add the **Scroll Sepolia** network to MetaMask with the following details:
  - Network Name: **Scroll Sepolia**
  - RPC URL: `https://sepolia-rpc.scroll.io`
  - Chain ID: `0x8274f`
  - Native Currency: `ETH`
  - Block Explorer URL: `https://sepolia.scrollscan.com/`

### 3. Clone the Project
Clone this repository to your local machine:

```bash
git clone https://github.com/ESE-MONDAY/web3ladies-workshop.git
cd blockguess
```

### 4. Install Dependencies

Install the necessary dependencies using npm or yarn:

```bash
npm install
```

### 5. Run the App

Once everything is installed, run the app locally:

```bash
npm start
```

This will start the application and open it in your default web browser.

---

## How the App Works

### Step 1: Connect Your Wallet
Click the **Connect Wallet** button to connect your MetaMask wallet to the app. The app will prompt you to switch to the Scroll Sepolia network if you're not already connected.

### Step 2: Store Your Name
Enter your name in the input field and click **Store Name**. This will store your name on the Scroll Sepolia blockchain. Only accounts that are connected via MetaMask can perform this action.

### Step 3: Retrieve the Stored Name
Once a name is stored, you can click **Get Stored Name** to retrieve the name. The app will display the name stored on the blockchain.

---

## Technical Details

- **Frontend**: The app is built with React.js and uses the Web3.js library to interact with the Ethereum blockchain.
- **Smart Contract**: The contract is deployed on the Scroll Sepolia blockchain. The contract has the following functions:
  - `setName(string _name)`: Stores a name on the blockchain.
  - `getName()`: Retrieves the stored name from the blockchain.
  - `name()`: A view function that returns the stored name.

---

## Deployment

This app is deployed to **Fleek** and interacts with the **Scroll Sepolia** blockchain.

- You can access the deployed app [here](https://great-insect-scarce.on-fleek.app/).
- The app interacts with the deployed smart contract at address `0xC15C70261CC88687eC162f28085C070Da60574b6`.

---

## Contributing

If you'd like to contribute to the project, feel free to fork the repository, submit issues, and open pull requests. Contributions are welcome!

---

## Acknowledgments

- **Web3Ladies**: For organizing the workshop and empowering women in Web3.
- [**Web3.js**](https://web3js.org/): For providing an easy-to-use JavaScript library for interacting with the Ethereum blockchain.
- **Scroll Sepolia**: For providing a fast and scalable Layer 2 solution for Ethereum.

---

## Social Media & Tags

Join the Web3Ladies community:
- **LinkedIn**: [Web3Ladies LinkedIn](https://www.linkedin.com/company/web3ladies/)
- **Twitter**: [Web3Ladies Twitter](https://x.com/web3ladies)
- **Discord**: [Web3Ladies Discord](https://discord.gg/6W8CuBQU)
  

---

**Happy coding! 🚀**

---

