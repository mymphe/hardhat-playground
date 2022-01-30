//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Strings {
    string public someString;
    bytes public someBytes;

    function getStringAsBytes() public view returns(bytes memory) {
        return bytes(someString);
    }

    function getBytesAsString() public view returns(string memory) {
        return string(someBytes);
    }

    function setString(string memory _string) public {
        someString = _string;
    }

    function setBytes(bytes memory _bytes) public {
        someBytes = _bytes;
    }
}
