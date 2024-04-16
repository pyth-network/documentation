# Migrate from Chainlink to Pyth

This guide explains how to migrate an EVM application that uses Chainlink price feeds to use Pyth price feeds.
Pyth provides a Chainlink-compatible interface for its price feeds

There are two main steps:

1. Deploy an instance of the `PythAggregatorV3` contract to provide a Chainlink-compatible feed interface.
2.

## Install Pyth SDKs

Add the [Pyth Price Feeds Solidity SDK](https://github.com/pyth-network/pyth-crosschain/tree/main/target_chains/ethereum/sdk/solidity) to the dependencies of your EVM contract.

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

`PythAggregatorV3` in `pyth-sdk-solidity` is an adapter contract that wraps the Pyth contract and implements Chainlink's `AggregatorInterface`.
One important difference between Pyth and Chainlink is that the Pyth contract holds data for all price feeds, whereas Chainlink has separate instances of `AggregatorInterface` for each feed.
The adapter contract addresses this discrepancy by wrapping a single Pyth price feed.
Users should deploy an instance of this adapter for every required price feed:

```
forge create PythAggregatorV3 --private-key $PRIVATE_KEY --rpc-url $RPC_URL --constructor-args $PYTH_ADDRESS $ETH_USD_ID
```

Then simply point your existing Chainlink-compatible app at the address of the newly deployed contracts.

The following solidity snippet shows how to use this adapter contract:

```solidity
import { AggregatorInterface } from "chainlink/AggregatorInterface.sol";

```

Pyth provides an adapter contract that implements the Chainlink AggregatorV3 interface.
Developers can deploy an instance of this adapter for each price feed they wish to use in their app.

## Schedule Updates

Pyth is a pull oracle, meaning that users are responsible for updating on-chain prices as needed.
See [What is a pull oracle?](TODO) to learn more about pull oracles.
However,

The simplest way to solve this problem is to schedule price updates for the feeds your app needs.
See the guide on [Scheduling Updates](TODO) for the various ways to solve this problem.
