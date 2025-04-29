import { useEffect } from 'react';

import { NFTContract } from "@/src/constant/contracts";

import { useBlockNumber, useReadContract } from 'wagmi';
// import { ICover } from "@/types/main";


export const useTokenOfOwnerByIndex = (address: string | undefined, index: number) => {
    const { data: blockNumber } = useBlockNumber({ watch: true });
    const params = [
        address,
        Number(index)
    ];
    const { data: tokenId, refetch } = useReadContract({
        abi: NFTContract.abi,
        address: NFTContract.address as `0x${string}`,
        functionName: 'tokenOfOwnerByIndex',
        args: params,
    });

    useEffect(() => {
        if (address && blockNumber) {
            refetch();
        }
    }, [address, blockNumber]);

    if (!address || !tokenId) return 0;
    try {
        const result = Number(tokenId); // Ensure it's converted to a number
        if (isNaN(result)) return 0;
        return result;
    } catch (error) {
        return 0;
    }
};
