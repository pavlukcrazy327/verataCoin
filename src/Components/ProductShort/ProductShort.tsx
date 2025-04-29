'use client'
import { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';
import Link from 'next/link';
import GradientBorder from "../GradientBorder/GradientBorder";
import { useTokenOfOwnerByIndex } from '@/src/hooks/contracts/useTokenOfOwnerByIndex';
import { useTokenURI } from '@/src/hooks/contracts/useTokenURI';

import "./ProductShort.scss";

const defaultImageUrl = '/images/products/bottle 1.png';

export default function ProductShort(props: any) {
    const { address } = useAccount();
    const tokenId = useTokenOfOwnerByIndex(address, props.index);
    // const tokenId = useTokenOfOwnerByIndex('0x0485E62c3a8583DF0668CDd9a2fD599c5a98280e', props.index);
    const tokenURI = useTokenURI(tokenId);
    const [imageUrl, setImageUrl] = useState(defaultImageUrl);
    const [animationUrl, setAnimationUrl] = useState(defaultImageUrl);
    const [tokenData, setTokenData] = useState<any>(null);

    async function fetchIPFSData() {
        try {
            const convertedTokenURI = tokenURI.replace("ipfs:/", "https://ipfs.io/ipfs");
            const response = await fetch(convertedTokenURI);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setTokenData(data);
            setImageUrl(data.image);
            setAnimationUrl(data.animation_url);
        } catch (error) {
            console.error('Error fetching IPFS data:', error);
        }
    }

    useEffect(() => {
        if (tokenId > 0) {
            const fetchData = async () => {
                await fetchIPFSData();
            }
            fetchData();
        }
    }, [tokenId, tokenURI]);

    return (
        <GradientBorder background_type={props.background_type ?? 'default'} style={{ ...props.style }}>
            <div className="product-shortview flex flex-col items-center h-full">
                <div className="photo flex-1 flex justify-center items-center p-4">
                    <Link href="/products/1">
                        <video
                            disablePictureInPicture
                            loop
                            playsInline 
                            poster={imageUrl}
                            src={animationUrl}
                            style={{ width: '100%' }}
                            className="nft-video"
                        >
                        </video>
                        {/* <img src={imageUrl} style={{ width: '100%' }} alt="Product Name" /> */}
                    </Link>
                </div>
                <div className="brand mt-4">{tokenData?.name ?? 'BRAND'}</div>
                <div className="description mt-2">{props.description ?? 'Description'}</div>
            </div>
        </GradientBorder>
    )
}