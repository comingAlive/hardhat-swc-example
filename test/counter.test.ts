import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import { ethers } from "hardhat";
import { Counter, Counter__factory } from "../typechain-types";

chai.use(chaiAsPromised);
const { expect } = chai;

describe("Counter", () => {
  let counter: Counter;

  beforeEach(async () => {
    const signers = await ethers.getSigners();
    const counterFactory = (await ethers.getContractFactory(
      "Counter",
      signers[0]
    )) as Counter__factory;
    counter = await counterFactory.deploy();
    await counter.deployed();
  });

  describe("invoke getCount()", async () => {
    it("expect response to be 0", async () => {
      const response = await counter.getCount();
      expect(response.toNumber()).to.eq(0);
    });
  });

  describe("invoke incrementCounter() and getCount()", async () => {
    it("expect response to be 1", async () => {
      await counter.incrementCounter();
      const response = await counter.getCount();
      expect(response.toNumber()).to.eq(1);
    });
  });
});
