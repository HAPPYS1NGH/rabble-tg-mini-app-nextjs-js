"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useAccount, useDisconnect, useBalance } from 'wagmi';
import { usePrivy } from '@privy-io/react-auth';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();
  const { login, connectWallet } = usePrivy();
  const { address, isConnected, chain } = useAccount();
  const { data: balanceData } = useBalance({ address });

  const { disconnect } = useDisconnect();

  // Toggle dropdown
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <nav className="mx-3 my-4">
      <div className="flex items-end">
        <Image src="/rabble.svg" alt="Rabble" width={82.8} height={21.6} />
        <div className="ml-auto flex items-center">
          {isConnected ? (
            <div className="relative flex items-center space-x-4 bg-color/80">
              <button
                className="bg-rabble p-2 px-4 text-white rounded-full hover:text-color/80"
                onClick={toggleDropdown}
              >
                <div className="flex justify-center align-middle gap-4 text-sm">
                  <p className="text-sm">{chain?.name
                    .split(' ')
                    .map(word => word.slice(0, 3).toUpperCase()).join(' ')}</p>
                  <p className="text-sm">{balanceData?.formatted?.slice(0, 4)} {balanceData?.symbol}</p>
                  <p>
                    {dropdownOpen ? '▲' : '▼'}
                  </p>
                </div>
              </button>

              {/* Show Disconnect button if dropdown is open */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-20 w-32 bg-white border rounded-full shadow-lg text-sm ">

                  <button
                    className="w-full bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
                    onClick={() => {
                      disconnect();
                      setDropdownOpen(false); // Close dropdown on disconnect
                    }}
                  >
                    Disconnect
                  </button>

                </div>
              )}
            </div>
          ) : (
            <button
              className="bg-rabble p-2 px-4 text-white rounded-full hover:text-color/80"
              onClick={connectWallet}
            >
              Connect
            </button>
          )}
        </div>
      </div>
      <hr className="bg-black my-2" />
      <div className="flex space-x-4">
        <Link
          href="/"
          className={`${pathname === "/" ? "text-rabble" : "text-color hover:text-color/90"}`}
        >
          Home
        </Link>
        <Link
          href="/contract"
          className={`${pathname === "/contract" ? "text-rabble" : "text-color hover:text-color/90"}`}
        >
          Contract
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

