import { ethers } from "hardhat";
import { Counter__factory } from "../typechain-types";

async function main() {
  const CONTRACT_ADDRESS = "0x4ed7c70F96B99c776995fB64377f0d4aB3B0e1C1";

  const OWNER_ADDRESS = process.env.PUBLIC_ADDRESS!;
  const owner = await ethers.getSigner(OWNER_ADDRESS);
  const c = Counter__factory.connect(CONTRACT_ADDRESS, owner);
  const count = await c.getCount();
  console.log(count);
  // const decimals = 10 ** 8;
  // console.log(Number(result) / decimals);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
