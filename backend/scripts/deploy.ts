const hre = require("hardhat");

async function main() {


  const CakeToken = await hre.ethers.getContractFactory("CakeToken");
  const cakeToken = await CakeToken.deploy();

  await cakeToken.deployed();

  console.log("CakeToken deployed to:", cakeToken.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// npx hardhat run scripts/deploy.ts --network bsc

// CakeToken deployed to: 0x4F726481aa761B52914C85f1E856B38a8217C270
// https://testnet.bscscan.com/address/0x4F726481aa761B52914C85f1E856B38a8217C270#code

