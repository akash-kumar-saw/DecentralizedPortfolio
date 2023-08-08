require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {}, 
    /*mainnet: {
      url: "https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID",
      accounts: [`0xYOUR_MAINNET_PRIVATE_KEY`],
    },
    sophia: {
      url: "http://sepolia.example.com",
      accounts: [`0xYOUR_SEPOLIA_PRIVATE_KEY`],
    },*/
  },

  paths: {
    artifacts: "./client/src/artifacts",
  },
};
