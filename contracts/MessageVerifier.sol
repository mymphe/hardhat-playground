//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract MessageVerifier {
    function pack(string memory _message) public pure returns (bytes memory) {
        return abi.encodePacked(_message);
    }

    function keccak(string memory _message) public pure returns (bytes32) {
        return keccak256(pack(_message));
    }

    function sha(string memory _message) public pure returns (bytes32) {
        return sha256(pack(_message));
    }

    function verify(string memory _message, bytes memory _signature)
        public
        view
        returns (bool)
    {
        bytes32 message = prefix(keccak256(abi.encodePacked(_message)));
        (uint8 v, bytes32 r, bytes32 s) = splitSignature(_signature);

        return ecrecover(message, v, r, s) == msg.sender;
    }

    function prefix(bytes32 _hash) internal pure returns (bytes32) {
        return
            keccak256(
                abi.encodePacked("\x19Ethereum Signed Message:\n32", _hash)
            );
    }

    function splitSignature(bytes memory _signature)
        internal
        pure
        returns (
            uint8 v,
            bytes32 r,
            bytes32 s
        )
    {
        require(_signature.length == 65, "Signature must be 65 bytes long");

        assembly {
            // first 32 bytes, after the length prefix.
            r := mload(add(_signature, 32))
            // second 32 bytes.
            s := mload(add(_signature, 64))
            // final byte (first byte of the next 32 bytes).
            v := byte(0, mload(add(_signature, 96)))
        }

        return (v, r, s);
    }
}
