require("@nomicfoundation/hardhat-ethers");
// require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.10",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/pavQx7G0GV7DmmjGqvk3P4rfYl-FnD0p",
      accounts: ["310d0ac6fd8047a9690c77d27d7f2ea25cda89acef004013014c11fb721f8506"]
    },
  },
};
