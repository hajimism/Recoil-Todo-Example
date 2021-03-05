import { useCallback, useState } from "react";

// 真偽値のみを扱うuseState Hook。toggleは呼ぶだけでstateの値を反転してくれる。
export function useToggle(initialState: boolean): [boolean, () => void] {
  const [state, setState] = useState(initialState);
  const toggle = useCallback(() => {
    setState((prev) => !prev);
  }, []);

  return [state, toggle];
}
