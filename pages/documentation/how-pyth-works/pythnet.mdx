# Pythnet

Pythnet is an application-specific blockchain operated by Pyth's data providers.
This blockchain is a computation substrate to securely combine the data provider's prices into a single aggregate price for each Pyth price feed.
Pythnet forms the core of Pyth's off-chain price feeds that serve all blockchains (except Solana mainnet).

Pythnet is powered by Solana technology: it runs the same validator software, but is a separate network that is specially configured to be a proof-of-authority chain.
The network depends on a tightly controlled supply of the chain's native token, called PGAS, which is currently controlled by the Pyth Data Association.
Operating a validator on the network requires a large stake of PGAS tokens.
The Pyth Data Association allows each data provider to operate one validator by delegating them the necessary stake.
Each data provider is then given a sufficient quantity of PGAS tokens to publish prices to the network.
The network is configured such that account creation is very expensive, preventing anyone without a substantial quantity of PGAS from deploying programs to the network.
Once governance is live, it will take over management of the PGAS token from the Pyth Data Association.

The purpose of Pythnet is to provide a secure and reliable computing substrate for Pyth's price aggregation.
Recall that Pyth's data providers submit their own price quotes for each product.
The Pyth protocol needs to be able to combine these prices to produce a single aggregate price.
This computation needs to be performed securely -- prices must be combined correctly -- and reliably -- prices must always be available for applications.
Pythnet solves both of these problems.
First, anyone can validate that the price computation is done correctly by replaying the network's transaction log.
The Wormhole guardians perform this validation when constructing the Pyth price update messages that are delivered to other blockchains.
Consequently, as long as 2/3+ of the Wormhole guardians are honest, users of Pyth prices can trust that they were computed accurately.
Second, the Pythnet blockchain has built-in redundancy to ensure high availability: it is operational as long as 2/3+ of Pythnet validators are online.
Furthermore, Pythnet remains available even when target chain transaction bandwidth is highly contested, such as during periods of high market volatility.
