//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Globals {
    uint private baseFee;

    function getBlockNumber() public view returns(uint) {
        return block.number;
    }

    function getBlockHash(uint _blockNumber) public view returns(bytes32) {
        return blockhash(_blockNumber);
    }

}
