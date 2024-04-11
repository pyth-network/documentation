# Migrate from Chainlink to Pyth

This guide explains how to migrate an EVM application that uses Chainlink price feeds to use Pyth price feeds.

## Install Pyth SDKs

Add the [Pyth Price Feeds Solidity SDK](https://github.com/pyth-network/pyth-crosschain/tree/main/target_chains/ethereum/sdk/solidity) to the dependencies of your EVM contract.
This SDK provides the `IPyth` interface for working with the Pyth Price Feeds Contract.

**Truffle/Hardhat**

If you are using Truffle or Hardhat, simply install the NPM package:

```bash
npm install @pythnetwork/pyth-sdk-solidity
```

**Foundry**

If you are using Foundry, you will need to create an NPM project if you don't already have one.
From the root directory of your project, run:

```bash
npm init -y
npm install @pythnetwork/pyth-sdk-solidity
```

Then add the following line to your `remappings.txt` file:

```text
@pythnetwork/pyth-sdk-solidity/=node_modules/@pythnetwork/pyth-sdk-solidity
```

## Deploy Chainlink Adapter

Pyth provides an adapter contract that implements the Chainlink AggregatorV3 interface.
Developers can deploy an instance of this adapter for each price feed they wish to use in their app.

```
forge
```

## Schedule Updates
