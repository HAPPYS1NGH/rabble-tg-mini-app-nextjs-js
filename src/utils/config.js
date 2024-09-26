import { arbitrum, arbitrumSepolia, mainnet, sepolia } from "viem/chains";
import { http } from "wagmi";

import { createConfig } from "@privy-io/wagmi";

export const config = createConfig({
  chains: [mainnet, sepolia, arbitrumSepolia, arbitrum],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
});

export const privyConfig = {
  embeddedWallets: {
    createOnLogin: "users-without-wallets",
    requireUserPasswordOnCreate: true,
    noPromptOnSignature: false,
  },
  loginMethods: ["wallet", "email", "sms"],
  appearance: {
    showWalletLoginFirst: true,
  },
};
