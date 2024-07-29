import { useEffect, useState } from "react";

/**
 * @return True, if component was mounted.
 */
export function useDidMount() {
  const [didMount, setDidMount] = useState(false);

  useEffect(() => {
    setDidMount(true);
  }, []);

  return didMount;
}
