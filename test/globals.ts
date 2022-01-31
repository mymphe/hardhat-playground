import { expect } from "chai";
import { ethers } from "hardhat";
import { Globals } from "../typechain";

describe("Globals", function () {
  let globals: Globals;

  this.beforeEach(async () => {
    const Globals = await ethers.getContractFactory("Globals");
    globals = await Globals.deploy();
    await globals.deployed();
  });

  it("Should return block number", async function () {
    const _blockNumber = await ethers.provider.getBlockNumber();
    const blockNumber = await globals.getBlockNumber();

    expect(blockNumber).to.equal(_blockNumber);
  });

  it("Should return block hash", async function () {
    const _blockNumber = (await ethers.provider.getBlockNumber()) - 1;
    const { hash: _blockHash } = await ethers.provider.getBlock(_blockNumber);
    const blockHash = await globals.getBlockHash(_blockNumber);

    expect(blockHash).to.equal(_blockHash);
  });
});
