import { defaultWagmiConfig } from '@web3modal/wagmi/react/config';
import { cookieStorage, createStorage } from 'wagmi';

// Get projectId from https://cloud.walletconnect.com
export const projectId = '6864d786-bf83-4e32-86e8-310e5329c759';

if (!projectId) throw new Error('Project ID is not defined');

export const metadata = {
  name: 'WorldMalls',
  description: 'WorldMalls',
  url: 'https://web3modal.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
};

export const arbitrum = {
  id: 13473, // testnet chain id
  name: 'Immutable X Testnet',
  network: 'imx-testnet',
  nativeCurrency: {
    name: 'tIMX',
    symbol: 'tIMX',
    decimals: 18,
  },
  // id: 13371, // mainnet chain id
  // name: 'Immutable zkEVM',
  // network: 'Immutable zkEVM',
  // nativeCurrency: {
  //   name: 'IMX',
  //   symbol: 'IMX',
  //   decimals: 18,
  // },
  iconBackground: 'transparent',
  rpcUrls: {
    default: {
      http: ['https://rpc.testnet.immutable.com'],
    //   http: ['https://rpc.immutable.com'],
    },
  },
  blockExplorers: {
    default: {
      name: 'imxscan',
      url: 'https://explorer.testnet.immutable.com',
    //   url: 'https://explorer.immutable.com',
    },
  },
};

// Create wagmiConfig
const chains = [arbitrum] as const;
export const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
});
