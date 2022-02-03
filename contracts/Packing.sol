//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Packing {
    struct LooselyPackedStruct {
        address addr1;
        address addr2;
        bytes12 twelveBytes1;
        bytes12 twelveBytes2;
    }

    struct TightlyPackedStruct {
        address addr1;
        bytes12 twelveBytes1;
        address addr2;
        bytes12 twelveBytes2;
    }

    LooselyPackedStruct public looselyPackedStruct;
    TightlyPackedStruct public tightlyPackedStruct;

    function setLooselyPackedStruct(
        address _addr1,
        address _addr2,
        bytes12 _twelveBytes
    ) public {
        looselyPackedStruct = LooselyPackedStruct({
            addr1: _addr1,
            addr2: _addr2,
            twelveBytes1: _twelveBytes,
            twelveBytes2: _twelveBytes
        });
    }

    function setTightlyPackedStruct(
        address _addr1,
        address _addr2,
        bytes12 _twelveBytes
    ) public {
        tightlyPackedStruct = TightlyPackedStruct({
            addr1: _addr1,
            addr2: _addr2,
            twelveBytes1: _twelveBytes,
            twelveBytes2: _twelveBytes
        });
    }
}
