import { DeployFunction } from 'hardhat-deploy/types'
import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { ethers } from "hardhat";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {deployments, getNamedAccounts, ethers} = hre
  const {deploy} = deployments

  const {deployer} = await getNamedAccounts()

  await deploy('EnglishAuction', {
    from: deployer,
    args: [
      'Phone',
      '1000',
    ],
    log: true,
  })

}
export default func
func.tags = ['EnglishAuction']
