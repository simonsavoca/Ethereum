var ERC20MinerRewardMinter = artifacts.require("ERC20MinerRewardMinter");

module.exports = function(deployer) {
  deployer.deploy(ERC20MinerRewardMinter);
};
