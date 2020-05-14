# Ethereum

## Services
- Ethereum Name Service
- Local ERC20 Token to manage transactions


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

### Run the node
```
geth --datadir ./data/PrivateBlockchain --networkid 9999  --nodiscover --maxpeers 0
```
#### load functionalities
`-- preload "./scripts/myscripts.js"`
#### Management with API
```
--rpc --rpcapi "eth,web3,personal,admin" --allow-insecure-unlock --rpccorsdomain "*"
```
#### with rpcaddr
```
--rpcaddr "192.168.0.250"
```
#### Import account from metamask:
On metamask account copy the private key, and paste it in a file.
On the chain directory: `geth account import FILE`

### Multiples nodes
Always init the node with the same genesis.json as the first node.
Then 3 choices:

- Add peer staticly: Needed if your node is runnning with `--nodiscover` with a static-node.json ont he data folder of the node
For others cases
- Run the new node with `--bootnodes enode://... with the correct value
- Run a Bootstrap node and use `--bootnodes enode://...` with the correct value
- Add the peer at the instance with `admin.addPeer("enode://...")` into the console

### Config with TOML
https://github.com/zhiyuan2007/sample-ethereum.toml


### Console
Run with:
```
geth attach ./data/PrivateBlockchain/geth.ipc
```

#### New account
`personal.newAccount("PASSPHRASE")`
The forst account become eth.coinbase

#### Unlock Account
`personal.unlockAccount("ADDRESS","PASSPHRASE")`

#### Transfer fucntion
```javascript
function newTransfer(sender,receiver,password,amount) {
  personal.unlockAccount(sender, password);
  var ether = web3.toWei(amount, "ether");
  eth.sendTransaction({from:sender, to:receiver, value: ether});
};
```

### Sources
- https://github.com/ethereum/go-ethereum/wiki/Installation-Instructions-for-Ubuntu
- https://www.edureka.co/blog/ethereum-private-network-tutorial
- https://ethereum.gitbooks.io/frontier-guide/listing_accounts.html
- https://ethereum.gitbooks.io/frontier-guide/sending_ether.html
- https://www.hackster.io/matt-farley/world-s-smartest-home-feat-blockchain-chores-kids-crypto-025e83
- https://github.com/ethereum/go-ethereum/wiki/Managing-your-accounts
- https://myhsts.org/tutorial-learn-how-to-work-with-ethereum-private-network-with-golang-with-geth.php
- https://ethereum.stackexchange.com/questions/2531/common-useful-javascript-snippets-for-geth

### Sources
- https://www.codeooze.com/blockchain/ethereum-wallet-private-chain-setup/
- https://github.com/ethereum/go-ethereum/wiki/Contract-Tutorial
- https://www.trufflesuite.com/docs/truffle/getting-started/compiling-contracts
