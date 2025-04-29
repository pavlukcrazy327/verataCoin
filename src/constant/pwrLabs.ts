import { defineChain } from 'viem'

export const pwrlabs = defineChain({
  id: 13473, // testnet chain id
  name: 'Immutable X Testnet',
  network: 'imx-testnet',
  nativeCurrency: { name: 'tIMX', symbol: 'tIMX', decimals: 18 },
  // id: 13371, // mainnet chain id
  // name: 'Immutable zkEVM',
  // nativeCurrency: { name: 'IMX', symbol: 'IMX', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://rpc.testnet.immutable.com'] },
    // default: { http: ['https://rpc.immutable.com'] },
  },
  blockExplorers: {
    default: { name: 'Etherscan', url: 'https://explorer.testnet.immutable.com' },
    // default: { name: 'Etherscan', url: 'https://explorer.immutable.com' },
  },
  contracts: {
  },
})