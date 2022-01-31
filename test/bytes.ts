import { expect } from "chai";
import { ethers } from "hardhat";
import { hexToUtf8 } from "./utils";

describe("Bytes", function () {
  it("Should store string as byte", async function () {
    const Bytes = await ethers.getContractFactory("Bytes");
    const bytes = await Bytes.deploy();
    await bytes.deployed();

    const byte = Buffer.from("a");
    await bytes.setBytes1(byte);
    const oneByte = await bytes.oneByte();
    expect(hexToUtf8(oneByte)).to.equal("a");
  });

  it("Should fail for more than one byte", async function () {
    const Bytes = await ethers.getContractFactory("Bytes");
    const bytes = await Bytes.deploy();
    await bytes.deployed();

    const twoBytes = Buffer.from("ab");
    await expect(bytes.setBytes1(twoBytes)).to.be.reverted;
  });
});
