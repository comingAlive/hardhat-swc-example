import { ethers } from "hardhat";
import { Counter, Counter__factory } from "../typechain-types";

async function main() {
  const Counter = (await ethers.getContractFactory(
    "Counter"
  )) as Counter__factory;

  const c = await Counter.deploy();

  console.log(c.address);
  console.log(c.deployTransaction.hash);

  await c.deployed();
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
