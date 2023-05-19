const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Cake token", function () {
  it("Should return owner of token", async function () {
    const [owner]=await ethers.getSigners();
    const CakeToken = await ethers.getContractFactory("CakeToken");
    const cakeToken = await CakeToken.deploy();
    await cakeToken.deployed();
    const owneraddress= await cakeToken.owner();

    expect(owneraddress).to.equal(owner.address);
  });
});