import "@nomiclabs/hardhat-etherscan";

import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import { config as dotEnvConfig } from "dotenv";
import { HardhatUserConfig } from "hardhat/types";

dotEnvConfig();

const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const RPC_URL = process.env.RPC_URL;

const config: HardhatUserConfig = {
  defaultNetwork: "localhost",
  solidity: {
    compilers: [{ version: "0.8.4", settings: {} }],
  },
  networks: {
    hardhat: {
      forking: {
        url: RPC_URL!,
        blockNumber: 8820205,
      },
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
};

export default config;
