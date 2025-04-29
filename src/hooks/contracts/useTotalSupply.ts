import { useEffect } from 'react';

import { NFTContract } from "@/src/constant/contracts";

import { useBlockNumber, useReadContract } from 'wagmi';
// import { ICover } from "@/types/main";


export const useTotalSupply = () => {
    const { data: blockNumber } = useBlockNumber({ watch: true });
    const { data: totalSupply, refetch } = useReadContract({
        abi: NFTContract.abi,
        address: NFTContract.address as `0x${string}`,
        functionName: 'totalSupply',
        args: [],
    });

    useEffect(() => {
        if (blockNumber) {
            refetch();
        }
    }, [blockNumber]);

    if (!totalSupply) return 0;

    try {
        const result = Number(totalSupply); // Ensure it's converted to a number
        if (isNaN(result)) return 0;
        return result;
    } catch (error) {
        return 0;
    }
};
