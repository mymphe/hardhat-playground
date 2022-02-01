import { expect } from "chai";
import { solidityPack } from "ethers/lib/utils";
import { ethers } from "hardhat";
import { MessageVerifier } from "../typechain";

describe("MessageVerifier", function () {
  let messageVerifier: MessageVerifier;

  this.beforeEach(async () => {
    const MessageVerifier = await ethers.getContractFactory("MessageVerifier");
    messageVerifier = await MessageVerifier.deploy();
    await messageVerifier.deployed();
  });

  it("Should pack a message", async () => {
    const message = "hello";
    const packed = solidityPack(["string"], [message]);

    const _packed = await messageVerifier.pack(message);
    console.log(packed, _packed);

    expect(packed).to.equal(_packed);
  });
});
