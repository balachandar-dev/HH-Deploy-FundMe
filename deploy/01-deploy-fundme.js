//1. Create a function and export it

const { getNamedAccounts, deployments, network } = require("hardhat");
const { config } = require("process");

// function deployyFunc() {
//   console.log("Hi!!!");
// }

// module.exports.default = deployyFunc;

// 2. Simply the function without name and add parameters
// module.exports = async (hre) => {};

//3. get required values from hre
module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;
};
