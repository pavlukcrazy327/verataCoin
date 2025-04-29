import { http, createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
import { pwrlabs } from "@/src/constant/pwrLabs"

export const config = createConfig({
  chains: [pwrlabs],
  transports: {
    [pwrlabs.id]: http(),
  },
})

