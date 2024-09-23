// "use client";
// import { WagmiProvider } from "wagmi";
// import {
//   darkTheme,
//   lightTheme,
//   RainbowKitProvider,
// } from "@rainbow-me/rainbowkit";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { config } from "../utils/config";

// const queryClient = new QueryClient();

// export default function Web3Provider({
//   children,
// }) {
//   return (
//     <WagmiProvider config={config}>
//       <QueryClientProvider client={queryClient}>
//         <RainbowKitProvider
//           theme={darkTheme({
//             accentColor: "#21C896",
//             accentColorForeground: "white",
//             borderRadius: "medium",
//             fontStack: "system",
//           })}
//         >
//           {children}
//         </RainbowKitProvider>
//       </QueryClientProvider>
//     </WagmiProvider>
//   );
// }


'use client'

import { wagmiAdapter, projectId } from '@/utils/config'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createAppKit } from '@reown/appkit/react'
import { mainnet, arbitrum } from '@reown/appkit/networks'
import React from 'react'
import { cookieToInitialState, WagmiProvider } from 'wagmi'

// Set up queryClient
const queryClient = new QueryClient()

if (!projectId) {
  throw new Error('Project ID is not defined')
}

// Set up metadata
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
  networks: [arbitrum],
  defaultNetwork: arbitrum,
  metadata: metadata,
  enableUniversalLinks: true,
  enableEIP6963: true,
  enableWalletConnect: true,
  enableWallets: true,
  enableCoinbase: true,
  enableInjected: true,
  features: {
    analytics: true, // Optional - defaults to your Cloud configuration
    allWallets: true,

  },
  themeVariables: {
    '--w3m-accent': '#08F7AF',
  }
})

export default function Web3Provider({ children, cookies }) {
  const initialState = cookieToInitialState(wagmiAdapter.wagmiConfig, cookies)

  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}