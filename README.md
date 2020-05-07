# Ethereum




# Smart contracts

npm init -f

npm install truffle
npm install solc
npm instal @openzeppelin/contracts

Into ERC20 folder:

Configure truffle-config.js

## Procedure
Be sure to have enough ETH into your balance.

- In Geth, mine some ether if needed and unlock your account:
```
miner.start();admin.sleepBlocks(20);miner.stop();
personnal.unlockaccount(eth.coinbase."passphrase")`
```
- Edit migrations/2_deploy_contract.js and define the contract you want to deploy

- In ERC20 folder, compile and migrate contract:
```
truffle compile
truffle migrate (miner need to be running to write contract on the blochain)
```
