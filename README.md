# Ethereum

## Private Blockchain

### Installation
```
sudo apt-get install software-properties-common
sudo add-apt-repository -y ppa:ethereum/ethereum
sudo apt-get update
sudo apt-get install ethereum
```
### Initialize the blockchain
Into a dedicated folder:
```
geth --datadir ./data/PrivateBlockchain init ./config/genesis.json
```

### Run
```
geth --datadir ./data/PrivateBlockchain --networkid 9999  --nodiscover --maxpeers 0
```

### Custom
Management with API:
```
--rpc --rpcapi "eth,web3,personal,admin" --allow-insecure-unlock --rpc --rpccorsdomain "*"
```
With rpcaddr:
```
--rpcaddr "192.168.0.250"
```
### Console
Run with:
```
geth attach ./data/PrivateBlockchain/geth.ipc
```

New account:
personal.newAccount("PASSPHRASE")
The forst account become eth.coinbase

Unlock Account:

personal.unlockAccount("ADDRESS","PASSPHRASE")

#### load functionalities
-- preload "./scripts/myscripts.js"

#### New account
personal.newAccount("passphrase")

#### Transfer
```javascript
personal.unlockAccount(eth.coinbase,"passphrase")
var sender = eth.accounts[0];
var receiver = eth.accounts[1];
var amount = web3.toWei(1, "ether")
eth.sendTransaction({from:sender, to:receiver, value: amount})
```

```javascript
function newTransfer(sender,receiver,password,amount) {
  personal.unlockAccount(sender, password);
  var ether = web3.toWei(amount, "ether");
  eth.sendTransaction({from:sender, to:receiver, value: ether});
};
```

#### Import account from metamask:
On metamask account copy the private key, and paste it in a file.
On the chain directory: `geth account import FILE`

### Sources
- https://github.com/ethereum/go-ethereum/wiki/Installation-Instructions-for-Ubuntu
- https://www.edureka.co/blog/ethereum-private-network-tutorial
- https://ethereum.gitbooks.io/frontier-guide/listing_accounts.html
- https://ethereum.gitbooks.io/frontier-guide/sending_ether.html
- https://www.hackster.io/matt-farley/world-s-smartest-home-feat-blockchain-chores-kids-crypto-025e83
- https://github.com/ethereum/go-ethereum/wiki/Managing-your-accounts
- https://myhsts.org/tutorial-learn-how-to-work-with-ethereum-private-network-with-golang-with-geth.php
- https://ethereum.stackexchange.com/questions/2531/common-useful-javascript-snippets-for-geth

https://www.codeooze.com/blockchain/ethereum-wallet-private-chain-setup/
https://github.com/ethereum/go-ethereum/wiki/Contract-Tutorial
https://www.trufflesuite.com/docs/truffle/getting-started/compiling-contracts

## Smart contracts

```
npm init -f
npm install truffle
npm install solc
npm instal @openzeppelin/contracts
```


## Procedure
Into ERC20 folder:
- Configure truffle-config.js
- Be sure to have enough ETH into your balance.
- In Geth, mine some ether if needed and unlock your account:
```javascript
miner.start();admin.sleepBlocks(20);miner.stop();
personnal.unlockaccount(eth.coinbase."passphrase")
```
- Edit migrations/2_deploy_contract.js and define the contract you want to deploy
- In ERC20 folder, compile and migrate contract:
```
truffle compile
truffle migrate (miner need to be running to write contract on the blochain)
```
