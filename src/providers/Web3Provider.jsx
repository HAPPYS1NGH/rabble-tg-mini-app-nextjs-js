'use client'

import { wagmiAdapter, projectId } from '@/utils/config'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createAppKit } from '@reown/appkit/react'
import { mainnet, arbitrum, sepolia } from '@reown/appkit/networks'
import React from 'react'
import { cookieToInitialState, WagmiProvider } from 'wagmi'

// Set up queryClient
const queryClient = new QueryClient()

if (!projectId) {
  throw new Error('Project ID is not defined')
}


const metadata = {
  name: "rabble-starter-kit",
  description: "Rabble Mini App Starter Kit",
  url: "https://rabble-tg-mini-app-nextjs-js-git-walletconnect-happysingh.vercel.app/", // origin must match your domain & subdomain
  icons: ["https://rabble-tg-mini-app-nextjs-js-git-walletconnect-happysingh.vercel.app/butterfly.svg"]
}

// Create the modal
const modal = createAppKit({
  adapters: [wagmiAdapter],
  projectId,
  networks: [mainnet, arbitrum, sepolia],
  defaultNetwork: sepolia,
  metadata: metadata,
  features: {
    analytics: true, // Optional - defaults to your Cloud configuration
  },
  themeVariables: {
    '--w3m-accent': '#08F7AF',
  }
})

function ContextProvider({ children, cookies }) {
  const initialState = cookieToInitialState(wagmiAdapter.wagmiConfig, cookies)

  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}

export default ContextProvider