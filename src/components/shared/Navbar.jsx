"use client";
import React from "react";
import Link from "next/link";
import { usePrivy, useWallets } from '@privy-io/react-auth';

import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);
  const { ready, user, authenticated, login, connectWallet, logout, linkWallet } = usePrivy();

  return (
    <nav className="mx-3 my-4">
      <div className="flex items-end">
        <Image src="/rabble.svg" alt="Rabble" width={82.8} height={21.6} />
        <div className="ml-auto flex items-center ">
          <button className="text-color/90 bg-rabble p-2  hover:text-color/80" onClick={connectWallet}>Connect</button>
        </div>
      </div>
      <hr className="bg-black my-2" />
      <div className="flex space-x-4 ">
        <Link
          href="/"
          className={`${pathname == "/" ? "text-rabble" : "text-color  hover:text-color/90"
            } `}
        >
          Home
        </Link>
        <Link
          href="/contract"
          className={`${pathname == "/contract"
            ? "text-rabble"
            : "text-color hover:text-color/90"
            } `}
        >
          Contract
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
