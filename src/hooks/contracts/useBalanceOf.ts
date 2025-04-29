import { useEffect } from 'react';

import { NFTContract } from "@/src/constant/contracts";

import { useBlockNumber, useReadContract } from 'wagmi';
// import { ICover } from "@/types/main";


export const useBalanceOf = (address: string | undefined) => {
    const { data: blockNumber } = useBlockNumber({ watch: true });
    const params = [
        address
    ];
    const { data: nftsCount, refetch } = useReadContract({
        abi: NFTContract.abi,
        address: NFTContract.address as `0x${string}`,
        functionName: 'balanceOf',
        args: params,
    });

    useEffect(() => {
        if (address && blockNumber) {
            refetch();
        }
    }, [address, blockNumber]);

    if (!address || !nftsCount) return 0;

    try {
        const result = Number(nftsCount); // Ensure it's converted to a number
        if (isNaN(result)) return 0;
        return result;
    } catch (error) {
        return 0;
    }
};
