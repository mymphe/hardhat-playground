import { expect } from "chai";
import {
  arrayify,
  solidityKeccak256,
  solidityPack,
  soliditySha256,
} from "ethers/lib/utils";
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

    expect(packed).to.equal(_packed);
  });

  it("Should keccak a message", async () => {
    const message = "hello";
    const hash = solidityKeccak256(["string"], [message]);

    const _hash = await messageVerifier.keccak(message);

    expect(hash).to.equal(_hash);
  });

  it("Should sha a message", async () => {
    const message = "hello";
    const hash = soliditySha256(["string"], [message]);

    const _hash = await messageVerifier.sha(message);

    expect(hash).to.equal(_hash);
  });

  it("Should verify a signature", async () => {
    const message = 0;
    const [signer] = await ethers.getSigners();

    const hash = arrayify(solidityKeccak256(["uint8"], [message]));
    const signature = await signer.signMessage(hash);
    console.log("test", hash, signature);

    const verified = await messageVerifier.verify(message, signature);

    expect(verified).to.equal(true);
  });
});
