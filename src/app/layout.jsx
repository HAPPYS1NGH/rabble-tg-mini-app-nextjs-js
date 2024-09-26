import { Outfit, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import Web3Provider from "@/providers/Web3Provider";
import Layout from "@/providers/Layout";
import { TelegramProvider } from "@/providers/TelegramProvider";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const beVietnamPro = Be_Vietnam_Pro({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-beVietnamPro",
});

export const metadata = {
  title: "Create ETH Mini App",
  description: "Template for creating a Mini App on Ethereum",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${beVietnamPro.variable}`}>
      <body className={beVietnamPro.className}>
        <Web3Provider>
          <TelegramProvider>
            <Layout>{children}</Layout>
          </TelegramProvider>
        </Web3Provider>
      </body>
    </html>
  );
}
