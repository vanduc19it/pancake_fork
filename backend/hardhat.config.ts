require("@nomiclabs/hardhat-ethers");
require('dotenv').config();
require("@nomiclabs/hardhat-etherscan");

module.exports = {
  solidity: "0.6.12",
  networks: {
    bsc: {
        url: "https://data-seed-prebsc-2-s2.binance.org:8545/",
        accounts: [process.env.PRIVATE_KEY],
        gasPrice: 10000000000,
        blockGasLimit: 1000000
    },
},
etherscan:{
  apiKey:process.env.API_KEY
}
};