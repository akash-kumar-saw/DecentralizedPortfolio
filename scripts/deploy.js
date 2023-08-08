const hre = require("hardhat");

async function main() {

  const PortfolioContract = await hre.ethers.deployContract("PortfolioContract");
  console.log("Portfolio Contract deployed to",PortfolioContract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});