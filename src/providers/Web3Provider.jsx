"use client";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PrivyProvider } from '@privy-io/react-auth';
import { WagmiProvider } from '@privy-io/wagmi';

import { privyConfig, config } from '@/utils/config';

const queryClient = new QueryClient();

export default function Web3Provider({ children }) {
  return (
    <PrivyProvider appId={process.env.NEXT_PUBLIC_PRIVY_PROJECT_ID} config={privyConfig}>
      <QueryClientProvider client={queryClient}>
        <WagmiProvider config={config}>{children}</WagmiProvider>
      </QueryClientProvider>
    </PrivyProvider>
  );
}