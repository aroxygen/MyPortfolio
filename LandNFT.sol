// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract LandNFT is ERC721, Ownable {
    uint256 public nextTokenId;
    uint256 public constant MINT_PRICE = 0.01 ether;

    mapping(uint256 => string) public coordinates;

    constructor() ERC721("LandNFT", "LAND") {}

    function mint(string memory coord) external payable {
        require(msg.value == MINT_PRICE, "Incorrect ETH amount");
        uint256 tokenId = nextTokenId;
        _safeMint(msg.sender, tokenId);
        coordinates[tokenId] = coord;
        nextTokenId++;
    }

    function withdraw() external onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }
}