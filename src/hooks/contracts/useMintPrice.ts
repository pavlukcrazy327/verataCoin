import { useEffect } from 'react';
import { NFTContract } from "@/src/constant/contracts";
import { useBlockNumber, useReadContract } from 'wagmi';


export const useMintPrice = () => {
    const { data: blockNumber } = useBlockNumber({ watch: true });
    const { data: mintPrice, refetch } = useReadContract({
        abi: NFTContract.abi,
        address: NFTContract.address as `0x${string}`,
        functionName: 'mintPrice',
        args: [],
    });

    useEffect(() => {
        refetch();
    }, [blockNumber]);

    if (!mintPrice) return 0;

    try {
        const result = mintPrice as number;
        if (!result) return 0;
        return result;
    } catch (error) {
        return 0;
    }
};
