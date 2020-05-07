//var ERC20FixedSupply = artifacts.require("ERC20FixedSupply");
//
//module.exports = function(deployer) {
//  deployer.deploy(ERC20FixedSupply);
//};

var ERC20WithMinerReward = artifacts.require("ERC20WithMinerReward");

module.exports = function(deployer) {
  deployer.deploy(ERC20WithMinerReward);
};

//var MinerRewardMinter = artifacts.require("MinerRewardMinter");
//
//module.exports = function(deployer) {
//  deployer.deploy(MinerRewardMinter);
//};

//var ERC20WithAutoMinerReward = artifacts.require("ERC20WithAutoMinerReward");
//
//module.exports = function(deployer) {
//  deployer.deploy(ERC20WithAutoMinerReward);
//};
