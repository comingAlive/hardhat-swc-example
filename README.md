# Hardhat + SWC + TypeChain Example

The fastest, typed Hardhat setup.

## How to use

Clone the repo and install dependencies:

```bash
git clone https://github.com/comingAlive/hardhat-swc-example.git
cd hardhat-swc-example

yarn
```

Copy `.env.example` to `.env`.

Fill the RPC_URL and run `hardhat node` for starting a Blockchain fork locally.

Compile Solidity code and generate typechain-types:

```bash
yarn build
```

Deploy:

```bash
yarn deploy
```

Test:

```bash
yarn test
```

Format project using Prettier:

```bash
yarn format
```
