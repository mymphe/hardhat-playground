//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract MessageVerifier {
    function pack(string memory _message) public pure returns(bytes memory) {
        return abi.encodePacked(_message);
    }

    function keccak(string memory _message) public pure returns(bytes32) {
        return keccak256(pack(_message));
    }

    function sha(string memory _message) public pure returns(bytes32) {
        return sha256(pack(_message));
    }
}
