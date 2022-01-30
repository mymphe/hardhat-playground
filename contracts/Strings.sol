//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Strings {
    string public someString;

    function getStringAsBytes() public view returns(bytes memory) {
        return bytes(someString);
    }

    function setString(string memory _string) public {
        someString = _string;
    }
}
