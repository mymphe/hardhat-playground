import { expect } from "chai";
import { ethers } from "hardhat";
import { hexToUtf8 } from "./utils";

describe("Strings", function () {
  it("Should return UTF-8 encoded bytes", async function () {
    const Strings = await ethers.getContractFactory("Strings");
    const strings = await Strings.deploy();
    await strings.deployed();

    const testString = "hello";
    await strings.setString(testString);

    const bytes = await strings.getStringAsBytes();

    expect(hexToUtf8(bytes)).to.equal(testString);
  });
});
