import { expect } from "chai";
import { BigNumber } from "ethers";
import { ethers } from "hardhat";
import { LDO } from "../typechain/LDO";

describe("LDO", function () {
  const oneMil = BigNumber.from(10 ** 6);
  let ldo: LDO;

  this.beforeEach(async () => {
    const LDO = await ethers.getContractFactory("LDO");

    ldo = await LDO.deploy(oneMil);
  });

  it("should mint the sender some tokens", async function () {
    const [owner] = await ethers.getSigners();
    const balance = await ldo.balanceOf(owner.address);

    expect(balance).to.deep.equal(oneMil);
  });

  it("should allow token holders to send tokens", async function () {
    const [alice, bob] = await ethers.getSigners();
    const thousand = BigNumber.from(1000);
    await ldo.transfer(bob.address, thousand);

    const aliceBalance = await ldo.balanceOf(alice.address);
    const bobsBalance = await ldo.balanceOf(bob.address);

    expect(aliceBalance).to.deep.equal(oneMil.sub(thousand));
    expect(bobsBalance).to.deep.equal(thousand);
  });
});
