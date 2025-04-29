'use client'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import GradientBorder from "../GradientBorder/GradientBorder";
import { useTotalSupply } from "@/src/hooks/contracts/useTotalSupply";

import "./ProductShortMint.scss";

const defaultImageUrl = '/images/products/bottle 1.png';

export default function ProductShortMint(props: any) {
    const [imageUrl, setImageUrl] = useState(defaultImageUrl);
    const [animationUrl, setAnimationUrl] = useState(defaultImageUrl);
    const [tokenData, setTokenData] = useState<any>(null);
    const totalSupply = useTotalSupply();

    async function fetchIPFSData() {

        try {
            const convertedTokenURI = `https://ipfs.io/ipfs/QmXvw4bP6znmxUQkBxKrRDHeoi2uTNYhQrXPKTiTL13Gsy/${totalSupply + 1}.json`;
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
        if (totalSupply > 0) {
            const fetchData = async () => {
                await fetchIPFSData();
            }
            fetchData();
        }
    }, [totalSupply]);

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