pragma solidity ^0.6.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ERC20WithAutoMinerReward is ERC20 {
    constructor() public ERC20("Reward", "RWD") {}

    function mintMinerReward() public {
        _mint(block.coinbase, 1000);
    }

    function _mintMinerReward() internal {
        _mint(block.coinbase, 1000);
    }

    function _transfer(address from, address to, uint256 value) internal override {
        _mintMinerReward();
        super._transfer(from, to, value);
    }
}
