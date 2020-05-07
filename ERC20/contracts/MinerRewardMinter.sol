pragma solidity ^0.6.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MinerRewardMinter {
    ERC20DeployReady _token;

    constructor(ERC20DeployReady token) public {
        _token = token;
    }

    function mintMinerReward() public {
        _token.mint(block.coinbase, 1000);
    }
}
