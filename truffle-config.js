const HDWalletProvider = require("@truffle/hdwallet-provider");
const keys = require("./keys.json");

module.exports = {
  contracts_build_directory: "./public/contracts",

  networks: {
  
     development: {
      host: "127.0.0.1",     
      port: 7545,            
     network_id: "*",      
     },
     ropsten: {
      provider: () => 
        new HDWalletProvider(
          keys.PRIVATE_KEY,
          keys.INFURA_ROPSTEN_URL
        ),
      network_id: 3,
      gas: 5500000,
      gasPrice: 20000000000,
      confirmations: 2,
      timeoutBlocks: 200
    },

   /* mainnet: {
      provider: () => new HDWalletProvider(keys.MNEMONIC, keys.INFURA_ETHER_URL),
      network_id: 1,
      gas: 0,
      gasPrice: 0,
      confirmations: 2,
      timeoutBlocks: 200
    }*/

   
  },

  mocha: {
    // timeout: 100000
  },

  compilers: {
    solc: {
      version: "0.8.11",    
 
    }
  },


};
