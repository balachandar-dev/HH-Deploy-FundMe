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

const {
  networkConfig,
  developmentChains,
} = require("../helper-hardhat-config.js");

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;

  let ethUsdPriceFeedAddress;
  if (developmentChains.includes(network.name)) {
    const ethUSDAggregator = await deployments.get("MockV3Aggregator");
    ethUsdPriceFeedAddress = ethUSDAggregator.address;
  } else {
    ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeed"];
  }

  const fundMe = await deploy("FundMe", {
    from: deployer,
    args: [address],
    log: true,
  });

  module.exports.tags = ["all", "fundMe"];
};
