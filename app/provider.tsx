'use client'

import * as React from 'react'
import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createWeb3Modal } from '@web3modal/wagmi/react';
import { metadata, projectId } from '@/src/lib/wagmi';
import { config } from "@/src/lib/config"

const queryClient = new QueryClient()

if (!projectId) throw new Error('Project ID is not defined');

// Create modal
createWeb3Modal({
    metadata,
    wagmiConfig: config,
    projectId,
    enableAnalytics: true, // Optional - defaults to your Cloud configuration
});

export function Providers({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = React.useState(false)
    React.useEffect(() => setMounted(true), [])
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                {mounted && children}
            </QueryClientProvider>
        </WagmiProvider>
    )
}
