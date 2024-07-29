import { useRef } from "react";

export function useClientOnce(fn) {
  const canCall = useRef(true);
  if (typeof window !== "undefined" && canCall.current) {
    canCall.current = false;
    fn();
  }
}
