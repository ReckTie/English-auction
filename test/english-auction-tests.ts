import { expect } from "chai";
import {deployments, ethers } from "hardhat";
import { EnglishAuction } from '../typechain-types';

describe("English auction tests", function () {
  let englishAuction: EnglishAuction;

  beforeEach(async () => {
    await deployments.fixture();
    const [deployer, firstTestWallet] = await ethers.getSigners()
    // englishAuction = await ethers.getContract("EnglishAuction") as EnglishAuction;

  });

  it("should ask for a high enough bid", async function () {
    const [deployer, firstTestWallet, secondTestWallet, thirdTestWallet] = await ethers.getSigners()
    // await (await fancyBirds.mintBirds(2)).wait()

    // expect(await fancyBirds.balanceOf(deployer.address)).to.equals(2);
  });
  it("should ask for enough money", async function () {
    const [deployer, firstTestWallet, secondTestWallet, thirdTestWallet] = await ethers.getSigners()
    // await (await fancyBirds.mintBirds(2)).wait()

    // expect(await fancyBirds.balanceOf(deployer.address)).to.equals(2);
  });
});
