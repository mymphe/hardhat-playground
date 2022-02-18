import { expect } from "chai";
import { BigNumber } from "ethers";
import { ethers } from "hardhat";
import { LDO, NotSupposedToHaveTokens } from "../typechain";

describe("NotSupposedToHaveTokens", function () {
  const oneMil = BigNumber.from(10 ** 6);
  let ldo: LDO;

  this.beforeEach(async () => {
    const LDO = await ethers.getContractFactory("LDO");

    ldo = await LDO.deploy(oneMil);
  });
  let nstht: NotSupposedToHaveTokens;

  this.beforeEach(async () => {
    const NotSupposedToHaveTokens = await ethers.getContractFactory(
      "NotSupposedToHaveTokens"
    );

    nstht = await NotSupposedToHaveTokens.deploy();

    const LDO = await ethers.getContractFactory("LDO");

    ldo = await LDO.deploy(oneMil);
  });

  it("should be deployed correctly", async function () {
    const number = await nstht.number();

    expect(+number).to.equal(42);
  });

  it("should be able to receive tokens", async function () {
    const [alice] = await ethers.getSigners();
    const thousand = BigNumber.from(1000);
    await ldo.connect(alice).transfer(nstht.address, thousand);

    const nsthtBalance = await ldo.balanceOf(nstht.address);

    expect(nsthtBalance).to.deep.equal(thousand);
  });

  it("should approve", async function () {
    const [alice] = await ethers.getSigners();
    const thousand = BigNumber.from(1000);
    await ldo.connect(alice).transfer(nstht.address, thousand);

    const nsthtBalance = await ldo.balanceOf(nstht.address);

    expect(nsthtBalance).to.deep.equal(thousand);
  });
});
