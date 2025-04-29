import { JsonFragment } from '@ethersproject/abi';
import NFT from './abis/NFT.json';
import marketplace from './abis/marketplace.json';
import staking from './abis/staking.json';

export type ContractType = {
  abi: JsonFragment[];
  address: `0x${string}`;
};

export const NFTContract: ContractType = {
  abi: NFT,
  address: '0x2179DA3A017a75c5E327AA2a475d3437E8fe9792',
};

export const MarketplaceContract: ContractType = {
  abi: marketplace,
  address: '0xe2D74b4123D96C68b0142634bCB29f33909fAACC',
};

export const StakingContract: ContractType = {
  abi: staking,
  address: '0x27654408E2245ba36450e0975F6eF8A859eecDd6',
};

