import { useEffect } from 'react';

import { NFTContract } from "@/src/constant/contracts";

import { useBlockNumber, useReadContract } from 'wagmi';
// import { ICover } from "@/types/main";


export const useTokenURI = (tokenId: number) => {
    const { data: blockNumber } = useBlockNumber({ watch: true });
    const params = [
        Number(tokenId)
    ];
    const { data: tokenURI, refetch } = useReadContract({
        abi: NFTContract.abi,
        address: NFTContract.address as `0x${string}`,
        functionName: 'tokenURI',
        args: params,
    });

    useEffect(() => {
        if (blockNumber) {
            refetch();
        }
    }, [blockNumber]);

    if (!tokenURI) return '';

    try {
        const result = tokenURI as string;
        if (!result) return '';
        return result;
    } catch (error) {
        return '';
    }
};
