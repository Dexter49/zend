const main = async () => {
  const transactionsFactory = await hre.ethers.getContractFactory("TransactionsContract");
  const transactionsContract = await transactionsFactory.deploy();

  console.log("Contract deployed to: ", transactionsContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
