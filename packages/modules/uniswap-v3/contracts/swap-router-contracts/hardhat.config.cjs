const { baseHardhatUserConfig } = require('@infinit-xyz/core/internal/hardhat-base-config')
const { name } = require('../../package.json')

const remappings = [
  `@uniswap/v2-core/contracts=v2-core`,
  `@uniswap/v3-core/contracts=v3-core`,
  `@uniswap/v3-periphery/contracts=v3-periphery`,
  `@openzeppelin/contracts=@openzeppelin/contracts-3.4.1-solc-0.7-2`,
]

const DEFAULT_COMPILER_SETTINGS = {
  version: '0.7.6',
  settings: {
    evmVersion: 'istanbul',
    optimizer: {
      enabled: true,
      runs: 1_000_000,
    },
    metadata: {
      bytecodeHash: 'none',
    },
  },
}
const config = {
  ...baseHardhatUserConfig(__dirname, name, remappings),
  solidity: {
    compilers: [DEFAULT_COMPILER_SETTINGS],
  },
}

module.exports = config
