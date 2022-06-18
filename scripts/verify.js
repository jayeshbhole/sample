const hre = require("hardhat");

try {
  hre
    .run("verify:verify", {
      address: "0xe87278e6C76D5a4cA4C64B2fEEcDF893bC5E6116",
      constructorArguments: ["Hello World!"],
    })
    .then(() => {
      console.log("Contract verified successfully");
    });
} catch (error) {
  if (error.name !== "NomicLabsHardhatPluginError") {
    console.error(`Error verifying: ${error.name}`);
    console.error(error);
  } else {
    throw error;
  }
}
