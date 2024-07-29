"use client";
import React, { useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { toast } from "sonner";

import { counterAbi } from "@/constants/abi";
import { counterAddress } from "@/constants/index";

export function WriteContract() {
  const { data: hash, isPending, writeContract } = useWriteContract();

  async function submit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const tokenId = formData.get("value");
    console.log(tokenId);
    writeContract({
      address: counterAddress,
      abi: counterAbi,
      functionName: "setNumber",
      args: [BigInt(tokenId)],
    });
  }

  const {
    isLoading: isConfirming,
    error,
    isSuccess: isConfirmed,
  } = useWaitForTransactionReceipt({
    hash,
  });

  useEffect(() => {
    if (isConfirmed) {
      toast.success("Transaction Successful");
    }
    if (error) {
      toast.error("Transaction Failed");
    }
  }, [isConfirmed, error]);

  return (
    <form onSubmit={submit}>
      <p className="text-sm text-gray-500">
        Make this counter your favorite number
      </p>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input
          name="value"
          placeholder="14"
          type="number"
          required
          className="bg-black text-white rounded-full "
        />
        <Button
          disabled={isPending || isConfirming}
          type="submit"
          variant={"rabble"}
          size={"one-third"}
        >
          {isPending ? "Confirming..." : "Set Number"}
        </Button>
      </div>
    </form>
  );
}
