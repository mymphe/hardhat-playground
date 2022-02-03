import { expect } from "chai";
import { ethers } from "hardhat";
import { Packing } from "../typechain";

describe("Packing", function () {
  let packing: Packing;

  this.beforeEach(async () => {
    const Packing = await ethers.getContractFactory("Packing");
    packing = await Packing.deploy();
    await packing.deployed();
  });

  it("Should spend more gas using loosely packed struct", async function () {
    const [signer1, signer2] = await ethers.getSigners();
    const twelveBytes = new Uint8Array(12).map(() =>
      Math.floor(Math.random() * 8)
    );

    const args: [string, string, Uint8Array] = [
      signer1.address,
      signer2.address,
      twelveBytes,
    ];

    const [r1, r2] = await Promise.all([
      packing.setLooselyPackedStruct(...args).then((tx) => tx.wait()),
      packing.setTightlyPackedStruct(...args).then((tx) => tx.wait()),
    ]);

    expect(+r1.gasUsed).to.be.greaterThan(+r2.gasUsed);
  });
});
