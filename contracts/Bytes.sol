//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Bytes {
    bytes1 public oneByte;

    function setBytes1(bytes1 _byte) public {
        oneByte = _byte;
    }
}
